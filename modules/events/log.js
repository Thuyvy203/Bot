module.exports.config = {
  name: "log",
  eventType: ["log:unsubscribe", "log:subscribe", "log:thread-name"],
  version: "1.0.0",
  credits: "Tpk",//*được sự chỉ dẫn nhiệt tình của dc-nam
  description: "Ghi lại thông báo các hoạt đông của bot!",
  envConfig: {
    enable: true
  }
};

module.exports.run = async function ({ api, event, Users, Threads, Currencies }) {
  const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const threadInfo = await api.getThreadInfo(event.threadID)
    var threadName = threadInfo.threadName||"Tên không tồn tại";
  const logger = require("../../utils/log");
  if (!global.configModule[this.config.name].enable) return;
  let botID = api.getCurrentUserID();
   let threadMem = threadInfo.participantIDs.length;
  /*var allThreadID = global.data.allThreadID;
  for (const singleThread of allThreadID) {
    const thread = global.data.threadData.get(singleThread) || {};
    if (typeof thread["log"] != "undefined" && thread["log"] == false) return;
  }*/
  
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY HH:mm:ss");
  let sex = threadInfo.approvalMode;
  var pd = sex == false ? 'Tắt' : sex == true ? 'Bật' : '\n';
  let qtv = threadInfo.adminIDs.length;
  let icon = threadInfo.emoji;
  //let nameThread = (await Threads.getData(event.threadID)).threadInfo.threadName || "Tên không tồn tại";
  //let nameThread = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại"; 

  //let threadInfo = await api.getThreadInfo(event.threadID);
  //nameThread =threadInfo.threadName;
  const nameUser = global.data.userName.get(event.author) || await Users.getNameUser(event.author);

  //console.log(nameThread)
 
  var formReport = "====「 BOT THÔNG BÁO 」 ====\n━━━━━━━━━━━━━━━━━━" +
    //"\n\n[👨‍👩‍👧‍👧] 𝗕𝗼𝘅: " + nameThread +
    `\n[🧸] Tên nhóm: ${threadName} ` +
    "\n[🔰] ID nhóm: " + event.threadID +
    `\n[💓] Tổng số thành viên: ${threadMem}` +
    `\n[🧩] Phê duyệt: ${pd}` +
    `\n[⚜️] Quản trị viên: ${qtv}` +
    `\n[😻] Biểu tượng cảm xúc: ${icon ? icon : 'Không sử dụng'}` +
    "\n━━━━━━━━━━━━━━━━━━" +
    "\n[💞] Hành động : {task}" +
    "\n[👤] Tên người dùng : " + nameUser +
    "\n[🍄] UID: " + event.author +
    "\n[🌐] Link FB: https://www.facebook.com/profile.php?id=" + event.author +
    "\n━━━━━━━━━━━━━━━━━━\n[⏰] Thời gian: " + time + "",
    task = "";
  switch (event.logMessageType) {
    case "log:thread-name": {
        newName = event.logMessageData.name || "Tên không tồn tại";
        task = "Người dùng thay đổi tên nhóm thành " + newName + "";
        await Threads.setData(event.threadID, {name: newName});
        break;
    }
    case "log:subscribe": {
      if (event.logMessageData.addedParticipants.some(i => i.userFbId == botID)) task = "Người dùng đã thêm bot vào một nhóm mới!";
      break;
    }
    case "log:unsubscribe": {
      if (event.logMessageData.leftParticipantFbId == botID) {
        if(event.senderID == botID) return;
        const data = (await Threads.getData(event.threadID)).data || {};
        data.banned = true;
        var reason = "Kích bot tự do, không xin phép";
        data.reason = reason || null;
        data.dateAdded = time;
        await Threads.setData(event.threadID, { data });
        global.data.threadBanned.set(event.threadID, { reason: data.reason, dateAdded: data.dateAdded });

        task = "Người dùng đã kick bot ra khỏi nhóm!"
      }
      break;
    }
    default:
      break;
  }

  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
  if (task.length == 0) return;
  formReport = formReport
    .replace(/\{task}/g, task);

  return api.sendMessage({
body: formReport, attachment: [await streamURL(threadInfo.imageSrc), await streamURL(`https://graph.facebook.com/${event.author}/picture?height=720&width=720&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)]
}, global.config.ADMINBOT[0], (error, info) => {
    if (error) return logger(formReport, "[ Logging Event ]");
  });
    }