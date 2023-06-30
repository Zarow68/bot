const { Guild } = require('../../models/index')

module.exports = {
    name: 'update',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'update',
    examples: ['update'],
    category: 'admin',
    description: 'Mettre à jour les nouvelles données !',
    
    async runInteraction(client, interaction) {
        await Guild.updateMany({}, { "$set": { "logChannel": "."}, upsert: true});
        await Guild.updateMany({}, { "$set": { "CaptchaChannel": "."}, upsert: true})
        await Guild.updateMany({}, { "$set": { "WelcomeChannel": "."}, upsert: true})
        interaction.reply({ content: `Nouvelles données ajoutées !`, ephemeral: true})
    }     
};