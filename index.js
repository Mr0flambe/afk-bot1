const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: "BlazeMineC.aternos.me",
  port: 61391,
  username: "Mr_flambeBot",
  version: "1.21.1",        // IMPORTANT: Your Purpur version
  password: "kshitiz0"
})

bot.once('spawn', () => {
  setTimeout(() => {
    bot.chat('/register kshitiz0 kshitiz0')
    bot.chat('/login kshitiz0')
  }, 6000)
})

// Anti kick: move every 30 seconds
setInterval(() => {
  bot.setControlState('jump', true)
  setTimeout(() => bot.setControlState('jump', false), 500)
}, 30000)

bot.on('end', () => {
  console.log("Bot disconnected. Reconnecting in 10s...")
  setTimeout(() => process.exit(1), 10000)
})
