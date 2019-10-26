exports.run = client => {
  const { commands } = client;
  commands.map(c => c.name).join(",");
};


