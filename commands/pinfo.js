const { MessageEmbed } = require("discord.js");
const pLL = require("../players/playersLaLiga");
const pSA = require("../players/playersSerieA");
const pBu = require("../players/playersBundesliga");
const pPL = require("../players/playersPremierLeague");
const pL1 = require("../players/playersLigue1");
const pEr = require("../players/playersEredivisie");

exports.run = (client, message, args) => {
  let playerChecked = Boolean(false);
  let players = [0];

  function Search() {
    const playersNumber = players.length;
    for (var i = 0; i < playersNumber; i++) {
      if (args[1] === players[i].id) {
        const embed = new MessageEmbed()
          .setTitle(players[i].name)
          .addField("Âge :", players[i].age)
          .addField("Club actuel :", players[i].club)
          .addField("Position :", players[i].position)
          .addField("Pays d'origine :", players[i].nation)
          .setImage(players[i].image)
          .setTimestamp();
  
        message.channel.send(embed);
        playerChecked = true;
      }
    }
  }

  if (args[0] !== "") {
    if (args[0] === "ALL1") {
      players = pBu;
      Search();
    } else if (args[0] === "ANG1") {
      players = pPL;
      Search();
    } else if (args[0] === "ESP1") {
      players = pLL;
      Search();
    } else if (args[0] === "FRA1") {
      players = pL1;
      Search();
    } else if (args[0] === "ITA1") {
      players = pSA;
      Search();
    } else if (args[0] === "NED1") {
      players = pEr;
      Search();
    }
    if (playerChecked === false) {
      message.channel.send("Le joueur que vous recherchez n'existe pas (ou n'est pas encore dans la base de données.)");
    }
  }
};

exports.help = {
  name: "pinfo"
};
