const fs = require("fs");

exports.run = (client, message) => { 
  client.money = require("../storage/userData.json");
  client.money[message.author.id] = {
    money: 0,
    lastDaily: "None",
    list: [0]
  };
    
  fs.writeFile("./storage/userData.json", JSON.stringify(client.money, null, null), err => {
    if (err) throw err;
    message.channel.send(`Bienvenue sur FootCollection ${message.author}. Je te souhaite bonne chance !`);
  });
};

exports.help = {
  name: "start"
};
