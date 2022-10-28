const { Guild } = require('../../models/index')

module.exports = {
    name: 'update',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'update',
    examples: ['update'],
    category: 'admin',
    description: 'Mettre à jour les nouvelles données !',
    async run(client, message, args) {
        await Guild.updateMany({}, { "$set": { "logChannel": "."}, upsert: true});
        message.reply('Nouvelles données ajoutées !');

        await Guild.updateMany({}, { "$set": { "testChannel": "."}, upsert: true});
    },
    async runInteraction(client, interaction) {
        await Guild.updateMany({}, { "$set": { "logChannel": "."}, upsert: true});

        await Guild.updateMany({}, { "$set": { "testChannel": "."}, upsert: true});
        interaction.reply('Nouvelles données ajoutées !');
    }
};