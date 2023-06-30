module.exports = {
    name: 'roles-menu',
    async runInteraction (client, interaction) {
        await interaction.member.roles.add(interaction.valuess)
        await interaction.reply({ content: 'Bravo, le bot vous a rajouté votre rôle !', ephemeral: true });
    }
};