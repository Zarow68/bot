const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('LANG-FR-VERIF-b-1')
    .setEmoji('<:Verified_Simplified:1034469717240459354>')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('LANG-ES-VERIF-b-2')
    .setEmoji('🇫🇷')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('LANG-ES-VERIF-b-3')
    .setEmoji('🇺🇸')
    .setStyle('PRIMARY'),
)


module.exports = {
    name: 'LANG-ES-VERIF',
    async runInteraction (client, interaction) {
        const Verif = new MessageEmbed()
        .setColor('#008000')
        .setTitle(':flag_es: Captcha')
        .setDescription(`Le role <@&1034410084631064582> a été ajouté à ${interaction.member}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/1034410086191333395/1034523517124882452/8877-verified-simplified.png')
        .setTimestamp()
        await interaction.member.roles.add('1034410084631064582')
        await interaction.reply({ embeds: [Verif], ephemeral: true})
    }
};