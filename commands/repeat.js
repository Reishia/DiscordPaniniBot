exports.run = (client, message, args) => {
  message.channel.send(args.join(" "));
  message.delete().then(console.log("Un message a été supprimé."));
};

exports.help = {
  name: "repeat"
};
