const { MessageEmbed } = require("discord.js");
const players = require("../util/playerlist").default;

exports.run = (client, message, args) => {
  let playerChecked = Boolean(false);
  if (args[0] !== "") {
    const playersNumber = players.length;
  
    for (var i = 0; i < playersNumber; i++) {
      if (args[0] === players[i].id || args[0] === players[i].name) {
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
    if (playerChecked === false) {
      message.channel.send("Le joueur que vous recherchez n'existe pas (ou n'est pas encore dans la base de données.)");
    }
  }
  message.delete();
};

exports.help = {
  name: "info"
};
