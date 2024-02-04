module.exports.config = {
    name: "adc",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Áp dụng code từ buildtooldev và pastebin và github",
    commandCategory: "Admin",
    usages: "Thành viên không được dùng,đừng có mà tò mò",
    cooldowns: 0,
    dependencies: {
        "pastebin-api": "",
        "cheerio": "",
        "request": ""
    }
};

module.exports.run = async function ({ api, event, args }) {
const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
   const lon = process.uptime();
  var hieu = Math.floor(lon / (60 * 60));
  var simp = Math.floor((lon % (60 * 60)) / 60);
  var rin = Math.floor(lon % 60);
const permission = ["100033808024829"];
	if (!permission.includes(event.senderID))  api.sendMessage( "Không có quyền!" , event.threadID, event.messageID);

  var idad = "100033808024829"
  const permissions = ["100033808024829",""];
var name = global.data.userName.get(event.senderID)
var threadInfo = await api.getThreadInfo(event.threadID);
var nameBox = threadInfo.threadName;
  var time = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)");
	if (!permissions.includes(event.senderID)) return api.sendMessage("Box : " + nameBox + "\n" + name + " đã dùng lệnh " + this.config.name + "\nLink Facebook : https://www.facebook.com/profile.php?id=" + event.senderID + "\nTime : " + time, idad);
    const axios = require('axios');
    const fs = require('fs');
    const request = require('request');
    const cheerio = require('cheerio');
    const { join, resolve } = require("path");
    const { senderID, threadID, messageID, messageReply, type } = event;
    var name = args[0];
    if (type == "message_reply") {
        var text = messageReply.body;
    }
    if(!text && !name)  return api.sendMessage({body:`=====『 MENU ADC 』=====\n◆━━━━━━━━━━━━━◆\nVui lòng reply link muốn áp dụng code hoặc ghi tên file để up code lên pastebin!\nBot đã online được tổng cộng: ${hieu} Giờ ${simp} Phút ${rin} Giây\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]\n━━━━━━━━━━━━━━━━━━\n`
},event.threadID, event.messageID)
    if(!text && name) {
        var data = fs.readFile(
          `${__dirname}/${args[0]}.js`,
          "utf-8",
          async (err, data) => {
            if (err) return api.sendMessage(`Lệnh ${args[0]} không tồn tại!.`, threadID, messageID);
            const { PasteClient } = require('pastebin-api')
            const client = new PasteClient("R02n6-lNPJqKQCd5VtL4bKPjuK6ARhHb");
            async function pastepin(name) {
              const url = await client.createPaste({
                code: data,
                expireDate: 'N',
                format: "javascript",
                name: name,
                publicity: 1
              });
              var id = url.split('/')[3]
              return 'https://pastebin.com/raw/' + id
            }
            var link = await pastepin(args[1] || 'noname')
            return api.sendMessage(link, threadID, messageID);
          }
        );
        return
    }
    var urlR = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    var url = text.match(urlR);
    if (url[0].indexOf('pastebin') !== -1 || url[0].indexOf('github') !== -1 || url[0].indexOf('phamvandien') !== -1) {
        axios.get(url[0]).then(i => {
            var data = i.data
            fs.writeFile(
                `${__dirname}/${args[0]}.js`,
                data,
                "utf-8",
                function (err) {
                    if (err) return api.sendMessage(`Đã xảy ra lỗi khi áp dụng code vào ${args[0]}.js`, threadID, messageID);
                    api.sendMessage(`Đã áp dụng code vào ${args[0]}.js, sử dụng lệnh load`, threadID, messageID);
                }
            );
        })
    }

    if (url[0].indexOf('buildtool') !== -1 || url[0].indexOf('tinyurl.com') !== -1) {
        const options = {
            method: 'GET',
            url: messageReply.body
        };
        request(options, function (error, response, body) {
            if (error) return api.sendMessage('Vui lòng chỉ reply link', threadID, messageID);
            const load = cheerio.load(body);
            load('.language-js').each((index, el) => {
                if (index !== 0) return;
                var code = el.children[0].data
                fs.writeFile(`${__dirname}/${args[0]}.js`, code, "utf-8",
                    function (err) {
                        if (err) return api.sendMessage(`Đã xảy ra lỗi khi áp dụng code mới cho "${args[0]}.js".`, threadID, messageID);
                        return api.sendMessage(`Đã thêm code này vào "${args[0]}.js", sử dụng lệnh load`, threadID, messageID);
                    }
                );
            });
        });
        return
    }
    if (url[0].indexOf('drive.google') !== -1) {
      var id = url[0].match(/[-\w]{25,}/)
      const path = resolve(__dirname, `${args[0]}.js`);
      try {
        await utils.downloadFile(`https://drive.google.com/u/0/uc?id=${id}&export=download`, path);
        return api.sendMessage(`Đã thêm code này vào "${args[0]}.js" nếu xảy ra lỗi thì đổi file drive thành txt nhé!`, threadID, messageID);
      }
      catch(e) {
        return api.sendMessage(`Đã xảy ra lỗi khi áp dụng code mới cho "${args[0]}.js".`, threadID, messageID);
       }
                 }
            }
