module.exports = {
    name: 'lock',
    category: 'moderation',
    permissions: ['MANAGE_CHANNELS'],
    ownerOnly: false,
    usage: 'lock',
    examples: ['lock'],
    description: 'Vérouiller un salon !',
    
    async runInteraction(client, interaction) {
        await interaction.channel.permissionOverwrites.edit("1034410084631064582", { SEND_MESSAGES: false });
        await interaction.reply({ content: "Le salon est vérouillé", ephemeral: true})
        
    }
};