const fs = require("fs");


exports.run = (client, message) => { 
  client.money = require("../money.json");
  client.money[message.author.id] = {
    money: 0
  };
  
  fs.writeFile("./money.json", JSON.stringify(client.money, null, null), err => {
    if (err) throw err;
    message.channel.send(`Bienvenue sur FootCollection ${message.author}. Je te souhaite bonne chance !`);
  });
  message.delete();
};

exports.help = {
  name: "start"
};
