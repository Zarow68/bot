module.exports = {
    name: 'unlock',
    category: 'moderation',
    permissions: ['MANAGE_CHANNELS'],
    ownerOnly: false,
    usage: 'unlock',
    examples: ['unlock'],
    description: 'Dévérouille un salon !',
    
    async runInteraction(client, interaction) {
        await interaction.channel.permissionOverwrites.edit("1034410084631064582", { SEND_MESSAGES: true });
        await interaction.reply({ content: "Le salon est dévérouillé", ephemeral: true})
        
    }
};