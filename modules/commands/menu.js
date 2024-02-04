module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Hướng dẫn cho người mới",
	usages: "[all/-a] [số trang]",
	commandCategory: "Dành cho người dùng",
	cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "Hãy nhập 1 con số";
	else if (num > data.length || num <= 0) msg = "Số bạn chọn không nằm trong danh sách";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += ` 『  ${command_config.commandCategory.toUpperCase()}   』   \n`;
			msg += `\n→ Tên lệnh: ${dataAfter}`;
			msg += `\n→ Mô tả: ${command_config.description}`;
			msg += `\n→ Cách sử dụng: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\n→ Thời gian chờ: ${command_config.cooldowns || 5}s`;
			msg += `\n→ Quyền hạn: ${(command_config.hasPermssion == 0) ? "Người dùng" : (command_config.hasPermssion == 1) ? "Quản trị viên nhóm" : "Quản trị viên bot"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
			msg += `\n\n[💓]`;
		} else {
			check = true;
			let count = 0;
			msg += `→ ${dataAfter.group.toUpperCase()} \n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n ${count+=1}. → ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n╭──────╮\n    REPLY \n╰──────╯ [💓] tin nhắn theo số để xem chi tiết";
		}
	}
	const axios = require('axios');
	const fs = require('fs-extra');
	const img = ["https://i.imgur.com/3eieNQt.gif", "https://i.imgur.com/vekcCyz.gif", "https://i.imgur.com/qwfQeDB.gif", "https://i.imgur.com/Mn4AFfo.gif", "https://i.imgur.com/s6ZgMkc.gif",]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 
	const imgP = []
	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
	fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
	imgP.push(fs.createReadStream(path))
	var msgg = {body: msg}
	api.unsendMessage(handleReply.messageID);
	return api.sendMessage(msgg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const axios = require('axios');
	const fs = require('fs-extra');
	const imgP = []
	const img = ["https://i.imgur.com/3eieNQt.gif",
"https://i.imgur.com/vekcCyz.gif", "https://i.imgur.com/qwfQeDB.gif", "https://i.imgur.com/Mn4AFfo.gif", "https://i.imgur.com/s6ZgMkc.gif",]
	var path = __dirname + "/cache/menu.gif"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 

   	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
	const command = commands.values();
	var group = [], msg = "=====『 MENU COMMAND 』=====\n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 2222222222);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "Vui lòng chọn số";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Số bạn chọn không nằm trong danh sách";
			else check = true;
		}
		if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
			bonus = index_start;
			index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. → ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n→ [📖] Trang ${page_num_input || 1}/${page_num_total}`;
			msg += `\n→ [💗] Để xem các trang khác, dùng: ${prefix}menu [-a/all] [số trang]`;
			msg += "🧸🧸🧸🧸🧸🧸🧸🧸🧸🧸";
		}
		var msgg = {body: msg}
		return api.sendMessage(msgg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 2222222222);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "Vui lòng chọn số";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Số bạn chọn không có trong danh sách";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
		bonus = index_start;
		index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n${index_start+=1}. → ${commandGroup.group.toUpperCase()} `);
		msg += `\n\n→ [📖] Trang ${page_num_input || 1}/${page_num_total} `;
		msg += `\n→ [🎀] Để xem các trang trước, dùng: ${prefix}menu [số trang]`;
    msg += `\n→ [🧸] Bạn có thể dùng ${prefix}menu all để xem tất cả lệnh`
		msg += `\n╭─────╮\n ${global.client.commands.size} Lệnh     \n╰─────╯ \n [💓] Reply tin nhắn theo số để xem các lệnh được phân loại  🐼`;	}
	var msgg = {body: msg}
	return api.sendMessage(msgg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
    }