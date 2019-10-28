const moment = require("moment");
const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  client.daily = require("../userData.json");
  // eslint-disable-next-line no-negated-condition
  if (client.daily[message.author.id].lastDaily !== moment().format("L")) {
    client.daily[message.author.id].lastDaily = moment().format("L");
    client.daily[message.author.id].money += 500; 
    const embed = new MessageEmbed()
      .setTitle("Récompense journalière")
      .addField("", "500$ ont été ajoutés à votre compte !");
    message.channel.send(embed);
  } else {
    const embed = new MessageEmbed()
      .setTitle("Récompense journalière")
      .addField("", `Vous avez déjà récupéré votre recompense pour aujourd'hui ! Revenez ${moment().endOf("day").fromNow()}`);
    message.channel.send(embed);    
  }
};

exports.help = {
  name: "daily"
};
