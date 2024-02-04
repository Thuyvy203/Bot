const fs = require("fs-extra"),
	//lmht = JSON.parse(fs.readFileSync("./lmht.json"));
  //lmht = JSON.parse(fs.readFileSync("../../lmht.json"));
  lmht = JSON.parse(fs.readFileSync("././lmht.json"));
module.exports.config = {
	name: "lmht",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Xem thông tin tướng liên minh huyền thoại",
	commandCategory: "Tiện ích",
	usages: "lmht + tên tướng",
	cooldowns: 5
}
  module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "lmht.jpg")) request("https://images.wallpapersden.com/image/download/4k-league-of-legends-2020_68595_1920x1080.jpg").pipe(fs.createWriteStream(dirMaterial + "lmht.jpg"));
},module.exports.run = async function({
	api: e,
	event: n,
	args: a
}) {
  let tpk = `[⚜️]=== 『 LIST CHARACTER 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n`
	var l = lmht.length,
		o = 1;
	(o = parseInt(a[0]) || 1) < -1 && (o = 1);
	for (var t = Math.ceil(l / 15), r = "", s = 15 * (o - 1); s < 15 * (o - 1) + 15 && !(s >= l); s++) r += `[${s+1}]➜ ${lmht[s].name}\n`;
	return r += `━━━━━━━━━━━━━━━━━━\n[⚜️]➜ Hiện đang có tổng ${l} tướng\n[⚜️]➜ Số trang (${o}/${t})\n[⚜️]➜ Dùng ${global.config.PREFIX}${this.config.name} <số trang>\n[⚜️]➜ Reply theo STT`, e.sendMessage({body: tpk + r, attachment: fs.createReadStream(__dirname + `/noprefix/lmht.jpg`)},n.threadID, ((e, a) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: a.messageID,
			author: n.senderID,
			type: "choosee"
		})
	}), n.messageID)
}, module.exports.handleReply = async function({
	api: e,
	event: n,
	handleReply: a
}) {
	if ("choosee" === a.type) try {
		var l = lmht[parseInt(n.body - 1)].name,
			o = lmht[parseInt(n.body - 1)].hp,
			t = lmht[parseInt(n.body - 1)].hp_gain_per_lvl,
			r = lmht[parseInt(n.body - 1)].hp_regen,
			s = lmht[parseInt(n.body - 1)].hp_regen_gain_per_lvl,
			i = lmht[parseInt(n.body - 1)].mana,
			p = lmht[parseInt(n.body - 1)].mana_gain_per_lvl,
			g = lmht[parseInt(n.body - 1)].mana_regen,
			c = lmht[parseInt(n.body - 1)].mana_regen_gain_per_lvl,
			d = lmht[parseInt(n.body - 1)].attack_damage,
			h = lmht[parseInt(n.body - 1)].attack_damage_gain_per_lvl,
			_ = lmht[parseInt(n.body - 1)].attack_speed,
			y = lmht[parseInt(n.body - 1)].attack_speed_gain_per_lvl,
			m = lmht[parseInt(n.body - 1)].armor,
			I = lmht[parseInt(n.body - 1)].armor_gain_per_lvl,
			b = (lmht[parseInt(n.body - 1)].magic_resist, lmht[parseInt(n.body - 1)].magic_resist_gain_per_lvl, lmht[parseInt(n.body - 1)].movement_speed, lmht[parseInt(n.body - 1)].range, lmht[parseInt(n.body - 1)].ability_power),
			$ = lmht[parseInt(n.body - 1)].ability_haste,
			v = lmht[parseInt(n.body - 1)].crit;
		console.log(lmht[parseInt(n.body - 1)].images);
		const a = lmht[parseInt(n.body - 1)].images,
			u = require("request");
		return u(encodeURI(`${a}`)).pipe(fs.createWriteStream(__dirname + "/cache/champ.png")).on("close", (() => e.sendMessage({
			body: `[⚜️]=== 『 INFORMATION CHARACTER 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[👤]➜ Tên : ${l}\n[💓]➜ HP: ${o}\n[🎊]➜ HP tăng theo LV: ${t}\n[💞]➜ HP hồi phục: ${r}\n[💝]➜ HP hồi phục theo LV: ${s}\n\n[💙]➜ Mana: ${i}\n[⚜️]➜ Mana tăng theo LV: ${p}\n[💌]➜ Mana hồi phục: ${g}\n[💗]➜ Mana hồi phục theo LV: ${c}\n\n[🗡️]➜ Tấn công: ${d}\n[🍑]➜ Tấn công tăng theo LV: ${h}\n[✨]➜ Tốc đánh: ${_}\n[🍁]➜ Tốc đánh tăng theo LV: ${y}\n\n[🥋]➜ Giáp: ${m}\n[☠️]➜ Giáp tăng theo LV: ${I}\n[⚔️]➜ Abilibity Pow: ${b}\n[🌠]➜ Abilibity Haste: ${$}\n\n[🍄]➜ Crit: ${v}`,
			attachment: fs.createReadStream(__dirname + "/cache/champ.png")
		}, n.threadID, (() => fs.unlinkSync(__dirname + "/cache/champ.png")), n.messageID)))
	} catch (e) {
		console.log(e)
	}
};
