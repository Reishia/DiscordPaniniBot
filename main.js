const { Client } = require("discord.js");
const client = new Client({ disabledEveryone: true });

client.on("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag} !`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong !"); 
});

client.login("NjE2OTkxMzIwMDEwOTE1ODQx.XWkqQQ.vsXMzKUFfVADRWF6HRqTTUdBDbk");
