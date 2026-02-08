const mineflayer = require('mineflayer')

function startBot() {
    const bot = mineflayer.createBot({
        host: "BlazeMineC.aternos.me",  // your server
        port: 61391,                    // your server port
        username: "Mr_flambeBot",       // bot username
        version: false                  // auto-detect
    })

    bot.on("login", () => {
        console.log("Bot logged in!")
    })

    bot.on("spawn", () => {
        console.log("Bot spawned!")

        // Auto register + login
        setTimeout(() => {
            bot.chat("/register kshitiz0 kshitiz0")
        }, 2000)

        setTimeout(() => {
            bot.chat("/login kshitiz0")
        }, 5000)

        // Anti AFK movement
        setInterval(() => {
            bot.setControlState('jump', true)
            setTimeout(() => bot.setControlState('jump', false), 500)
        }, 10000)
    })

    // Auto reconnect if kicked
    bot.on("end", () => {
        console.log("Bot disconnected. Reconnecting in 5 seconds…")
        setTimeout(startBot, 5000)
    })

    bot.on("kicked", (reason) => console.log("Kicked:", reason))
    bot.on("error", (err) => console.log("Error:", err))
}

startBot()
