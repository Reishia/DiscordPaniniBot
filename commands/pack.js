const { MessageEmbed } = require("discord.js");
const pLL = require("../players/playersLaLiga");
const pSA = require("../players/playersSerieA");
const pBu = require("../players/playersBundesliga");
const pPL = require("../players/playersPremierLeague");
const fs = require("fs");

exports.run = (client, message, args) => {
  client.money = require("../storage/userData.json");
  client.list = require("../storage/userPlayersList.json");
  let _money = 0;
  let players = [0];
  let _league = "None";

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Détermination de la ligue du joueur packé
  const playerLeague = entierAleatoire(1, 4);
  if (playerLeague === 1) {
    _league = "ESP1";
    players = pLL;
  } else if (playerLeague === 2) {
    _league = "ITA1";
    players = pSA;
  } else if (playerLeague === 3) {
    _league = "ALL1";
    players = pBu;
  } else if (playerLeague === 4) {
    _league = "ANG1";
    players = pPL;
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
        .addField("Club :", `${players[PID].club}`)
        .setImage(players[PID].image);
      message.channel.send(embed);
      _money -= price;
      client.money[message.author.id] = {
        money: _money
      };
      function checkID(name) {
        let id = undefined;
        const playerID = 1;
        while (playerID !== undefined) {
          id = client.list[name].listID + 1;                                               
        }
        return id;
      }

      client.list[message.author.id] = {
        listID: checkID(message.author.id),
        player: PID,
        league: _league
      };

      fs.writeFile("./storage/userData.json", JSON.stringify(client.money, null, null), err => {
        if (err) throw err;
        message.channel.send(`${price}$ vous ont été débité ! Vous avez maintenant ${_money}$`);
      });
      fs.writeFile("./storage/userPlayersList.json", JSON.stringify(client.list, null, null), err => {
        if (err) throw err;
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
