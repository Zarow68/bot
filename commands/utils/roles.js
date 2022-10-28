const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const selectMenu = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
    .setCustomId('roles-menu')
    .setPlaceholder('Choisir un rôle dans la liste')
    .setMinValues(1)
    .setMaxValues(3)
    .addOptions([
        {
            label: '🎮 Gaming',
            description: 'Choisir le role 🎮 Gaming',
            value: '1034410084631064580'
        },
        {
            label: '📢 NOTIF',
            description: 'Choisir le role 📢 NOTIF',
            value: '1034410084631064579'
        },
        {
            label: '💲 Jeux gratuits',
            description: 'Choisir le role 💲 Jeux gratuits',
            value: '1034801139964710912'
        },
    ])
)

module.exports = {
    name: 'roles',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'roles',
    examples: ['roles'],
    description: 'roles',
    async run(client, message, args) {
        await message.channel.send({ content: 'Choisir un ou plusieurs rôles', components: [selectMenu] });
    },
    async runInteraction (client, interaction) {
        await interaction.reply({ content: 'Choisir un ou plusieurs rôles', components: [selectMenu] });
    }
};