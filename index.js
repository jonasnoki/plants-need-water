const {Telegraf} = require('telegraf');
const schedule = require("node-schedule");
require('dotenv').config();


(async () => {
    var isWatered = false;
    var chats = [];

    schedule.scheduleJob('0 18 * * *', function (fireDate) {
        if (!isWatered) {
            chats.forEach(chat => bot.telegram.sendMessage(chat.id, "Gieß doch mal die Pflanzen 🌱 !"))
            console.log("requested watering.")
        } else {
            console.log("no need to water.")
        }
        isWatered = false;
    });


    const bot = new Telegraf(process.env.BOT_TOKEN)
    bot.start(async (ctx) => {
        ctx.reply("Ich werde dich ab jetzt immer um 18:00 daran erinnern deine Pflanzen zu gießen.");
        let chat = await ctx.getChat();
        chats.push(chat)
        console.log('added chat: ', chat);
    })
    bot.hears('hi', (ctx) => ctx.reply('Hey there'))
    bot.hears('/gegossen', (ctx) => {
        ctx.reply("nice!");
        isWatered = true;
    })
    bot.launch()
})();

