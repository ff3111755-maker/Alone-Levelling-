const fs = require("fs");
const path = require("path");

module.exports = async (client) => {
  const commands = [];
  const commandFiles = fs.readdirSync(path.join(__dirname, "../commands/slash"));
  for (const file of commandFiles) {
    const command = require(`../commands/slash/${file}`);
    client.slashCommands.set(command.data.name, command);
    commands.push(command.data);
  }
  await client.application.commands.set(commands);
  console.log("⚡ Slash commands registered");
};
