module.exports.config = {
    name: "help",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DC-Nam",//mod lại by táo táo
    description: "Xem danh sách lệnh và info",
    commandCategory: "Tiện ích",
    usages: "[tên lệnh/all]",
    cooldowns: 5
};
module.exports.languages = {
    "vi": {},
    "en": {}
}
module.exports.run = async function({
    api,
    event,
    args,
  Currencies,
  __GLOBAL
}) {
const { events } = global.client;
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const { commands } = global.client;
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid
    } = event
    var type = !args[0] ? "" : args[0].toLowerCase()
    var msg = "",
        array = [],
        i = 0
    const cmds = global.client.commands
    const TIDdata = global.data.threadData.get(tid) || {}
    var prefix = TIDdata.PREFIX || global.config.PREFIX
    if (type == "all") {
        for (const cmd of cmds.values()) {
            msg += `💞${++i}. ${cmd.config.name}: ${cmd.config.description}\n`
        }
        return api.sendMessage(msg, tid, mid)
    }
    if (type == "all") return
    if (type) {
        for (const cmd of cmds.values()) {
            array.push(cmd.config.name.toString())
        }
        if (!array.find(n => n == args[0].toLowerCase())) {
            const stringSimilarity = require('string-similarity')
            commandName = args.shift().toLowerCase() || ""
            var allCommandName = [];
            const commandValues = cmds['keys']()
           let i = 1;
            for (const cmd of commandValues) allCommandName.push(cmd)
            const checker = stringSimilarity.findBestMatch(commandName, allCommandName)
            if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target)
            msg = `Không tìm thấy lệnh '${type}' trong hệ thống.\n➝ Lệnh gần giống được tìm thấy '${checker.bestMatch.target}'`
            api.sendMessage(msg, tid, mid)
        }
        const cmd = cmds.get(type).config
        msg = `🧸 Tên: ${cmd.name} ( ${cmd.version} )\n🔗 Quyền hạn: ${TextPr(cmd.hasPermssion)}\n👤 Tác giả: ${cmd.credits}\n💬 Mô tả: ${cmd.description}\n🧩 Thuộc nhóm: ${cmd.commandCategory}\n🌟 Cách sử dụng: ${cmd.usages}\n⏰ Thời gian chờ: ${cmd.cooldowns}s`
        api.sendMessage(msg, tid, mid)
    } else {
        CmdCategory()
        array.sort(S("nameModule"))
        for (const cmd of array) {
          msg1 = `======『 HELP COMMAND 』======\n\n`
            msg += `${i++}. Thuộc nhóm: ${cmd.cmdCategory.toUpperCase()}\n🖼 Có tổng ${cmd.nameModule.length} lệnh 🎀\n━━━━━━━━━━━━━━━━━━\n`
        }
        msg += `\n\n🦋 Hiện tại BOT có ${cmds.size} lệnh có thể sử dụng\n🧸 HDSD: ;help + tên lệnh muốn biết thông tin\n🌸 HDSD: ;help + all để xem tất cả các lệnh\n\n😻 Thả cảm xúc "🤍" vào tin nhắn này để xem thông tin của BOT\n⏰️====[ ${timeNow} ]====⏰️`
        api.sendMessage({body: msg1 + msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau.nhhoangepdaiqaa.repl.co/imgphongcanhanime')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
    }
  module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "🤍") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `===== [ THÔNG TIN BOT ] =====\n\n💮 Hiện tại BOT đã online được ${hours} Giờ ${minutes} Phút ${seconds} Giây\n⚙️ Phiên bản hiện tại: ${global.config.version}\n🔗 Tổng lệnh: ${commands.size}\n🖨️ Hiện tại có: ${events.size} lệnh\n👥 Tổng người dùng: ${global.data.allUserID.length}\n🏘️ Tổng nhóm: ${global.data.allThreadID.length}\n💓 Prefix BOT: ${prefix}`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/robot')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID); 
  }
    function CmdCategory() {
        for (const cmd of cmds.values()) {
            const {
                commandCategory,
                hasPermssion,
                name: nameModule
            } = cmd.config
            if (!array.find(i => i.cmdCategory == commandCategory)) {
                array.push({
                    cmdCategory: commandCategory,
                    permission: hasPermssion,
                    nameModule: [nameModule]
                })
            } else {
                const find = array.find(i => i.cmdCategory == commandCategory)
                find.nameModule.push(nameModule)
            }
        }
    }
}

function S(k) {
    return function(a, b) {
        let i = 0;
        if (a[k].length > b[k].length) {
            i = 1
        } else if (a[k].length < b[k].length) {
            i = -1
        }
        return i * -1
    }
}

function TextPr(permission) {
    p = permission
    return p == 0 ? "Thành Viên" : p == 1 ? "Admin box" : p = 2 ? "Admin bot" : "Toàn Quyền"
              }