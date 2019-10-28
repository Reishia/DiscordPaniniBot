const fs = require("fs");


exports.run = (client, message) => { 
  client.money = require("../userData.json");
  client.money[message.author.id] = {
    money: 0,
    lastDaily: "None"
  };
    
  fs.writeFile("./userData.json", JSON.stringify(client.money, null, null), err => {
    if (err) throw err;
    message.channel.send(`Bienvenue sur FootCollection ${message.author}. Je te souhaite bonne chance !`);
  });
  message.delete();
};

exports.help = {
  name: "start"
};
