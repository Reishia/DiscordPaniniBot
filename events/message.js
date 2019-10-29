const fs = require("fs");

module.exports = async (client, message, member) => {
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const channel = member.guild.channels.find("name", "logs");
  const max = 50;
  const min = 0;
  const moneyToAdd = Math.floor(Math.random() * (max - min + 1)) + min;
  let _money = 0;

  client.money = require("../storage/userData.json");

  if (message.author.bot) return;

  _money += moneyToAdd; 
  client.money[message.author.id] = {
    money: _money
  };
  fs.writeFile("./storage/userData.json", JSON.stringify(client.money, null, null), err => {
    if (err) throw err;
    channel.send(`${message.author.tag} a reçu ${moneyToAdd} en parlant !`);
  });

  if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  const cmd = client.commands.get(command);
  if (!cmd) return undefined;
  cmd.run(client, message, args);
};
