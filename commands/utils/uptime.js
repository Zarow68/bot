const { MessageEmbed, discord } = require('discord.js');

module.exports = {
    name: 'uptime',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'uptime',
    examples: ['uptime'],
    description: 'Savoir combien de temps le bot est connecté',

    async runInteraction(client, interaction) {
        const embed = new MessageEmbed()
            .setColor(client.gris)
            .setDescription(`Je me suis connecté <t:${(client.readyTimestamp / 1000).toFixed()}:R> !`);
        
        interaction.reply({ embeds: [embed], ephemeral: true });
        
    }
};