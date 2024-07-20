const TelegramBot = require('node-telegram-bot-api');

const token = '6833919998:AAE8hBzxoBnUqd_aWNSwierHQb9vGAKFG6I';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://sky-game.cfd/w83dts"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://sky-game.cfd/w83dts",
                        },
                    ],
                    [
                        {
                            text: "🐉 Официальный канал",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                    [
                        {
                            text: "💰 Бонусы",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home.jpg');
            await bot.sendMessage(chatId, "💰 Добро пожаловать в Dragon money! 🐉 \n\n Теперь вы можете играть прямо в \n телеграм!", menu_game)
        }
    }
    startBot()
})