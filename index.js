const { Client, Collection, MessageEmbed } = require('discord.js');

const dotenv = require('dotenv'); dotenv.config();
const mongoose = require('mongoose');
const client = new Client({ 
    intents: [
        "AUTO_MODERATION_CONFIGURATION",
        "AUTO_MODERATION_EXECUTION",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
        "GUILDS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_INVITES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "GUILD_PRESENCES",
        "GUILD_SCHEDULED_EVENTS",
        "GUILD_VOICE_STATES",
        "GUILD_WEBHOOKS",
        "MESSAGE_CONTENT",

    ], partials: [ 
        "MESSAGE", "CHANNEL", "REACTION", 'USER'
    ]})
const Logger = require('./utils/Logger');

['commands', 'buttons', 'selects'].forEach(x => client[x] = new Collection());
require('./utils/Functions')(client);

['CommandUtil', 'EventUtil', 'ButtonUtil', 'SelectUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });

process.on('unhandledRejection', (reason, promise) => { 
Logger.warn(`UNHANDLED_REJECTION: ${reason}`);
console.log(promise);

});
process.on('warning', (...args) => Logger.warn(...args));
// base de donnée 
mongoose.connect(process.env.DATABASE_URI, {
  autoIndex: false, 
  maxPoolSize: 10, 
  serverSelectionTimeoutMS: 5000, 
  socketTimeoutMS: 45000,
  family: 4
}).then(() => { Logger.client('- connecté à la base de données !') })
.catch(err => { Logger.error(err); });

client.login(process.env.DISCORD_TOKEN);