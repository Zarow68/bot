const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'sondage',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'poll [question]',
    examples: ['poll', 'poll Rock ou Rap ?'],
    description: 'Poster votre propre sondage !',
    
    options: [
        {
            name: 'title',
            description: 'Taper le titre de votre sondage',
            type: 'STRING',
            required: true,
        },
        {
            name: 'content',
            description: 'Taper la question de votre sondage',
            type: 'STRING',
            required: true,
        },
    ],
    async runInteraction(client, interaction) {
        const pollTitle = interaction.options.getString('title');
        const pollContent = interaction.options.getString('content');

        const embed = new MessageEmbed()
        .setTitle(pollTitle)
        .setColor('#00a3b5')
        .setDescription(pollContent)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag}`});
        const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
        poll.react('✅')
        poll.react('❌');
        
    },
};