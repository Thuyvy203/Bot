const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "QTV",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};

module.exports. run = async ({ api, event, args }) => {
  try {
	const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "NTKhang",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "Admin",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};
module.exports. run = async ({ api, event, args }) => {
   const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const permission = ["100033808024829",""];
  if (!permission.includes(event.senderID)) return api.sendMessage("Không Có Quyền", event.threadID, event.messageID);
  const hieusimprin = process.uptime();
  var hieu = Math.floor(hieusimprin / (60 * 60));
  var simp = Math.floor((hieusimprin % (60 * 60)) / 60);
  var rin = Math.floor(hieusimprin % 60);
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  return api.sendMessage({body:`=====『 AUTOSEEN 』=====\n◆━━━━━━━━━━━━━◆\nĐã bật chế độ tự động seen khi có tin nhắn mới\nBOT đã online được ${hieu} Giờ ${simp} Phút ${rin} Giây\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]\n━━━━━━━━━━━━━━━━━━\n`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://toan-nguyen.toan2005aye.repl.co/images/anime')).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  return api.sendMessage({body:`=====『 AUTOSEEN 』=====\n◆━━━━━━━━━━━━━◆\nĐã tắt chế độ tự động seen khi có tin nhắn mới\nBOT đã online được ${hieu} Giờ ${simp} Phút ${rin} Giây\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]\n━━━━━━━━━━━━━━━━━━\n`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('http://toan-nguyen.toan2005aye.repl.co/images/anime')).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
	}
	else {
	  return api.sendMessage({body:`=====『 HDSD 』=====\n◆━━━━━━━━━━━━━◆\n;autoseen on/off\nBot đã online được ${hieu} 𝐆𝐢𝐨̛̀ ${simp} Phút ${rin} Giây\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]\n━━━━━━━━━━━━━━━━━━\n`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-images.duytrollgame.repl.co/rin.php')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};
  }
  catch(e) {
    console.log(e);
  }
};