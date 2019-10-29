const fs = require("fs");


module.exports = (client, member) => { 
  const channel = member.guild.channels.find(c => c.name === "général");
  client.money = require("../storage/userData.json");
  client.list = require("../storage/userPlayersList.json");
  client.money[member.id] = {
    money: 0,
    lastDaily: "None"
  };
  client.list[member.id] = {
    list: [0]
  };
    
  fs.writeFile("./storage/userData.json", JSON.stringify(client.money, null, null), err => {
    if (err) throw err;
    channel.send(`Bienvenue sur FootCollection ${member}. Je te souhaite bonne chance !`);
  });
  fs.writeFile("./storage/userPlayersList.json", JSON.stringify(client.list, null, null), err => {
    if (err) throw err;
  });
};
