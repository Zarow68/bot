const dayjs = require('dayjs');
const { MessageEmbed, Formatters } = require('discord.js');

module.exports = {
    name: 'threadUpdate',
    once: false,
    async execute(client, oldThread, newThread) {
        if (oldThread.archived && !newThread.archived) newThread.join();
    }
};