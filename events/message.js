const fs = require("fs");

module.exports = async (client, message) => {
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const channel = message.guild.channels.find(c => c.name === "logs");
  const max = 5;
  const min = 1;
  const moneyToAdd = Math.floor(Math.random() * (max - min + 1)) + min;
  let _money = client.money[message.author.id].money;

  if (message.author.bot) return;

  _money += moneyToAdd; 
  client.money[message.author.id] = {
    money: _money
  };
  fs.writeFile("./storage/userData.json", JSON.stringify(client.money, null, null), err => {
    if (err) throw err;
    channel.send(`${message.author.tag} a reçu ${moneyToAdd}$ en parlant !`);
  });

  if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  const cmd = client.commands.get(command);
  if (!cmd) return undefined;
  cmd.run(client, message, args);
};
