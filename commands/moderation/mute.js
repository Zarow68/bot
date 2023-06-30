const ms = require('ms');

module.exports = {
    name: 'mute',
    category: 'moderation',
    permissions: ['MODERATE_MEMBERS'],
    ownerOnly: false,
    usage: 'mute [@member] [duration] [reason]',
    examples: ['mute @Zarow 4 minutes raison'],
    description: 'mute un utilisateur temorairement avec une raison !',
   
    options: [
        {
            name: 'member',
            description: 'L\'utilisateur à mute',
            type: 'USER',
            required: true,
            
            
        },
        {
            name: 'duration',
            description: 'La durée du mute',
            type: 'STRING',
            required: true,
        },
        {
            name: 'reason',
            description: 'La raison du mute',
            type: 'STRING',
            required: true,
        }
        
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('member');
        const duration = interaction.options.getString('duration')
        const convertedTime = ms(duration);
        const reason = interaction.options.getString('reason');

        if (!target.moderatable) return interaction.reply({ content: 'Ce membre ne peut pas être mute par le bot !', ephemeral: true});
        if (!convertedTime) return interaction.reply({ content: 'Spécifier une durée valable !', ephemeral: true})

        target.timeout(convertedTime, reason);
       interaction.reply({content: `Le membre ${target} a été mute pour ${duration} car ${reason} !`, ephemeral: true});
    }
};