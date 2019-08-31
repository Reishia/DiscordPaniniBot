const settings = require("../models/index");

module.exports = client => {
  const bienvenue = client.channels.find(r => r.name === settings.welcomeChannel);
  bienvenue.send(settings.welcomeMessage);
};
