module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "HTHB",
	description: "Tắt Bot.",
	commandCategory: "Admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("[🔰OFFBOT🔰] Thành công",event.threadID, () =>process.exit(0))