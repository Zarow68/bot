module.exports = {
    name: 'slowmode',
    category: 'moderation',
    permissions: ['MANAGE_MESSAGES'],
    ownerOnly: false,
    usage: 'slowmode [amount_in_second]',
    examples: ['slowmode 15', 'slowmode 0'],
    description: 'Ajouté un ratelimit (slowmode) sur le salon !',
    
    options: [
        {
            name: 'value',
            description: 'Choisir la valeurdu slowmode',
            type: 'NUMBER',
            required: true,
            
            
        },
        
    ],
    async runInteraction(client, interaction) {
        const value = interaction.options.getNumber("value");

        if (value == 0) {
            await interaction.channel.setRateLimitPerUser(0)
            return interaction.reply({ content: 'Le slowmode est désactivé !', ephemeral: true});
        } else {
            await interaction.channel.setRateLimitPerUser(value)
            interaction.reply({ content: `Le slowmode est activé -> \`${value}s !\``, ephemeral: true});
        }
    }
};