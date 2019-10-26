const { MessageEmbed } = require("discord.js");
const pLL = require("../util/playersLaLiga");
const pSA = require("../util/playersSerieA");

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
          .addField("Nationalité :", players[i].nation)
          .setImage(players[i].image)
          .setTimestamp();
  
        message.channel.send(embed);
        playerChecked = true;
      }
    }
  }
  if (args[0] !== "") {
    if (args[0] === 1) {
      players = pLL;
      Search()
    } else if (args[0] === 2) {
      players = pSA;
    }
    if (playerChecked === false) {
      message.channel.send("Le joueur que vous recherchez n'existe pas (ou n'est pas encore dans la base de données.)");
    }
  }
  message.delete();
};

exports.help = {
  name: "info"
};
