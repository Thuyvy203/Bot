module.exports.config = {
    name: 'file',
    version: '1.1.1',
    hasPermssion: 3,
    credits: 'DC-Nam',
    description: 'xem item trong folder, xóa, xem file',
    commandCategory: 'Admin',
    usages: '[đường dẫn]',
    cooldowns: 2,
};
const {
    readdirSync,
    statSync,
    unlinkSync,
    rmdirSync,
    createReadStream
} = require('fs-extra');
module.exports.run = function( {
    api, event, args
}) {
const permission = ["100033808024829"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Không có quyền!", event.threadID, event.messageID);
    openFolder(api, event, process.cwd() + (!!args[0] ? args[0]: ''))
};
module.exports.handleReply = function( {
    handleReply: $, api, event
}) {
if (event.senderID != 100033808024829) return api.sendMessage(`Không có quyền!`, event.threadID, event.messageID)
    switch (event.args[0].toLowerCase()) {
        case 'open': openFolder(api, event, $.data[event.args[1]-1].dest);
            break;
        case 'del': {
            var arrFile = [],
            fo,
            fi;
            for (const i of event.args.splice(1)) {
                const {
                    dest,
                    info
                } = $.data[i-1];
                const ext = dest.split('/').pop();
                if (info.isFile()) unlinkSync(dest),
                arrFile.push(ext),
                fi = 'file'; else if (info.isDirectory()) rmdirSync(dest, {
                    recursive: true
                }),
                arrFile.push(ext),
                fo = 'folder';
            };
            api.sendMessage(`Đã xóa những ${!!fo && !!fi ? `${fo}, ${fi}`: !!fo?fo: !!fi?fi: null}:\n\n${arrFile.join(', ')}`, event.threadID, event.messageID);
        };
            break;
        case 'view': api.sendMessage({
            attachment: createReadStream($.data[event.args[1]-1].dest)}, event.threadID, event.messageID);
            break;
        default: api.sendMessage(`Reply [Open|del|view] + STT.`, event.threadID, event.messageID);
        };
    };
    function convertBytes(b) {
        const c = b/1024;
        var x = c >= 1024 ? c*0.0009765625: c;
        x = x.toFixed(2);
        return c >= 1024 ? x+'MB': x+'KB';

    };
    function openFolder(a, b, c) {
        const read = readdirSync(c);
        var txt = '',
        count = 0;
        array = [];
        for (const i of read) {
            const dest = `${c}/${i}`,
            info = statSync(dest);
            txt += `${++count}. ${info.isFile() ? '📄': info.isDirectory() ? '📁': undefined} - ${i}(${convertBytes(info.size)})\n`;
            array.push({
                dest, info
            });
        };
        txt += `\n--> Reply [Open|Del|View] + STT.`
        a.sendMessage(txt, b.threadID, (err, data) => global.client.handleReply.push({
            name: 'file', messageID: data.messageID, author: b.senderID, data: array
        }), b.messageID);
    };