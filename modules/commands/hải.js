module.exports.config = {
    name: "hải",
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
                body: `Anh Thiên Hải đẹp trai nhất Clan`
            }
    if (event.body.toLowerCase() == "ai đẹp trai nhất"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai nhất?"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai nhất clan"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai nhất clan?"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai nhất dwin"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai nhất dwin?"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai nhất clan này"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai nhất clan này?"){
        return   
api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai"){
        return       
api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai nhất clan mình"){
        return          
api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ai đẹp trai nhất clan dream winner"){
        return          api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hí nu mn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
}