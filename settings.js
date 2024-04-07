//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Fahmi XD" //ur yt chanel name
global.socialm = "GitHub: Fahmi-XD" //ur github or insta name
global.location = "Bandung, West Java, Indonesia" //ur location

//new
global.botname = 'Fahmi XD | Bot' //ur bot name
global.ownernumber = '6285797442902' //ur owner number
global.ownername = 'Fahmi XD' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "FXD Bot Inc."
global.botscript = 'https://github.com/Fahmi-XD' //script link
global.packname = "Sticker By"
global.author = "FxD\n\n+6285797442902"
global.creator = "6285797442902@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285797442902"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v7' // menu type 'v1' => 'v8'
global.typereply = 'v1' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Limit poin anda tercapai!',
	nsfw: 'Fitur NSFW tidak di aktifkan, chat admin group untuk mengaktifkannya.',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/biru.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
