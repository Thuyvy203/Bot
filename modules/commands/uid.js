
module.exports.config = {
    name: "uid",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dũngkon",
    description: "Lấy uid facebook",
    commandCategory: "Tiện ích",
    usages: "uid reply/@tag",
    cooldowns: 0
    };
module.exports.run = async function ({ api, event, args, Users, Currencies }) {
  const axios = global.nodemodule["axios"];
  const fs = require("fs-extra");
  const request = require("request");
    if (Object.keys(event.mentions).length == 1) {
      var mentions = Object.keys(event.mentions)
      var name = (await Users.getData(mentions)).name
      var getlink = (await axios.get(`https://apidungkonuser.dungkonuwu.repl.co/facebook/timejoine?uid=${mentions}`)).data;
      var day = getlink.day
      var time = getlink.time
      var callback = () => api.sendMessage({
        body: `Tên: ${name}\nUid: ${mentions}\nNgày tạo: ${day}\nGiờ tạo: ${time}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
      },
        event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);
      return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
    }
    else {
      if (!args[0]) {
        if (event.type == "message_reply")
          idmen = event.messageReply.senderID
        else idmen = event.senderID;
        var name = (await Users.getData(idmen)).name;
        var getlink = (await axios.get(`https://apidungkonuser.dungkonuwu.repl.co/facebook/timejoine?uid=${idmen}`)).data;
        var day = getlink.day
        var time = getlink.time
        var callback = () => api.sendMessage({ 
         body: `Tên: ${name}\nUID: ${idmen}\nNgày tạo: ${day}\nGiờ tạo: ${time}`,
          attachment: fs.createReadStream(__dirname + "/cache/1.png")
        },
          event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);
        return request(encodeURI(`https://graph.facebook.com/${idmen}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`))
          .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
          .on('close', () => callback());
      }
    }
  }