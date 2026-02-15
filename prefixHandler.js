const fs = require("fs");
const path = require("path");

module.exports = (client) => {
  const commandFiles = fs.readdirSync(path.join(__dirname, "../commands/prefix"));
  for (const file of commandFiles) {
    const command = require(`../commands/prefix/${file}`);
    client.prefixCommands.set(command.name, command);
  }
  console.log("📦 Prefix commands loaded");
};
