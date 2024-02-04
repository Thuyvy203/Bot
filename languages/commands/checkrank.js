module.exports.config = {
	name: "checkrank",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "SenProject",
	description: "check tương tác",
	commandCategory: "Box",
	usages: "checktt",
	cooldowns: 5,
	dependencies: {
		"fs-extra": ""
	}
}

const path = __dirname + '/count-by-thread/';

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
}

module.exports.handleEvent = function ({ event }) {
    const { messageID, threadID, senderID } = event;
    if (!global.data.allThreadID.some(tid => tid == threadID)) return;
    const fs = global.nodemodule['fs'];
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 0;
    }
    getThreadJSON[senderID]++;
    fs.writeFileSync(threadPath, JSON.stringify(getThreadJSON, null, 4));
}


 const getRankName = count => {
    return count > 50000 ? 'Tối Cao'
  :count > 20000 ? 'Thách Đấu'
    :count > 9000 ? 'Đại Cao Thủ'
        : count > 8000 ? 'Cao Thủ'
            : count > 6100 ? 'Kim Cương I'
                : count > 5900? 'Kim Cương II'
                    : count > 5700 ? 'Kim Cương III'
                        : count > 5200 ? 'Kim Cương IV'
                            : count > 5000 ? 'Lục Bảo I'
                                : count > 4800 ? 'Lục Bảo II'
                                    : count > 4500 ? 'Lục Bảo III'
                                        : count > 4000 ? 'Lục Bảo IV'
                                            : count > 3800 ? 'Bạch Kim I'
                                                : count > 3500 ? 'Bạch Kim II'
                                                    : count > 3200 ? 'Bạch Kim III'
                                                        : count > 3000 ? 'Bạch Kim IV'
                                                            : count > 2900 ? 'Vàng I'
                                                                : count > 2500 ? 'Vàng II'
                                                                    : count > 2300 ? 'Vàng III'
                                                                        : count > 2000 ? 'Vàng IV'
                                                                            : count > 1500 ? 'Bạc I'
                                                                                : count > 1200 ? 'Bạc II'
                                                                                    : count > 1000 ? 'Bạc III'
                                                                                        : count > 900 ? 'Bạc IV'
                                                                                            : count > 500 ? 'Đồng'
                                                                                                : count > 100 ? 'Sắt'
                                                                                                    : 'Unranked'
}



module.exports.run = async function ({ api, event, args, Users }) {
    const fs = global.nodemodule['fs'];
    const { messageID, threadID, senderID, mentions } = event;
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const query = args[0] ? args[0].toLowerCase() : '';
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 1;
    }
    var storage = [],
        msg = '';
    if (query == 'all') {
        const allThread = await api.getThreadInfo(threadID) || { participantIDs: [] };
        for (id of allThread.participantIDs) {
            if (!getThreadJSON.hasOwnProperty(id)) {
                getThreadJSON[id] = 0;
            }
        }
    }
    for (const id in getThreadJSON) {
        const name = await Users.getNameUser(id);
        storage.push({ id, name, count: getThreadJSON[id] });
    }
    storage.sort((a, b) => {
        if (a.count > b.count) return -1;
        else if (a.count < b.count) return 1;
        else return a.name.localeCompare(b.name);
    });
    if (query == 'all') {
        let count = 1
        let userID = senderID;
        if (Object.keys(mentions).length > 0) {
            userID = mentions[0];
        }
        msg += '=== CHECK TƯƠNG TÁC ===';
        for (const user of storage) {
        const rankUser = storage.findIndex(e => e.id == userID); 
          msg += `\n\n${count++}.\n👤 Tên : ${user.name}\n📝 Số tin nhắn : ${user.count}\n🏆 Rank : ${getRankName(user.count)}`;
        }
    } else if (query == 'rank') {
        msg += '🚫 Unranked (10 tin nhắn)\n\n⚫ Sắt (100 tin nhắn)\n\n🟤 Đồng  (500 tin nhắn)\n\n⚪ \nBạc 4 (900 tin nhắn)\n Bạc 3 (1000 tin nhắn)\n Bạc 2 (1200 tin nhắn)\n Bạc 1 (1500 tin nhắn)\n\n🟠 \nVàng 4 (2000 tin nhắn)\n Vàng 3 (2300 tin nhắn)\n Vàng 2 (2500 tin nhắn)\n Vàng 1 (2900 tin nhắn)\n\n🔘 \nBạch kim 4 (3000 tin nhắn)\n Bạch kim 3 (3200 tin nhắn)\n Bạch kim 2 (3500 tin nhắn)\n Bạch Kim 1 (3800 tin nhắn)\n\n🟢 \nLục Bảo 4 (4000 tin nhắn)\n Lục Bảo 3 (4500 tin nhắn)\n Lục Bảo 2 (4800 tin nhắn)\n Lục Bảo 1 (5000 tin nhắn)\n\n🔵 \nKim Cương 4 (5200 tin nhắn)\n Kim Cương 3 (5700 tin nhắn)\n Kim Cương 2 (5900 tin nhắn)\n Kim Cương 1 (6100 tin nhắn)\n\n🟣 Cao Thủ (8000 tin nhắn)\n\n🔴 Đại Cao thủ (9000 tin nhắn)\n\n🟡 Thách Đấu (20000 tin nhắn)\n\n🪩 Tối Cao (50000 tin nhắn)'
    } else if (!query) {
        let userID = senderID;
        if (Object.keys(mentions).length > 0) {
            userID = mentions[0];
        }
        const rankUser = storage.findIndex(e => e.id == userID);
        msg += `${userID == senderID ? '👤 Bạn' : storage[rankUser].name} đứng thứ ${rankUser + 1}\n📝 Số tin nhắn : ${storage[rankUser].count}\n🏆 Rank : ${getRankName(storage[rankUser].count)}`;
    }
    api.sendMessage(msg, threadID);
    return;
}
