module.exports.config = {
	name: "id",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy ID người dùng.",
	commandCategory: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
	uid = event.messageReply.senderID
	var data = await api.getUserInfoV2(uid);
        var name = data.name
  
	var callback = () =>   api.sendMessage({body:`=== [ FACEBOOK UID ] ===\n━━━━━━━━━━━━━━━━━━\nTên: ${name}\nID: ${uid}\nLiên hệ: m.me/${uid}\nLink Facebook: https://www.facebook.com/${uid}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    if (!args[0]) {
	    var data = await api.getUserInfoV2(event.senderID);
var name = data.name

        var callback = () =>  api.sendMessage({body:`=== [ FACEBOOK UID ] ===\n━━━━━━━━━━━━━━━━━━\nTên: ${name}\nID: ${event.senderID}\nLiên hệ: m.me/${event.senderID}\nLink Facebook: https://www.facebook.com/${event.senderID}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    else {
	if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await api.getUID(args[0]);
    var data = await api.getUserInfoV2(res_ID);
    var name = data.first_name
    var link = data.link
    var callback = () => api.sendMessage({body:`=== [ FACEBOOK UID ] ===\n━━━━━━━━━━━━━━━━━━\nTên: ${name}\nID: ${res_ID}\nLiên hệ: m.me/${res_ID}\nLink Facebook: https://www.facebook.com/${link}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); }
	else {
		if (args.join().indexOf('@') !== -1) var uid = Object.keys(event.mentions) 
var data = await api.getUserInfoV2(uid);
var name = data.name
      var callback = () => 
api.sendMessage({body:`=== [ FACEBOOK UID ] ===\n━━━━━━━━━━━━━━━━━━\nTên: ${name}\nID: ${uid}\nLiên hệ: m.me/${uid}\nLink Facebook: https://www.facebook.com/${uid}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
	}
}
  }