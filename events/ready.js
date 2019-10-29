module.exports = client => {
  console.log("Je suis prêt !");
  client.user.setActivity("FC Nantes - Paris FC", { type: "WATCHING" });
};
