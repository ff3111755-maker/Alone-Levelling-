require("dotenv").config();
const client = require("./client");

const loadPrefixCommands = require("./handlers/prefixHandler");
const loadSlashCommands = require("./handlers/slashHandler");

client.once("ready", async () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
  await loadPrefixCommands(client);
  await loadSlashCommands(client);
});

client.login(process.env.TOKEN);
