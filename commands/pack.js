const { MessageEmbed } = require("discord.js");
const pLL = require("../players/playersLaLiga");
const pSA = require("../players/playersSerieA");
const pBu = require("../players/playersBundesliga");
const pPL = require("../players/playersPremierLeague");
const pL1 = require("../players/playersLigue1");
const pEr = require("../players/playersEredivisie");
const fs = require("fs");

exports.run = (client, message, args) => {
  client.money = require("../storage/userData.json");
  let _money = 0;
  let players = [0];
  let _id = 0;

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Détermination de la ligue du joueur packé
  const playerLeague = entierAleatoire(1, 4);
  if (playerLeague === 1) {
    players = pLL;
  } else if (playerLeague === 2) {
    players = pSA;
  } else if (playerLeague === 3) {
    players = pBu;
  } else if (playerLeague === 4) {
    players = pPL;
  } else if (playerLeague === 5) {
    players = pL1;
  } else if (playerLeague === 6) {
    players = pEr;
  }

  // Détermination du joueur packé
  const PID = entierAleatoire(0, players.length - 1);

  function achat(price) {
    _money = client.money[message.author.id].money;
    if (_money < price) {
      message.channel.send(`Vous n'avez pas assez d'argent, vous n'en avez que ${_money}.`);
    } else {
      const embed = new MessageEmbed()
        .setTitle(players[PID].name)
        .addField("Club :", `${players[PID].club}`)
        .setImage(players[PID].image);
      message.channel.send(embed);
      _money -= price;
      for (var i = 0; i < client.money[message.author.id].list.length - 1; i++) {
        _id = client.money[message.author.id].list[i].id;
      }
      client.money[message.author.id] = {
        money: _money,
        list: client.money[message.author.id].list.push([{ id: _id, playerID: PID, pLeague: playerLeague }])
      };

      fs.writeFile("./storage/userData.json", JSON.stringify(client.money, null, null), err => {
        if (err) throw err;
        message.channel.send(`${price}$ vous ont été débité ! Vous avez maintenant ${_money}$`);
      });
    }
  }

  if (args[0] === "base") {
    achat(500);
  }
};

exports.help = {
  name: "pack"
};
