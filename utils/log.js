const chalk = require('chalk');
module.exports = (data, option) => {
	const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	switch (option) {
		case "warn":
			console.log(chalk.green('[ 𝐅𝐚𝐢𝐥 ] » ') + data);
			break;
		case "error":
			console.log(chalk.blue('[ 𝐅𝐚𝐢𝐥 ] » ') + data);
			break;
		case "load":
			console.log(color_one('[ 𝐅𝐚𝐜𝐞𝐡𝐨𝐨𝐤 𝐔𝐬𝐞𝐫 𝐍𝐞𝐰 ]') + color_two(data));
			break;
		default:
			console.log(color_one(`${option} » `) + color_two(data));
			break;
	}
}

module.exports.loader = (data, option) => {
	const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
	switch (option) {
		case "warn":
			console.log(chalk.greenBright('[  𝐍𝐠𝐨 𝐓𝐫𝐮𝐧𝐠 𝐊𝐢𝐞𝐧 ] » ') + data);
			break;
		case "error":
			console.log(chalk.greenBright('[ 𝐍𝐠𝐨 𝐓𝐫𝐮𝐧𝐠 𝐊𝐢𝐞𝐧 ] » ') + data);
			break;
		default:
			console.log(color_one(`[ 𝐍𝐠𝐨 𝐓𝐫𝐮𝐧𝐠 𝐊𝐢𝐞𝐧 ] » `) + color_two(data));
			break;
	}
}
module.exports.banner = (data) => {
	const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
	console.log(color(data));
        }