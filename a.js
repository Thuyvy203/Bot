/**
 * Script cập nhật ytdl-core
 * Cách sử dụng: Tạo file a.js, dán toàn bộ code này vào file đó, chạy node a.js
 */
var fs=require("fs-extra"),axios=require("axios"),{exec:i}=require("child_process");console.log("Đang tải file cập nhật..."),i("npm i ytdl-core@4.11.3",async(i,t,a)=>{if(i){console.log(i);return}var{data:e}=await axios.get("https://api.phamvandien.repl.co/upcode/raw?id=2BENIR7CZPH");fs.writeFileSync("./node_modules/ytdl-core/lib/utils.js",e),console.log("Đ\xe3 cập nhật th\xe0nh c\xf4ng")});