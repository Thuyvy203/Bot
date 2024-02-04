/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
const fs = require("fs");
module.exports.config = {
    name: "lixi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie", //Sang Nguyễn edit mod, Code working của diện
    description: "Đầu xuân năm mới",
    commandCategory: "Box",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1100000
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "baolixi.png")) request("https://imgur.com/Y03gw5v.png").pipe(fs.createWriteStream(dirMaterial + "baolixi.png"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("Tham lam !! Lì xì của người ta mà cũng lấy 🎋", e.threadID, e.messageID)

var lixi1 = Math.floor(Math.random() * 100) + 80; 
var lixi2 = Math.floor(Math.random() * 100) + 80; 
var lixi3 = Math.floor(Math.random() * 100) + 80; 
var lixi4 = Math.floor(Math.random() * 100) + 80; 
var lixi5 = Math.floor(Math.random() * 100) + 80; 
var lixi6 = Math.floor(Math.random() * 100) + 50; 
  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("February 10, 2024 00:00:00") - Date.parse(new Date()),
            m = Math.floor( (t/1000/60) % 60 ),
            h = Math.floor( (t/(1000*60*60)) % 24 ),
            d = Math.floor( t/(1000*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = `🧧 Chúc mừng bạn vừa nhận  ${lixi1}$ khi mở phong lì xì này 🏮` ;
                await Currencies.increaseMoney(e.senderID, parseInt(lixi1)); 
                break;             
                case "2": msg = `🧧 Chúc mừng bạn vừa nhận  ${lixi2}$ khi mở phong lì xì này 🎐`; 
                await Currencies.increaseMoney(e.senderID, parseInt(lixi2)); 
                break;
                case "3": msg = `🧧 Chúc mừng bạn vừa nhận  ${lixi3}$ khi mở phong lì xì này`; 
                await Currencies.increaseMoney(e.senderID, parseInt(lixi3)); 
                break;
                case "4": msg = `🧧 Chúc mừng bạn vừa nhận  ${lixi4}$ khi mở phong lì xì này 🌸`; 
                await Currencies.increaseMoney(e.senderID, parseInt(lixi4)); 
                break;
                case "5": msg = `🧧 Chúc mừng bạn vừa nhận  ${lixi5}$ khi mở phong lì xì này 🎐`; 
                await Currencies.increaseMoney(e.senderID, parseInt(lixi5)); 
                break;
                case "6": msg = `🧧 Chúc mừng bạn vừa nhận  ${lixi6}$ khi mở phong lì xì này`; 
                await Currencies.increaseMoney(e.senderID, parseInt(lixi6)); 
                break;
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("🎋 Vui lòng nhập 1 con số", e.threadID, e.messageID);
            if (choose > 6 || choose < 1) 
            return api.sendMessage("🎋 Lựa chọn không nằm trong danh sách.", e.threadID, e.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "🎋 Chưa update...") {
                msg = "🎋 Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.lixitime = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 10, 2024") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.lixitime) > 0) {

        var time = cooldown - (Date.now() - data.lixitime),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`🧧 Bạn vừa nhận lì xì rồi 🎋`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "ㅤㅤ 🏮=== LÌ XÌ ===🏮" +
                `\n🌸 Tết âm lịch còn : ${d} ngày ${h} giờ ${m} phút 🎋` +
                "\n\n1. Bao lì xì 1 🧧" +
                "\n2. Bao lì xì 2 🧧" +
                "\n3. Bao lì xì 3 🧧" +
                "\n4. Bao lì xì 4 🧧" +
                "\n5. Bao lì xì 5 🧧" +
                "\n6. Bao lì xì 6 🧧" +
                `\n\n🧨 Hãy reply tin nhắn chọn bao lì xì muốn nhận.`,
                attachment: fs.createReadStream(__dirname + `/cache/baolixi.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.lixitime = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}