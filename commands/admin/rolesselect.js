const { MessageActionRow, MessageSelectMenu } = require('discord.js');

const SelectMenu = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
    .setCustomId('roles-menu')
    .setPlaceholder('choisir un role')
    .setMinValues(1)
    .setMaxValues(1)
    .addOptions([
        {
            label: '📢Notif',
            description: 'Notifications du serveur !',
            value:'1034410084631064579'
        },
        {
            label: '🎮 Gaming',
            description: 'Notification gamings !',
            value:'1034410084631064580'
        },
        {
            label: 'violet',
            description: 'violet',
            value:'1057267914337681469'
        }
    ])
)
module.exports = {
    name: 'yt',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'poll [question]',
    examples: ['poll', 'poll Rock ou Rap ?'],
    description: 'role !',
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'cliquer sur le menus', components: [SelectMenu]})
        
    },
};