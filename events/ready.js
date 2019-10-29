module.exports = client => {
  console.log("Je suis prêt !");
  client.user.setActivity("FC Nantes - Paris FC", { type: "WATCHING" }
    .then(presence => console.log(`Activité mise à ${presence.activity.name}`)))
    .catch(console.error);
};
