exports.run = async (client, message, args) => {
  function clean(text) {
    if (typeof text === "string") {
      return text.replace(
        /`/g,
        "`" +
          String.fromCharCode(8203).replace(
            /@/,
            "@" + String.fromCharCode(8203)
          )
      );
    }
    return text;
  }
  if (message.author.id !== "482906612533559318") return undefined;
  const code = args.join(" ");
  const evaled = eval(code);
  const cleancode = await clean(evaled);
  message.channel.send(cleancode, { code: "js" });
};

exports.help = {
  name: "eval"
};
