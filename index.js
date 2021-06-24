const Discord = require("discord.js");
const client = new Discord.Client();
const mySecret = process.env['client_token']




client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})

// client.login(mySecret)

try {
  client.login(mySecret)
} catch (error) {
  console.error(error.message);
}




