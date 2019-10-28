const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  client.money = require("../userData.json");
  const embed = new MessageEmbed()
    .setTitle(`Compte de ${message.author.id}`)
    .addField("Solde du compte", `${client.money[message.author.id].money}`);
  message.channel.send(embed);
};

exports.help = {
  name: "money"
};
