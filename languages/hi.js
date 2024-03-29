# Nếu bạn muốn xuống dòng, hãy dùng\n. VD: SpermLord\nCatalizcs.
# Sau khi thay đổi, bạn phải khởi động lại bot để có hiệu lực.
# Đặt kí tự # ở đầu mỗi câu nếu bạn không muốn code chạy những dòng đó.
# Thanks to CatalizCS for translate to Vietnamese!

# mirai.js

mirai.errorFormat=Module không đúng định dạng!
mirai.nameExist=Tên module bị trùng với một module mang cùng tên khác!
mirai.notFoundLanguage=Module %1 không hỗ trợ ngôn ngữ ngôn ngữ của bạn
mirai.notFoundPackage=Không tìm thấy package %1 hỗ trợ cho module %2, tiến hành cài đặt...
mirai.cantInstallPackage=Không thể cài đặt package %1 cho module %2, lỗi: %3
mirai.loadedPackage=Đã tải thành công toàn bộ package cho module %1
mirai.loadedConfig=Đã tải thành công config cho module %1
mirai.cantLoadConfig=Không thể tải config của module %1, lỗi: %2
mirai.cantOnload=Không thể khởi chạy setup của module %1, lỗi: %1
mirai.successLoadModule=Đã tải thành công module %1
mirai.failLoadModule=Không thể tải thành công module %1, lỗi: %2
mirai.finishLoadModule=Đã tải thành công %1 module commands và %2 module events
mirai.foundPathAppstate=Đã tìm thấy file appstate
mirai.notFoundPathAppstate=Không tìm thấy file appstate
mirai.checkListGban=Đang kiểm tra danh sách global ban...
mirai.banDevice=Hiện tại thiết bị của bạn đã bị ban khỏi miraiproject, liên hệ tới facebook https://fb.me/JustOnly.MaiHuyBao.Official để biết thêm thông tin chi tiết hoặc xin key unban, nếu bạn đã có key unban hãy điền vào bên dưới!
mirai.keyNotSameFormat=Dữ liệu bạn nhập phải là một dãy số bao gồm 6 chữ số!
mirai.codeInputExpired=Code bạn nhập không trùng khớp hoặc đã hết hạn!
mirai.unbanDeviceSuccess=Thiết bị của bạn đã được gỡ ban, hãy khởi động lại để có thể tiếp tục sử dụng
mirai.userBanned=Bạn đã bị ban khỏi miraiproject vào lúc %1 với lý do: %2. Liên hệ tới facebook https://fb.me/JustOnly.MaiHuyBao.Official để biết thêm chi tiết!
mirai.finishCheckListGban=Đã kiểm tra xong danh sách global ban
mirai.handleListenError=handleListener đã xảy ra một số lỗi không mong muốn, lỗi: %1
mirai.warningSourceCode=PHÁT HIỆN SOURCE CODE ĐÃ BỊ THAY ĐỔI CẤU TRÚC, HÃY DỪNG LẠI NGAY!
mirai.refreshListen=Đã làm mới lại handleListener...
mirai.successConnectDatabase=Kết nối đến cơ sở dữ liệu thành công
mirai.failConnectDatabase=Kết nối đến cơ sở dữ liệu thất bại, lỗi: %1

# includes/listen.js

listen.startLoadEnvironment=Tiến hành khởi tạo biến môi trường...
listen.loadedEnvironmentThread=Đã tải thành công biến môi trường nhóm
listen.loadedEnvironmentUser=Đã tải thành công biến môi trường người dùng
listen.successLoadEnvironment=Đã khởi tạo biến môi trường thành công
listen.failLoadEnvironment=Khởi tạo biến môi trường không thành công, lỗi: %1

# includes/controller/currencies.js

currencies.needObjectOrArray=Phải là một Array hoặc Object hoặc có thể là cả hai
currencies.needObject=Phải là một Object
currencies.needNumber= Phải là một con số

# includes/controller/threads.js

threads.needObjectOrArray=Phải là một Array hoặc Object hoặc có thể là cả hai
threads.needObject=Phải là một Object

# includes/controller/users.js

users.needObjectOrArray=Phải là một Array hoặc Object hoặc có thể là cả hai
users.needObject=Phải là một Object

# includes/handle/handleCommand.js

handleCommand.userBanned=⚜️ ━━━━ [ 𝗕𝗮𝗻 𝘂𝘀𝗲𝗿  ] ━━━━ ⚜️\n💓 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 𝗯𝗶̣ 𝗰𝗮̂́𝗺 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 🚫\n💌 𝗟𝗶́ 𝗱𝗼: %1\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: \n%2
\n𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗴𝗼̛̃ 𝗯𝗮𝗻 💞\n𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂: m.me/100001378940139 
handleCommand.threadBanned=⚜️ ━━━━ [ 𝗕𝗮𝗻𝗻𝗲𝗱 𝗴𝗿𝗼𝘂𝗽 ] ━━━━ ⚜️\n💓 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗻𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗯𝗶̣ 𝗰𝗮̂́𝗺 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 \n💌 𝗟𝗶́ 𝗱𝗼: %1\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: \n%2\n→ 𝗗𝘂̀𝗻𝗴 𝗰𝗮𝗹𝗹𝗮𝗱 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 đ𝘂̛𝗼̛̣𝗰 𝗔𝗗𝗠𝗜𝗡 𝗴𝗼̛̃ 𝗯𝗮𝗻 💞\n𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂: m.me/100001378940139
handleCommand.commandNotExist=🤍=== [ 𝗡𝗴𝗼̂ 𝗧𝗿𝘂𝗻𝗴 𝗞𝗶𝗲̂𝗻 ] ===🤍\n━━━━━━━━━━━━━━━━━━\n🦋 𝗟𝗲̣̂𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗼̂̀𝗻 𝘁𝗮̣𝗶 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗯𝗼𝘁 𝐍𝐠𝐨 𝐓𝐫𝐮𝐧𝐠 𝐊𝐢𝐞𝐧 🤍\n😻 𝗖𝗼́ 𝗽𝗵𝗮̉𝗶 𝗹𝗲̣̂𝗻𝗵 ( %1 ) 𝗯𝗮̣𝗻 đ𝗮𝗻𝗴 𝗰𝗮̂̀𝗻 𝘁𝗶̀𝗺 𝗵𝗮𝘆 𝗸𝗵𝗼̂𝗻𝗴\n━━━━━━━━━━━━━━━━━━\n💓 𝗧𝗵𝗶́𝗻𝗵: 『 %3 』\n⏳️ 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́:  %7 𝗴𝗶𝗮̂𝘆\n⏰️ 𝗕𝗼𝘁 đ𝗮̃ 𝗼𝗻𝗹𝗶𝗻𝗲 đ𝘂̛𝗼̛̣𝗰: %4 𝗴𝗶𝗼̛̀ %5 𝗽𝗵𝘂́𝘁 %6 𝗴𝗶𝗮̂𝘆 
handleCommand.commandThreadBanned=Nhóm bạn đã bị cấm sử dụng lệnh "%1"
handleCommand.commandUserBanned=Bạn đã bị cấm sử dụng lệnh "%1"
handleCommand.threadNotAllowNSFW=Nhóm của bạn không được phép sử dụng những lệnh NSFW
handleCommand.cantGetInfoThread=Không thể lấy thông tin của nhóm, lỗi: %1
handleCommand.permssionNotEnough==== 『 𝗟𝗘̣̂𝗡𝗛 𝗔𝗗𝗠𝗜𝗡 』 ====\n━━━━━━━━━━━━━━━━━━\n→ 𝗫𝗶𝗻 𝗹𝗼̂̃𝗶 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̉ 𝗾𝘂𝘆𝗲̂̀𝗻 𝗵𝗮̣𝗻𝗴 đ𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 "%1" 🐧.\n→ 𝗖𝗵𝗶̉ 𝗰𝗼́ 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀ 𝗻𝗱𝗵 𝗺𝗼̛́𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝗮̀𝗶 đ𝘂̛𝗼̛̣𝗰 𝗹𝗲̣̂𝗻𝗵 𝗻𝗮̀𝘆 💓
handleCommand.cantSetMessageReaction=Đã có lỗi xảy ra không mong muốn tại setMessageReaction, lỗi: %1
handleCommand.notFoundLanguage=Không tìm thấy ngôn ngữ hỗ trợ cho module %1s
handleCommand.executeCommand=[ %1 ] Lệnh sử dụng: %2 bởi người dùng: %3 tại nhóm: %4 | Args đi kèm: %5 | Thời gian xử lý: %6ms
handleCommand.commandError=Đã xảy ra lỗi không mong muốn trong khi thực thi lệnh %1, lỗi: %2

# includes/handle/handleCommandEvent.js

handleCommandEvent.moduleError=Đã xảy ra lỗi không mong muốn tại lệnh %1, lỗi: %2

# includes/handle/handleCreateDatabase.js

handleCreateDatabase.newThread=nhóm mới: %1
handleCreateDatabase.newUser=người dùng mới: %1

# includes/handle/handleEvent.js

handleEvent.executeEvent=[ %1 ] Event được thực thi: %2 tại nhóm: %3 | Thời gian xử lý: %4ms
handleEvent.eventError=Đã xảy ra lỗi không mong muốn trong khi thực thi event %1, lỗi: %12

# includes/handle/handleReaction.js

handleReaction.missingValue=Thiếu dữ liệu để có thể thực thi phản hồi lại câu trả lời của bạn
handleReaction.executeError=Đã xảy ra lỗi không mong muốn khi đang thực thi trả lời câu hỏi bạn, lỗi: %1

# includes/handle/handleReply.js

handleReply.missingValue=Thiếu dữ liệu để có thể thực thi phản hồi lại câu trả lời của bạn
handleReply.executeError=Đã xảy ra lỗi không mong muốn khi đang thực thi trả lời câu hỏi bạn, lỗi: %1

# includes/handle/handleSchedule.js

handleSchedule.exectuteError=Đã xảy ra lỗi không mong muốn trong lúc schedule tại module %1, lỗi: %2

# utils/index.js

utils.throwError=[!] Lệnh bạn đang sử dụng không đúng cú pháp, vui lòng sử dụng %1help %2 để biết thêm chi tiết cách sử dụng
