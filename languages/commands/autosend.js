  module.exports.config = {
    name: 'autosend1',
    version: '10.02',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
    get
} = require('axios'),
config = [{
        timer: '12:45:00 AM',
        message: ['Bây giờ là : {time}\nChúc mọi người ngủ ngon 💤💤💤']
},
{
        timer: '11:30:00 AM',
        message: ['Bây giờ là : {time}\nBữa trưa thật ngon miệng nha 🤤🤤']
},
{
        timer: '10:00:00 AM',
        message: ['Bây giờ là : {time}\nChúc mọi người buổi trưa vui vẻ 🌞🌞🌞']
},
{
        timer: '8:30:00 AM',
        message: ['Bây giờ là : {time}\nHãy mau thức giấc đi, muộn rồi đấy ⏰⏰⏰']
},
{
        timer: '7:00:00 AM',
        message: ['Bây giờ là : {time}\nChúc mọi người buổi sáng tốt lành ☀️☀️☀️']
},
          {
    timer: '6:00:00 AM',
    message: ['Bây giờ là : {time}\nCó ai thức dậy chưa 💗💗']
},
{
        timer: '5:00:00 AM',
        message: ['Bây giờ là : {time}\nNếu còn thức để cố win thêm vài game thì hãy buông tay đi 🥹🥹🥹']
},
{ 
        timer: '12:30:00 PM',
        message: ['Bây giờ là : {time}\nBữa trưa thật ngon miệng nha 🤤🤤']
},
{ 
        timer: '3:00:00 PM',
        message: ['Bây giờ là : {time}\nĐã đến giờ chiều rồi 💗💗💗']
},
{
        timer: '5:00:00 PM',
        message: ['Bây giờ là : {time}\nCó ai đang ăn xế hong? 🍭🍩🍪']
},
{
        timer: '6:30:00 PM',
        message: ['Bây giờ là : {time}\nTan tầm và về nhà thôi 🏠🏠🏠']
},
{
        timer: '7:55:00 PM',
        message: ['Bây giờ là : {time}\nChúc bữa tối ngon miệng 🥂🥂🥂']
},
{
        timer: '8:45:00 PM',
        message: ['Bây giờ là : {time}\nChúc một buổi tối leo rank thật bùng nổ 🔥🔥🔥']
},
{
        timer: '11:00:00 PM',
        message: ['Bây giờ là : {time}\nChúc mọi người ngủ ngon 💤💤💤']
},
{
        timer: '1:00:00 AM',
        message: ['Bây giờ là : {time}\nHãy đi ngủ sớm và chúc mọi người ngủ ngon nha 🌚🌚🌚']
},
{
        timer: '3:30:00 AM',
        message: ['Bây giờ là : {time}\nGiờ này mà còn thức chơi game hả 😮‍💨😮‍💨😮‍💨']
}];
module.exports.onLoad = o => {
    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
    global.autosendmessage_setinterval = setInterval(async function() {
        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
            var msg = r(á.message);
            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://API-VD.miraiprofile2005.repl.co/tn/tantrai`)).data.data)
            msg = {
                body: msg
            };
            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
        };
    }, 1000);
};
module.exports.run = () => {}