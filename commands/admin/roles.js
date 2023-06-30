const { MessageActionRow, MessageButton, MessageEmbed} = require("discord.js");

const buttons = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setEmoji('📢')
    .setCustomId('NOTIF')
    .setStyle('PRIMARY'),
    
    new MessageButton()
    .setEmoji('🎮')
    .setCustomId('GAMING')
    .setStyle('PRIMARY'),
    
    new MessageButton()
    .setEmoji('💲')
    .setCustomId('JEUXFREE')
    .setStyle('PRIMARY'),
    
    
)

const embed = new MessageEmbed()
.setTitle('Choisis tes roles pour accéder au salons !')
.setDescription(
    `📢 NOTIF\n🎮Gaming\n💲Jeux gratuits`
)
.setColor('AQUA')
module.exports = {
    name: 'roles',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'button',
    examples: ['button'],
    description: 'button',
    
    async runInteraction (client, interaction, message, components) {
        await interaction.reply({ embeds: [embed], components: [buttons]})
    }
};