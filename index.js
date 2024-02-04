// //this is my source code, pls dont mod them  
// const { spawn } = 
// require("child_process");
// const { readFileSync } = require("fs-extra");
// const http = require("http");
// const axios = require("axios");
// const semver = require("semver");
// const logger = require("./utils/log");

// /////////////////////////////////////////////
// //========= Check node.js version =========//
// /////////////////////////////////////////////

// // const nodeVersion = semver.parse(process.version);
// // if (nodeVersion.major < 13) {
// //     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
// //     return process.exit(0);
// // };

// ///////////////////////////////////////////////////////////
// //========= Create website for dashboard/uptime =========//
// ///////////////////////////////////////////////////////////

// const express = require('express');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 8080;

// // sendFile will go here
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.listen(port);
// console.log('Server started at http://localhost:' + port);


// logger("Opened server site...", "[ Starting ]");

// /////////////////////////////////////////////////////////
// //========= Create start bot and make it loop =========//
// /////////////////////////////////////////////////////////

// function startBot(message) {
//     (message) ? logger(message, "[ Starting ]") : "";

//     const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
//         cwd: __dirname,
//         stdio: "inherit",
//         shell: true
//     });

//     child.on("close",async (codeExit) => {
//       var x = 'codeExit'.replace('codeExit',codeExit);
//         if (codeExit == 1) return startBot("Restarting...");
//          else if (x.indexOf(2) == 0) {
//            await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
//                  startBot("Open ...");
//        }
//          else return; 
//     });

//     child.on("error", function (error) {
//         logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
//     });
// };
// ////////////////////////////////////////////////
// //========= Check update from Github =========//
// ////////////////////////////////////////////////


// axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2/main/package.json").then((res) => {
//     logger(res['data']['name'], "[ Bypass ]");
//     logger("Version: " + res['data']['version'], "[ Phiên Bản ]");
//     logger(res['data']['description'], "[ DESCRIPTION ]");
// });






// async function bank() {
// const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
// const { join, resolve } = require('path');
// const pathData = join(__dirname + '/modules/commands/banking/banking.json');
// const logger = require("./utils/log.js");
// const user = require('./modules/commands/banking/banking.json');
// const timeIM = 60*60
// const laisuat = 2
// 	if(user[0] == undefined ) return
// 	while(true) {
// 	for (let id of user) {
// 	var userData = user.find(i => i.senderID == id.senderID);
// 	var money = userData.money;
// 	userData.money = (parseInt(money + money * laisuat))
// 	writeFileSync(pathData, JSON.stringify(user, null, 2));
// 	}
// 	logger.loader("Đang xử lí...");
// 	await new Promise(resolve => setTimeout(resolve, timeIM*1000))
// 	}
// }
// bank()
// startBot();

// const config = {
// 	status: true,
// 	name: 'Disme Project',
// 	timestamp: Date.now()
// };

// if(config.status == false) return
// var username = process.env.REPL_OWNER
// if(username !== undefined) {
// 	var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
// 	logger('Bạn đang chạy bot ở link: ' + urlRepl, '[ CHECK HOST ]');
// 	if(process.env.REPLIT_CLUSTER == 'hacker') return logger('Bạn đang dùng Replit Hacker, hãy nhớ bật "Always On" để BOT luôn chạy nhé!', '[ CHECK HOST ]');
// 	logger('Bạn đang dùng Replit thường, hệ thống sẽ tự động kết nối với UptimeRobot cho bạn!', '[ CHECK HOST ]');
// 	connectUptime(urlRepl, config.name);
// };
// async function connectUptime(url, name) {
// 	try {
// 		const res = (await axios.get(`https://vigorousentirebundledsoftware.duy-tuantuan.repl.co/?add=${url}`)).data;
// 		if(res.error) return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ UPTIME ]');
// 		return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ UPTIME ]');
// 	}
// 	catch {
// 		return logger('Server Uptime gặp sự cố, không thể bật uptime cho bạn!', '[ UPTIME ]');
// 	}	
// };
// /*axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
//     const local = JSON.parse(readFileSync('./package.json'));
//     if (semver['lt'](local.version, res['data']['version'])) {
//         if (local.autoUpdate == !![]) {
//             logger('A new update is available, start update processing...', '[ UPDATE ]');
//             const updateBot = {};
//             updateBot.cwd = __dirname
//             updateBot.stdio = 'inherit' 
//             updateBot.shell = !![];
//             const child = spawn('node', ['update.js'], updateBot);
//             child.on('exit', function () {
//                 return process.exit(0);
//             })
//             child.on('error', function (error) {
//                 logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
//             });
//         } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
//         startBot();
//     } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
// }).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
// // THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
// //vẫn k hiểu tại s file bị v :v ae nào fix đc cho dùng ké nhé




 
// //this is my source code, pls dont mod them  
// const { spawn } = 
// require("child_process");
// const { readFileSync } = require("fs-extra");
// const http = require("http");
// const axios = require("axios");
// const semver = require("semver");
// const logger = require("./utils/log");
// //const dashboard = http.createSever(function (_req, res){res.writeHead(200, "OK",{"Content-Type":"text/plain"});
// 	//res.write("chào cậu chủ trở lại");
// 	//res.writeHead(302, {
// 	   //local: "https://vlxx.ai/",
// 	//});
// 	//res.end();
// 	//})

// /////////////////////////////////////////////
// //========= Check node.js version =========//
// /////////////////////////////////////////////

// // const nodeVersion = semver.parse(process.version);
// // if (nodeVersion.major < 13) {
// //     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
// //     return process.exit(0);
// // };

// ///////////////////////////////////////////////////////////
// //========= Create website for dashboard/uptime =========//
// ///////////////////////////////////////////////////////////

// const express = require('express');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 9996;

// // sendFile will go here
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.listen(port);
// console.log('𝐒𝐞𝐫𝐯𝐞𝐫 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐚𝐭 http://localhost:' + port);


// logger("𝐎𝐩𝐞𝐧𝐞𝐝 𝐬𝐞𝐫𝐯𝐞𝐫 𝐬𝐢𝐭𝐞...", "[ 𝐒𝐓𝐀𝐓𝐈𝐍𝐆  ]");

// /////////////////////////////////////////////////////////
// //========= Create start bot and make it loop =========//
// /////////////////////////////////////////////////////////

// function startBot(message) {
//     (message) ? logger(message, "[ Starting ]") : "";

//     const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
//         cwd: __dirname,
//         stdio: "inherit",
//         shell: true
//     });

//     child.on("close",async (codeExit) => {
//       var x = 'codeExit'.replace('codeExit',codeExit);
//         if (codeExit == 1) return startBot("𝐑𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠...");
//          else if (x.indexOf(2) == 0) {
//            await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
//                  startBot("𝐎𝐩𝐞𝐧...");
//        }
//          else return; 
//     });

//     child.on("error", function (error) {
//         logger("𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐫𝐞𝐝: " + JSON.stringify(error), "[ 𝐒𝐓𝐀𝐑𝐓𝐈𝐍𝐆 ]");
//     });
// };
// ////////////////////////////////////////////////
// //========= Check update from Github =========//
// ////////////////////////////////////////////////


// axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2/main/package.json").then((res) => {
//     logger(res['data']['name'], "[ 𝐁𝐲𝐩𝐚𝐬𝐬]");
//     logger("Version: " + res['data']['version'], "[ 𝐏𝐡𝐢𝐞̂𝐧 𝐁𝐚̉𝐧 ]");
//     logger(res['data']['description'], "[ 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍 ]");
// });






// async function bank() {
// const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
// const { join, resolve } = require('path');
// const pathData = join(__dirname + '/modules/commands/banking/banking.json');
// const logger = require("./utils/log.js");
// const user = require('./modules/commands/banking/banking.json');
// const timeIM = 60*60
// const laisuat = 2
// 	if(user[0] == undefined ) return
// 	while(true) {
// 	for (let id of user) {
// 	var userData = user.find(i => i.senderID == id.senderID);
// 	var money = userData.money;
// 	userData.money = (parseInt(money + money * laisuat))
// 	writeFileSync(pathData, JSON.stringify(user, null, 2));
// 	}
// 	logger.loader("𝐃𝐀𝐍𝐆 𝐒𝐔̛̉ 𝐋𝐘́ ...");
// 	await new Promise(resolve => setTimeout(resolve, timeIM*1000))
// 	}
// }
// bank()
// startBot();

// const config = {
// 	status: true,
// 	name: '𝐁𝐕𝐋-𝐓𝐋𝐂𝐀𝐑-𝐁𝐎𝐓',
// 	timestamp: Date.now()
// };

// if(config.status == false) return
// var username = process.env.REPL_OWNER
// if(username !== undefined) {
// 	var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
// 	logger('𝐁𝐚̣𝐧 𝐝𝐚𝐧𝐠 𝐜𝐡𝐚̣𝐲 𝐛𝐨𝐭 𝐨̛̉ 𝐥𝐢𝐧𝐤: ' + urlRepl, '[ 𝐂𝐇𝐄𝐂𝐊 𝐇𝐎𝐒𝐓 ]');
// 	if(process.env.REPLIT_CLUSTER == '𝐡𝐚𝐜𝐤𝐞𝐫') return logger('𝐁𝐚̣𝐧 𝐝𝐚𝐧𝐠 𝐝𝐮̀𝐧𝐠 𝐑𝐞𝐩𝐥𝐢𝐭 𝐇𝐚𝐜𝐤𝐞𝐫, 𝐡𝐚̃𝐲 𝐧𝐡𝐨̛́ 𝐛𝐚̣̂𝐭 "𝐀𝐥𝐰𝐚𝐲𝐬 𝐎𝐧" 𝐝𝐞̂̉ 𝐁𝐎𝐓 𝐥𝐮𝐨̂𝐧 𝐜𝐡𝐚̣𝐲 𝐧𝐡𝐞́!', '[ 𝐂𝐇𝐄𝐂𝐊 𝐇𝐎𝐒𝐓 ]');
// 	logger('𝐁𝐚̣𝐧 𝐝𝐚𝐧𝐠 𝐝𝐮̀𝐧𝐠 𝐑𝐞𝐩𝐥𝐢𝐭 𝐭𝐡𝐮̛𝐨̛̀𝐧𝐠, 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 𝐬𝐞̃ 𝐭𝐮̛̣ 𝐝𝐨̣̂𝐧𝐠 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐯𝐨̛́𝐢 𝐔𝐩𝐭𝐢𝐦𝐞𝐑𝐨𝐛𝐨𝐭 𝐜𝐡𝐨 𝐛𝐚̣𝐧!', '[ 𝐂𝐇𝐄𝐂𝐊 𝐇𝐎𝐒𝐓 ]');
// 	connectUptime(urlRepl, config.name);
// };
// async function connectUptime(url, name) {
// 	try {
// 		const res = (await axios.get(`https://docs-api.catteam123.repl.co/uptimerobot/create?url=${url}`)).data;
// 		if(res.error) return logger('𝐃𝐚̃ 𝐡𝐨𝐚̀𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐔𝐩𝐭𝐢𝐦𝐞 𝐜𝐡𝐨 𝐛𝐚̣𝐧!', '[ UPTIME ]');
// 		return logger('𝐃𝐚̃ 𝐡𝐨𝐚̀𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐔𝐩𝐭𝐢𝐦𝐞 𝐜𝐡𝐨 𝐛𝐚̣𝐧!', '[ 𝐔𝐏𝐓𝐈𝐌𝐄 ]');
// 	}
// 	catch {
// 		return logger('𝐒𝐞𝐫𝐯𝐞𝐫 𝐔𝐩𝐭𝐢𝐦𝐞 𝐠𝐚̣̆𝐩 𝐬𝐮̛̣ 𝐜𝐨̂́, 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐛𝐚̣̂𝐭 𝐮𝐩𝐭𝐢𝐦𝐞 𝐜𝐡𝐨 𝐛𝐚̣𝐧!', '[ 𝐔𝐏𝐓𝐈𝐌𝐄 ]');
// 	}	
// };
// /*axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
//     const local = JSON.parse(readFileSync('./package.json'));
//     if (semver['lt'](local.version, res['data']['version'])) {
//         if (local.autoUpdate == !![]) {
//             logger('A new update is available, start update processing...', '[ UPDATE ]');
//             const updateBot = {};
//             updateBot.cwd = __dirname
//             updateBot.stdio = 'inherit' 
//             updateBot.shell = !![];
//             const child = spawn('node', ['update.js'], updateBot);
//             child.on('exit', function () {
//                 return process.exit(0);
//             })
//             child.on('error', function (error) {
//                 logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
//             });
//         } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
//         startBot();
//     } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
// }).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
// // THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
// //vẫn k hiểu tại s file bị v :v ae nào fix đc cho dùng ké nhé




//this is my source code, pls dont mod them  
const { spawn } = 
require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
//const dashboard = http.createSever(function (_req, res){res.writeHead(200, "OK",{"Content-Type":"text/plain"});
	//res.write("chào cậu chủ trở lại");
	//res.writeHead(302, {
	   //local: "https://vlxx.ai/",
	//});
	//res.end();
	//})

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 9996;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('𝐒𝐞𝐫𝐯𝐞𝐫 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐚𝐭 http://localhost:' + port);


logger("𝐎𝐩𝐞𝐧𝐞𝐝 𝐬𝐞𝐫𝐯𝐞𝐫 𝐬𝐢𝐭𝐞...", "[ 𝐒𝐓𝐀𝐓𝐈𝐍𝐆  ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("𝐑𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠...");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("𝐎𝐩𝐞𝐧...");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐫𝐞𝐝: " + JSON.stringify(error), "[ 𝐒𝐓𝐀𝐑𝐓𝐈𝐍𝐆 ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2/main/package.json").then((res) => {
    logger(res['data']['name'], "[ 𝐁𝐲𝐩𝐚𝐬𝐬]");
    logger("Version: " + res['data']['version'], "[ 𝐏𝐡𝐢𝐞̂𝐧 𝐁𝐚̉𝐧 ]");
    logger(res['data']['description'], "[ 𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍 ]");
});






async function bank() {
const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
const { join, resolve } = require('path');
const pathData = join(__dirname + '/modules/commands/banking/banking.json');
const logger = require("./utils/log.js");
const user = require('./modules/commands/banking/banking.json');
const timeIM = 60*60
const laisuat = 2
	if(user[0] == undefined ) return
	while(true) {
	for (let id of user) {
	var userData = user.find(i => i.senderID == id.senderID);
	var money = userData.money;
	userData.money = (parseInt(money + money * laisuat))
	writeFileSync(pathData, JSON.stringify(user, null, 2));
	}
	logger.loader("𝐃𝐀𝐍𝐆 𝐒𝐔̛̉ 𝐋𝐘́ ...");
	await new Promise(resolve => setTimeout(resolve, timeIM*1000))
	}
}
bank()
startBot();

const config = {
	status: true,
	name: '𝐁𝐕𝐋-𝐓𝐋𝐂𝐀𝐑-𝐁𝐎𝐓',
	timestamp: Date.now()
};

if(config.status == false) return
var username = process.env.REPL_OWNER
if(username !== undefined) {
	var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
	logger('𝐁𝐚̣𝐧 𝐝𝐚𝐧𝐠 𝐜𝐡𝐚̣𝐲 𝐛𝐨𝐭 𝐨̛̉ 𝐥𝐢𝐧𝐤: ' + urlRepl, '[ 𝐂𝐇𝐄𝐂𝐊 𝐇𝐎𝐒𝐓 ]');
	if(process.env.REPLIT_CLUSTER == '𝐡𝐚𝐜𝐤𝐞𝐫') return logger('𝐁𝐚̣𝐧 𝐝𝐚𝐧𝐠 𝐝𝐮̀𝐧𝐠 𝐑𝐞𝐩𝐥𝐢𝐭 𝐇𝐚𝐜𝐤𝐞𝐫, 𝐡𝐚̃𝐲 𝐧𝐡𝐨̛́ 𝐛𝐚̣̂𝐭 "𝐀𝐥𝐰𝐚𝐲𝐬 𝐎𝐧" 𝐝𝐞̂̉ 𝐁𝐎𝐓 𝐥𝐮𝐨̂𝐧 𝐜𝐡𝐚̣𝐲 𝐧𝐡𝐞́!', '[ 𝐂𝐇𝐄𝐂𝐊 𝐇𝐎𝐒𝐓 ]');
	logger('𝐁𝐚̣𝐧 𝐝𝐚𝐧𝐠 𝐝𝐮̀𝐧𝐠 𝐑𝐞𝐩𝐥𝐢𝐭 𝐭𝐡𝐮̛𝐨̛̀𝐧𝐠, 𝐡𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 𝐬𝐞̃ 𝐭𝐮̛̣ 𝐝𝐨̣̂𝐧𝐠 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐯𝐨̛́𝐢 𝐔𝐩𝐭𝐢𝐦𝐞𝐑𝐨𝐛𝐨𝐭 𝐜𝐡𝐨 𝐛𝐚̣𝐧!', '[ 𝐂𝐇𝐄𝐂𝐊 𝐇𝐎𝐒𝐓 ]');
	connectUptime(urlRepl, config.name);
};
async function connectUptime(url, name) {
	try {
		const res = (await axios.get(`https://apivip.nguyenlienmanh.com/uptime?link=${url}`)).data;
		if(res.error) return logger('𝐃𝐚̃ 𝐡𝐨𝐚̀𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐔𝐩𝐭𝐢𝐦𝐞 𝐜𝐡𝐨 𝐛𝐚̣𝐧!', '[ UPTIME ]');
		return logger('𝐃𝐚̃ 𝐡𝐨𝐚̀𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐔𝐩𝐭𝐢𝐦𝐞 𝐜𝐡𝐨 𝐛𝐚̣𝐧!', '[ 𝐔𝐏𝐓𝐈𝐌𝐄 ]');
	}
	catch {
		return logger('𝐒𝐞𝐫𝐯𝐞𝐫 𝐔𝐩𝐭𝐢𝐦𝐞 𝐠𝐚̣̆𝐩 𝐬𝐮̛̣ 𝐜𝐨̂́, 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐛𝐚̣̂𝐭 𝐮𝐩𝐭𝐢𝐦𝐞 𝐜𝐡𝐨 𝐛𝐚̣𝐧!', '[ 𝐔𝐏𝐓𝐈𝐌𝐄 ]');
	}	
};
/*axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
    const local = JSON.parse(readFileSync('./package.json'));
    if (semver['lt'](local.version, res['data']['version'])) {
        if (local.autoUpdate == !![]) {
            logger('A new update is available, start update processing...', '[ UPDATE ]');
            const updateBot = {};
            updateBot.cwd = __dirname
            updateBot.stdio = 'inherit' 
            updateBot.shell = !![];
            const child = spawn('node', ['update.js'], updateBot);
            child.on('exit', function () {
                return process.exit(0);
            })
            child.on('error', function (error) {
                logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
            });
        } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
        startBot();
    } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
//vẫn k hiểu tại s file bị v :v ae nào fix đc cho dùng ké nhé