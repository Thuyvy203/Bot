module.exports.config = {
    name: "hi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kanichi",
    description: "",
    commandCategory: "No prefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hi.gif")) request("https://media.discordapp.net/attachments/849164098024374283/859645612097798184/received_373965544066156.gif").pipe(fs.createWriteStream(dirMaterial + "hi.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Chào ${name}, rất vui được gặp bạn hôm nay ❤️`
            }
    if (event.body.toLowerCase() == "chào mn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hi mn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "helo"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hello mn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hello"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hí mn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chào"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hinu mn"){
        return   
api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hinu"){
        return       
api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chào"){
        return          
api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hi"){
        return          api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hí nu mn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
}