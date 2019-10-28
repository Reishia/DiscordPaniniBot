const fs = require("fs");


exports.run = (client, message) => { 
  client.money = require("../storage/userData.json");
  client.list = require("../storage/userPLayersList.json");
  client.money[message.author.id] = {
    money: 0,
    lastDaily: "None"
  };
  client.list[message.author.id] = {
    list: "None"
  };
    
  fs.writeFile("./storage/userData.json", JSON.stringify(client.money, null, null), err => {
    if (err) throw err;
    message.channel.send(`Bienvenue sur FootCollection ${message.author}. Je te souhaite bonne chance !`);
  });
  message.delete();
};

exports.help = {
  name: "start"
};
