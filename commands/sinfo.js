const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  const embed = new MessageEmbed()
    .setDescription(`${message.guild.name}`)
    .setThumbnail(message.guild.iconURL())
    .addField("Membres :", `${message.guild.memberCount}`)
    .addField("Crée le :", `${message.guild.createdAt}`)
    .addField("Rôle le plus haut :", `${message.guild.roles.highest}`)
    .addField("Region :", `${message.guild.region}`)
    .setFooter(`Serveur crée par ${message.guild.owner.user.tag}`);
  message.channel.send(embed);
};

exports.help = {
  name: "sinfo"
};
