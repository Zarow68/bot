const { Guild } = require('../../models/index')

module.exports = {
    name: 'reload',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'reload',
    examples: ['reload'],
    category: 'admin',
    description: 'Relancer le bot !',
    async run(client, message, args) {
        const devGuild = await client.guilds.cache.get('1034410084631064577');
        devGuild.commands.set([]);

        await message.reply('Bot relancé avec succès')
        return process.exit()
    },
    async runInteraction(client, interaction) {
        const devGuild = await client.guilds.cache.get('1034410084631064577');
        devGuild.commands.set([]);

        await interaction.reply('Bot relancé avec succès')
        return process.exit()
    }
};