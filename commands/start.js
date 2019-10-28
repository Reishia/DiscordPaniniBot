const fs = require("fs");


exports.run = (client, message) => { 
  client.money = require("../userData.json");
  if (client.money[message.author.id].money === "") {
    client.money[message.author.id] = {
      money: 0,
      lastDaily: "None"
    };
    
    fs.writeFile("./userData.json", JSON.stringify(client.money, null, null), err => {
      if (err) throw err;
      message.channel.send(`Bienvenue sur FootCollection ${message.author}. Je te souhaite bonne chance !`);
    });
  } else {
    message.channel.send("Vous avez déjà commencé votre aventure avec FootCollection !");
  }
  message.delete();
};

exports.help = {
  name: "start"
};
