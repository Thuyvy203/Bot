module.exports.config = {
    name: "locmem",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "",
    commandCategory: "Tiện ích",
    depndencies: {},
    usages: "",
    cooldowns: 5
}, module.exports.handleReply = async function({
    api: e,
    args: n,
    Users: a,
    handleReply: s,
    event: t,
    Threads: r
}) {
    const {
        threadID: o,
        messageID: i
    } = t;
    if (parseInt(t.senderID) === parseInt(s.author) && "reply" === s.type) {
        var d = 1,
            c = "",
            h = t.body.split(" ").map((e => parseInt(e))),
            {
                userInfo: p,
                adminIDs: g
            } = await e.getThreadInfo(t.threadID);
        if (!g.some( (j) =>+j['id'] == +e.getCurrentUserID() )) return e.sendMessage("Cần cấp quyền quản trị viên cho bot", o);
        for (let n of h) {
            var l = s.idLoc[n - 1],
                m = s.idName[n - 1];
            await e.removeUserFromGroup(parseInt(l), o);
            c += d++ + ". " + m + "\n UID: " + l + "\n"
        }
        e.sendMessage(`🍄 Lọc mấy con cá (true/false) 🍄\n\n${c}`, t.threadID, (() => e.unsendMessage(s.messageID)))
    }
}, module.exports.run = async function({
    api: e,
    event: n,
    args: a,
    Users: s,
    Threads: t,
    Currencies: r
}) {
    const {
        threadID: o,
        messageID: i
    } = n;
    if ("ManhG" != this.config.credits) return e.sendMessage("⚡️ Phát hiện credits đã bị thay đổi", n.threadID, n.messageID);
    var d, c = [],
        h = [],
        p = [],
        g = [];
    D = 1, j = 1, d = n.participantIDs;
    for (let e of d) {
        "Người dùng Facebook" == await global.data.userName.get(e) && c.push(`${j++}. ${e}\n`)
    }
    var l = [],
        m = [];
    for (const e of d) l.push({
        id: e,
        name: global.data.userName.get(e) || await s.getNameUser(e)
    });
    for (const e of l) {
        const n = await r.getData(e.id);
        m.push({
            idUser: e.id,
            name: e.name,
            exp: void 0 === n.exp ? 0 : n.exp
        })
    }
    m.sort((function(e, n) {
        return e.exp - n.exp
    }));
    var u = 1;
    (u = parseInt(a[0]) || 1) < -1 && (u = 1);
    for (var I = `=====『 LỌC THÀNH VIÊN 』=====\n\n→ Hiện tại nhóm có ${c.length} thành viên seen chùa. QTV cần lọc ngay\n━━━━━━━━━━━━━━━━\n`, f = Math.ceil(m.length / 20), D = 20 * (u - 1); D < 20 * (u - 1) + 20 && !(D >= m.length); D++) {
        let e = m[D];
        h.push(`[ ${D+1} ] → ${e.name}: ${e.exp} tin nhắn\n`), p.push(`${e.idUser}`), g.push(`${e.name}`)
    }
    return I += `${h.join("")}\n`, c.length > 0 && (I += `USER ID:\n${c.join("")}\n`), I += `< Số trang ${u}/${f}>\n💞 Dùng ${global.config.PREFIX}locmem + số trang\n`, e.sendMessage(I + "━━━━━━━━━━━━━━━━\n🧸 Reply số thứ tự, có thể reply nhiều số, cách nhau bằng dấu cách để lọc mấy con cá!\n( Lưu ý ) BOT phải có quyền QTV", n.threadID, ((e, a) => global.client.handleReply.push({
        name: this.config.name,
        author: n.senderID,
        messageID: a.messageID,
        idLoc: p,
        idName: g,
        type: "reply"
    })))
};