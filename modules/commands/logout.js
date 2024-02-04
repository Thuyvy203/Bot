module.exports.config = {
    name: "logout",
    version: "1.0.1",
    hasPermssion: 3,
    credits: "HĐGN",
    description: "Đăng xuất acc bot",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, event })
{
api.sendMessage("Đang đăng xuất...",event.threadID,event.messageID)
api.logout()
}