module.exports = {
    name: 'NOTIF',
    async runInteraction (client, interaction, guildSettings) {
        await interaction.reply({ content: 'Je suis le bouton NOTIF!'})
    }
};