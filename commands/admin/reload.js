const { MessageEmbed} = require("discord.js");

module.exports = {
    name: 'reload',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'reload',
    examples: ['reload'],
    description: 'Relancé le bot !',
    
    async runInteraction (client, interaction) {

        //const devGuild = await client.guilds.cache.get('1034410084631064577');
         //devGuild.commands.set([]);

        await interaction.reply('Bot relancé avec succès')
        return process.exit();
    }
};