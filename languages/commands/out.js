module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "manhG",
  description: "chỉ là rời nhóm theo ID thôi",
  commandCategory: "Admin",
  usages: "[ID nhóm] [Nội dung]",
  cooldowns: 5,
  dependencies: "",

};

module.exports.run = async function ({ api, Users, Threads, event, args }) {
  //if (event.senderID != 100033808024829) return api.sendMessage(`❤️`, event.threadID, event.messageID)
  var idbox = args[0];
  var reason = args.slice(1);
  if (!args[0]) return api.sendMessage(`${api.getCurrentUserID()}`, () =>
    api.sendMessage(`Tiến hành out`, event.threadID, () =>
      api.removeUserFromGroup(`${api.getCurrentUserID()}`, event.threadID)));
        api.sendMessage("Đã nhận lệnh out box từ Admin, lý do: " + reason.join(" "), idbox, () =>
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idbox, () =>
            api.sendMessage("Đã out box có ID: " + idbox + " với lý do: " + reason.join(" "), event.threadID)))
}