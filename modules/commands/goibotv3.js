module.exports.config = {

    name: 'goibotv3',

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

  var tpk = ['Gì nữa', 'Làm gì chửi', 'Nói gì tui đó', 'Nói tui đó hả', 'Sao', 'Thích gì đó', 'Nói gì đó hả','Cái gì đó','Gì chửi','Thích chửi không','Muốn gì','🖕🖕🖕','Var hong 🖕'];

  const a = tpk[Math.floor(Math.random()*tpk.length)];

    if (['Bot lỏ','bot lỏ','bot ngu', 'bà mịa con bot ', 'bot bịp', 'bot này bịp','con bot mất dại','bot báo','báo thủ bot','bot bị khùng','bot lỏ vãi','l bot','bot cút','bot im', 'bot ngu vãi', 'bot cut', 'đĩ mẹ mày bot', 'con bot hài vl','bot lon','cl bot', 'vl bot', 'bot nqu', 'con bot ngu', 'con bot đần', 'con bot vl'].includes(event.body.toLowerCase())) {

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