/* const { MessageEmbed } = require("discord.js");
const players = require("../util/playerlist").default;
const fs = require("fs");

exports.run = (client, message, args, settings) => {
  client.money = require("../money.json");
  let rarity = "None";
  let _money = client.money[message.author.id].money;
  const pack = args[0];

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var playerLeague = entierAleatoire(0, players.length - 1);
  var playerID = entierAleatoire(1, players[playerLeague].length);
  var playersLeague = players[playerLeague];
  var player = playersLeague[playerID];

  function embed() {
    const embed = new MessageEmbed()
      .setTitle(player.name)
      .addField("Rareté :", rarity)
      .addField("ID du joueur :", player.id)
      .setImage(player.image);
    message.channel.send(embed);

    client.money[message.author.id] = {
      money: _money
    };

    fs.writeFile("./money.json", JSON.stringify(client.money, null, null), err => {
      if (err) throw err;
      message.channel.send("Le prix de ce pack vous a été débité !");
    });
  }

  function basePack() {
    if (_money > 2500) {
      rarity = "Base";  
      _money -= 2500;
      embed(); 
    } else {
      message.channel.send(`Vous n'avez pas assez d'argent, vous n'en avez que ${client.money[message.author.id].money}.`);
    }   
  }
  function advancedPack() {
    if (_money > 5000) {
      rarity = "Advanced";
      _money -= 5000;
      embed(); 
    } else {
      message.channel.send(`Vous n'avez pas assez d'argent, vous n'en avez que ${_money}.`);
    }
  }
  function rarePack() {
    if (_money > 10000) {
      rarity = "Rare";
      _money -= 10000;
      embed();
    } else {
      message.channel.send(`Vous n'avez pas assez d'argent, vous n'en avez que ${_money}.`);
    }   
  }
  function legendPack() {
    if (_money > 1000000) {
      rarity = "Legend";
      _money -= 1000000;     
      embed();  
    } else {
      message.channel.send(`Vous n'avez pas assez d'argent, vous n'en avez que ${_money}.`);
    }
  }
  
  switch (pack) {
  case "base":
    _money = client.money[message.author.id].money;
    basePack();
    break;
  case "advanced":
    _money = client.money[message.author.id].money;
    advancedPack();
    break;
  case "rare":
    _money = client.money[message.author.id].money;
    rarePack();
    break;
  case "legend":
    _money = client.money[message.author.id].money;
    legendPack(); 
    break;
  default:
    message.channel.send(`Veuillez renseigner le pack que vous souhaitez ouvrir (${settings.prefix}packs pour avoir la liste des packs disponibles.).`);
    console.log(playersLeague);
    break;
  }
};

exports.help = {
  name: "pack"
}; */
