const { MessageEmbed } = require("discord.js");
const pLL = require("../players/playersLaLiga");
const pSA = require("../players/playersSerieA");
const pBu = require("../players/playersBundesliga");
const pPL = require("../players/playersPremierLeague");

exports.run = (client, message, args) => {
  const _id = args[1];
  let players = [0];
  client.money = require("../storage/userData.json");
  for (var i = 1; i < client.money[message.author.id].list.length; i++) {
    if (client.money[message.author.id].list[i].id === _id) {
      if (client.money[message.author.id].list[_id].pLeague === 1) { // Allemagne 1
        players = pBu;        
      } else if (client.money[message.author.id].list[_id].pLeague === 4) { // Angleterre 1
        players = pPL;
      } else if (client.money[message.author.id].list[_id].pLeague === 3) { // Espagne 1
        players = pLL;
      } else if (client.money[message.author.id].list[_id].pLeague === 2) { // Italie 1
        players = pSA;
      }

      const embed = new MessageEmbed()
        .setTitle(players[client.money[message.author.id].playerID].name)
        .addField("Position :", players[client.money[message.author.id].playerID].position)
        .addField("Club :", players[client.money[message.author.id].playerID].club);
      message.channel.send(embed);
    }
  }
};

exports.help = {
  name: "view"
};
