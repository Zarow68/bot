module.exports = {
    name: 'clear',
    category: 'moderation',
    permissions: ['MANAGE_MESSAGES'],
    ownerOnly: false,
    usage: 'clear [amount] <@target>',
    examples: ['clear 20', 'clear 20 @Zarow'],
    description: 'Supprimer des messages sur un salon ou un utilisateur',
    
    options: [
        {
            name: 'message',
            description: 'Le nombre de message à supprimer',
            type: 'NUMBER',
            required: true,
            
            
        },
        {
            name: 'target',
            description: 'Sélectionner l\'utilisateur pour la suppresion de message',
            type: 'USER',
            required: false,
        }
        
    ],
    async runInteraction(client, interaction) {
        const amoutToDelete = interaction.options.getNumber('message');
        if (amoutToDelete > 100 || amoutToDelete < 2) return interaction.reply('Le \`NOMBRE\` doit être inférieur à 100 et supérieur à 1');
        const target = interaction.options.getMember('target');

        const messagesToDelete = await interaction.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messagesToDelete).filter(msg => {
                if (msg.author.id == target.id && amoutToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await interaction.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
                interaction.reply(`${messages.size} messages on été supprimé sur l'utilisateur ${target} !`);
            });
        } else {
            await interaction.channel.bulkDelete(amoutToDelete, true).then(messages => {
                interaction.reply({content: `${messages.size} messages on été supprimé sur le salon !`, ephemeral: true});
            });
        }
        
        
    }
};