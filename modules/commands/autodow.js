var configCommand = {
    name: 'autodown',
    version: '1.1.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động tải xuống khi phát hiện liên kết',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3
},
axios = require('axios'),
downloader = require('image-downloader'),
fse = require('fs-extra'),
toolsFb = require('tools-fb'),
path = __dirname+'/cache/statusAuto.json';

async function streamURL(url, mime) {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`;
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};

function onLoad() {
    if (!fse.existsSync(path)) fse.writeFileSync(path, '{}');
};

async function noprefix(arg) {
    const s = JSON.parse(fse.readFileSync(path));
    if (arg.event.senderID == (global.botID || arg.api.getCurrentUserID())) return;
    if ((typeof s[arg.event.threadID] == 'boolean' && !s[arg.event.threadID])) return;

    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID),
    arr = arg.event.args,
    regEx_tiktok = /(^https:\/\/)((vm|vt|www|v)\.)?(tiktok|douyin)\.com\//,
    regEx_youtube = /(^https:\/\/)((www)\.)?(youtube|youtu)(PP)*\.(com|be)\//,
    regEx_facebook = /(^https:\/\/)(\w+\.)?(facebook|fb)\.(com|watch)\/((story\.php|page\.\w+)(\?|\/))?(story_fbid=|\w+\/)/,
    regEx_instagram = /^\u0068\u0074\u0074\u0070\u0073\u003a\/\/(www\.)?instagram\.com\/(reel|p)\/\w+\/\w*/

    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
            const data = (await axios.post(`https://www.tikwm.com/api/`, {
                url: el
            })).data.data;
            out({
                body: `=== 『 TIKTOK 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [📝] Tiêu đề: ${data.title}.\n→ [❤] Lượt thích: ${data.digg_count}.\n→ [💬] Lượt bing luận: ${data.comment_count}\n→ [🌟] Lượt chia sẻ: ${data.share_count}\n→ [📥] Lượt tải: ${data.download_count}\n\n→ [💓] Đây là tính năm tự động tải video khi phát hiện link tiktok 📺\n→ Thả cảm xúc 🔥 để tải nhạc.\n\n`, attachment: await streamURL(data.play, 'mp4')}, '', (err, dataMsg) => global.client.handleReaction.push({
                    name: configCommand.name, messageID: dataMsg.messageID, url: data.music
                })); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */

        /* TỰ DỘNG TẢI VIDEO YOUTUBE */
        if (regEx_youtube.test(el)) {
            const data = (await axios.get(`https://api.nambsls.repl.co/youtube/downloader?url=${el}`)).data.data,
            info = (a, b) => `=== 『 YOUTUBE 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [💬] Tiêu đề: ${a.title}\n→ [📺] Thời lượng: ${a.duration}\n\n→ Đây là tính năng tự động tải video khi phát hiện link youtube`;
            if (data.video.size < 26214400)out({
                body: (info(data, data.video.size))+'\n\n→ Thả cảm xúc 🔥 để tải nhạc.'+`\n\n`, attachment: await streamURL(data.video.url, 'mp4')}, '', (err, datMsg) => global.client.handleReaction.push({
                    name: configCommand.name, messageID: datMsg.messageID, url: data.video.url
                })); else if (data.music.size < 26214400)out({
                body: (info(data))+`\n\n→ Chúc các bạn 1 ngày vui vẻ`, attachment: await streamURL(data.music.url, 'mp3')});
        };
        /* END */

        /* TỰ ĐỘNG TẢI VIDEO FACEBOOK */
        if (regEx_facebook.test(el)) out({
            attachment: await streamURL((fdl = (await axios.get(`https://api.nambsls.repl.co/facebook/downloader?url=${el}`)).data.data, fdl.video.hd), 'mp4'), body: `=== 『 FACEBOOK 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [📖] Tiêu đề: ${fdl.title}\n→ Đây là tính năng tự động tải video khi phát hiện link video facebook 📺\n→ Thả cảm xúc 🔥 để tải nhạc.`
        }, '', (err, dataMsg) => global.client.handleReaction.push({
                name: configCommand.name, messageID: dataMsg.messageID, url: fdl.music.url
            }));
        /* END */

        if (regEx_instagram.test(el))out({
            attachment: await streamURL((idl = (await axios.get(`https://API-ThanhAli.thanhali.repl.co/instagram/downloadpost?url=${el}`)).data, idl[((irx = /\/p\//.test(el))?'display': 'video')+'_url']), irx?'jpg': 'mp4'), body: !irx?'→ Thả cảm xúc 🔥 để tải nhạc.':''
        }, '', !irx?(err, dataMsg) => global.client.handleReaction.push({
                name: configCommand.name, messageID: dataMsg.messageID, url: idl.video_url
            }): '');
    };
};
async function reactionMsg(arg) {
  if(arg.event.reaction == '🔥'){
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d),
    _ = arg.handleReaction;
    if ('url'in _) out({
        body: `=== 『 MP3 DOWN 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ [🎶] Âm thanh từ video\n→ [💓] Đây là tính năng tự động tải âm thanh khi bạn thả cảm xúc ( 🔥 ) vào video`, attachment: await streamURL(_.url, 'mp3')}, '', '', _.messageID);
}
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID);
    const data = JSON.parse(fse.readFileSync(path));
    s = data[arg.event.threadID] = typeof data[arg.event.threadID] != 'boolean'||!!data[arg.event.threadID]?false: true;
    fse.writeFileSync(path, JSON.stringify(data, 0, 4));
    out((s?'→ Bật': '→ Tắt')+' '+configCommand.name);
};

module.exports = {
    config: configCommand,
    onLoad,
    run: runCommand,
    handleEvent: noprefix,
    handleReaction: reactionMsg
};