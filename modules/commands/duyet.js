module.exports.config = {
	name: "duyet",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "DungUwU mod by Nam",
	description: "duyệt box dùng bot xD",
	commandCategory: "Admin",
    cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const dataPending = __dirname + "/cache/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
    if (handleReply.author != event.senderID) return;
    const { body, threadID, messageID, senderID } = event;
    const { type } = handleReply;
    let data = JSON.parse(fs.readFileSync(dataPath));
    let dataP = JSON.parse(fs.readFileSync(dataPending));
    let idBox = (args[0]) ? args[0] : threadID;
  switch (type) {
        case "pending": {
          switch (body) {
                case `A`: {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`» Phê duyệt thành công box:\n${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
        }
      }
    }
  }
module.exports.run = async  ({ event, api, args, Threads, Users, handleReply  }) => {
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
  let dataP = JSON.parse(fs.readFileSync(dataPending));
  let msg = "";
  var lydo = args.splice(2).join(" ");
  let idBox = (args[0]) ? args[0] : threadID;
        if (args[0] == "list" || args[0] == "l") {
    msg = "[ MODE ] - Danh sách các nhóm đã duyệt\n━━━━━━━━━━━━━━━━━━";
    let count = 0;
    for (e of data) {
       let name = (await api.getThreadInfo(e)).name || "Tên không tồn tại";
      msg += `\n\n(${count += 1}). ${name}\n🔰 ID: ${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "a",
        })
    }, messageID);
        }
     else if (args[0] == "pending" || args[0] == "p") {
    	msg = `=====「 DS BOX CHƯA DUYỆT: ${dataP.length} 」 ====`;
    	let count = 0;
    	for (e of dataP) {
        let threadInfo = await api.getThreadInfo(e);
          let threadName = threadInfo.threadName ? threadInfo.threadName : await Users.getNameUser(e);
    		msg += `\n〘${count+=1}〙» ${threadName}\n${e}`;
    	}
    	api.sendMessage(msg, threadID, (error, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,
            type: "pending",
        })
    }, messageID);
     }
       else if (args[0] == "help" || args[0] == "h") {
         const tst = (await Threads.getData(String(event.threadID))).data || {};
  const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
  const nmdl = this.config.name
  const cre = this.config.credits
        return api.sendMessage(`=====「 DUYỆT BOX 」=====\n━━━━━━━━━━━━━━━━━━\n\n${pb}${nmdl} l/list => xem danh sách box được duyệt 🎀\n\n${pb}${nmdl} p/pending => xem danh sách box chưa duyệt 🎀\n\n${pb}${nmdl} d/del => kèm theo ID để xoá khỏi danh sách dùng BOT 🎀\n\n${pb}${nmdl} => kèm theo ID để duyệt box 🎀\n`, threadID, messageID);
       }
    else if (args[0] == "del" || args[0] == "d") {
    	let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
      idBox = (args[1]) ? args[1] : event.threadID;
      if (isNaN(parseInt(idBox))) return api.sendMessage("[ Duyệt Del ] ➠  Không phải một con số", threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage("[ Duyệt Del ] ➠  Nhóm không được duyệt từ trước", threadID, messageID);
      
    	api.sendMessage(`====『 DUYỆT DEL 』 ====\n━━━━━━━━━━━━━━━━\n[ 👨‍👩‍👧‍👦 ] Nhóm ${threadName}\n[🔰] ID: ${idBox} \n🌟 đã bị gỡ khỏi danh sách dùng BOT`, threadID, () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("[ KIỂM DUYỆT ]\n[🔰] ID không hợp lệ", threadID, messageID);
  else if (data.includes(idBox)) api.sendMessage(`[ KIỂM DUYỆT ]\n[🔰] ID: ${idBox} đã được phê duyệt từ trước`, threadID, messageID);
  else api.sendMessage("[ MODE ] ➠ Nhóm của bạn đã được phê duyệt 💞", idBox, (error, info) => {
    if (error) return api.sendMessage("[ MODE ] ➠ Đã xảy ra lỗi", threadID, messageID);
      if (error) return api.sendMessage(`» Đã xảy ra lỗi`, event.threadID, event.messageID)
  
      else api.changeNickname(`[ ${global.config.PREFIX} ] ➺ ${global.config.BOTNAME}`, event.threadID, api.getCurrentUserID())
   		
      const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
axios.get('https://apitoansex.toannguyen162.repl.co/slap').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
      api.sendMessage({body: `\n== 『 Kết Nối Thành Công 』==
━━━━━━━━━━━━━━━━━━
→ Prefix: [ ${global.config.PREFIX} ]
→ Nhập: ${global.config.PREFIX}admin list sẽ có thông tin của admin BOT
→ Mọi thắc mắc xin liên hệ: https://www.facebook.com/BerXinh.203
━━━━━━━━━━━━━━━━━━
→ Made by: Bơ Bơ ❤️`,
						attachment: fs.createReadStream(__dirname + `/cache/duyet.${ext}`)
					}, event.threadID,() => fs.unlinkSync(__dirname + `/cache/duyet.${ext}`), event.messageID, idBox);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/duyet.${ext}`)).on("close", callback);
			}) 
   		if (error) return api.sendMessage("[ MODE ] ➠ Đã xảy ra lỗi", threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`=== [ Duyệt Box ] ===
🔰 Phê duyệt thành công box có ID: ${idBox}`, threadID, () => {
          dataP.splice(dataP.indexOf(idBox), 1);
    		fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
    	}, messageID)
        }
   	});
}