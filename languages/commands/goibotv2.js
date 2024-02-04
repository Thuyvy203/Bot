module.exports.config = {
    name: 'goibotv2',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',//mod thêm by tpk
    description: 'Trò truyện cùng simi chat',
    commandCategory: 'No Prefix',
    usages: '[hey simi]',
    cooldowns: 2,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hh.jpeg")) request("https://i.imgur.com/o5BoJJ9.jpeg").pipe(fs.createWriteStream(dirMaterial + "hh.jpeg"));
}
const {
    post
} = require('axios');
const CN = `https://docs-api.jrtxtracy.repl.co/sim?type=ask&ask=sim%20ơi`
module.exports.run = () => {};
module.exports.handleEvent = function( {
    api, event
}) { 
  const fs = require("fs");
  const axios = require('axios');
  var tpk = ['Kêu có gì hong 💓', 'Hello bạn nhỏ', 'Kiếm tui hả', 'Kêu là phải có chuyện nha', 'Sao', 'Ơiiiii', 'Ơi bot nghe nè','Kêu tui gì zạ 🌸','có gì hong','Bot nè','Kêu em có gì không','💞 Em nghe','Em đây'];
  const a = tpk[Math.floor(Math.random()*tpk.length)];
    if (['Bot êy','nhớ bot','Bot ơiii', 'bot ới', 'bot', 'hi bot','bot đâu','bot off','bot ơi','bot xịn','hello bot','Chào bot','con bot kia','bb bot'].includes(event.body.toLowerCase())) {
       api.sendMessage({body:`${a}`}, event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
    };
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}) {
    const res = await post(`${CN}`, {
        ask: event.body
    });
   if (res.data.status != 201) return api.sendMessage(`${res.data.message}`, event.threadID, (err, data) => global.client.hhandleReply.push({
       name: this.config.name,
       messageID: data.messageID,
       ask: event.body
   }), event.messageID); else api.sendMessage({body: `${res.data.answer}`
},event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
};