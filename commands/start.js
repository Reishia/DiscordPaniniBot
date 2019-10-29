const fs = require("fs");

exports.run = (client, message) => { 
  client.money = require("../storage/userData.json");
  client.list = require("../storage/userPlayersList.json");
  client.money[message.author.id] = {
    money: 0,
    lastDaily: "None"
  };
  client.list[message.author.id] = {
    list: [0]
  };
    
  fs.writeFile("./storage/userData.json", JSON.stringify(client.money, null, null), err => {
    if (err) throw err;
    message.channel.send(`Bienvenue sur FootCollection ${message.author}. Je te souhaite bonne chance !`);
  });
  fs.writeFile("./storage/userPlayersList.json", JSON.stringify(client.list, null, null), err => {
    if (err) throw err;
  });
};

exports.help = {
  name: "start"
};
