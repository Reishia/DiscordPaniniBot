const { MessageEmbed } = require("discord.js");

exports.run = (client, message, args) => {
  const channel = client.channels.find(r => r.name === "logs");
  const role = message.guild.roles.find(r => r.name === args[0]);
  if (!role)
    return message.channel.send("Ce rôle n'existe pas sur ce serveur.");
  if (message.member.roles.find(r => r.name === args[0])) {
    const embed = new MessageEmbed()
      .setDescription(`J'ai supprimé le rôle ${role} de ${message.author}`)
      .setTimestamp();
    message.member.roles.remove(role);
    channel.send(embed);
    message.delete({ timeout: 30000 });
  } else {
    const embed = new MessageEmbed()
      .setDescription(`${message.author} a maintenant le rôle ${role}`)
      .setTimestamp();
    message.member.roles.add(role);
    channel.send(embed);
    message.delete({ timeout: 30000 });
  }
};

exports.help = {
  name: "role"
};
