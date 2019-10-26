const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  const embed = new MessageEmbed()
    .setDescription(message.guild.name)
    .addField("Membres", message.guild.memberCount)
    .addField("Rôle le plus élevé :", message.guild.roles.highest)
    .addField("Serveur crée le :", message.guild.createdAt)
    .setFooter(
      message.guild.owner.user.tag,
      message.guild.owner.user.avatarURL()
    )
    .setTimestamp();
  message.channel.send(embed);
};

exports.help = {
  name: "sinfo"
};
