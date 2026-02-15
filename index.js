require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");

// Create bot client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Collections for commands and shadows
client.prefixCommands = new Collection();
client.shadows = new Collection();
client.usersData = new Collection(); // temp storage before DB

// Bot online
client.once("ready", () => {
  console.log(`✅ Bot is online as ${client.user.tag}`);
});

// Prefix command handler
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith("!")) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();

  if (cmd === "arise") {
    // Placeholder for shadow spawn logic
    message.reply("A shadow has appeared! Logic coming soon...");
  }
});

client.login(process.env.TOKEN);
