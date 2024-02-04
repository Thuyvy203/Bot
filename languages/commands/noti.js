const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "noti",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "TruongMini",
    description: "",
    commandCategory: "Admin",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `=== 『 REPLY NOTICE 』 ===\n📝 Nội dung : ${body}\n🎀 Từ ${name} trong nhóm ${(await Threads.getInfo(threadID)).threadName || "Unknown"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `=== 『 REPLY NOTICE 』 ===\n📝 Nội dung : ${body}\n🎀 Từ ${name} trong nhóm ${(await Threads.getInfo(threadID)).threadName || "Unknown"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `=== 『 ADMIN NOTICE 』 ===\n📝 Nội dung : ${body}\n🎀 Từ ${name} !\n\nReply tin nhắn này để báo về Admin`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `=== 『 ADMIN NOTICE 』 ===\n📝 Nội dung : ${body}\n🎀 Từ ${name}!\n\nReply tin nhắn này để báo về Admin`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `=== 『 ADMIN NOTICE 』 ===\n📝 Nội dung : ${args.join(" ")}\n🎀 Từ ${await Users.getNameUser(senderID)}\n\nReply tin nhắn này để báo về Admin`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `=== 『 ADMIN NOTICE 』 ===\n📝 Nội dung : ${args.join(" ")}\n🎀 Từ ${await Users.getNameUser(senderID)}\n\nReply tin nhắn này để báo về Admin`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Đã gửi đến ${can} box, không thể gửi đến ${canNot} box`, threadID);
}