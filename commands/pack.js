const { MessageEmbed } = require("discord.js");
const pLL = require("../players/playersLaLiga");
const pSA = require("../players/playersSerieA");
const fs = require("fs");

exports.run = (client, message, args) => {
  client.money = require("../money.json");
  let _money = 0;
  let players = [0];

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Détermination de la ligue du joueur packé
  const playerLeague = entierAleatoire(1, 2);
  if (playerLeague === 1) {
    players = pLL;
  } else if (playerLeague === 2) {
    players = pSA;
  }

  // Détermination du joueur packé
  const PID = entierAleatoire(1, players.length);

  function achat(price) {
    _money = client.money[message.author.id].money;
    if (_money < price) {
      message.channel.send(`Vous n'avez pas assez d'argent, vous n'en avez que ${_money}.`);
    } else {
      const embed = new MessageEmbed()
        .setTitle(players[PID].name)
        .setImage(players[PID].image);
      message.channel.send(embed);
      _money -= price;
      client.money[message.author.id] = {
        money: _money
      };

      fs.writeFile("./money.json", JSON.stringify(client.money, null, null), err => {
        if (err) throw err;
        message.channel.send(`${price}$ vous ont été débité ! Vous avez maintenant ${_money}$`);
      });
    }
  }

  if (args[0] === "base") {
    achat(1000);
  }
};

exports.help = {
  name: "pack"
};
