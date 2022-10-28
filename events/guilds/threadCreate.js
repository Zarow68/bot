const dayjs = require('dayjs');
const { MessageEmbed, Formatters } = require('discord.js');

module.exports = {
    name: 'threadCreate',
    once: false,
    async execute(client, thread) {
        if (thread.isText()) thread.join();
        const logChannel = client.channels.cache.get('1034410086732402729')
        logChannel.send(`Nom du thread : ${thread.name}`);
    }
};