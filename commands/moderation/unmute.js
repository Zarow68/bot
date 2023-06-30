module.exports = {
    name: 'unmute',
    category: 'moderation',
    permissions: ['MODERATE_MEMBERS'],
    ownerOnly: false,
    usage: 'unmute [@member]',
    examples: ['unmute @Zarow'],
    description: 'Démute un utilisateur !',
    
    options: [
        {
            name: 'member',
            description: 'L\'utilisateur à mute',
            type: 'USER',
            required: true,
        }
        
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('member');

        if (!target.isCommunicationDisabled()) return interaction.reply({content: 'Ce membre ne peut pas être démute par le bot car il n\'est pas mute !', ephemeral: true});

        target.timeout(null);
       interaction.reply({content: `Le membre ${target} a été démute !`, ephemeral: true});
    }
};