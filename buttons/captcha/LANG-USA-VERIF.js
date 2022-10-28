const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('CAPTCHA-VERIF-USA')
    .setEmoji('<:Verified_Simplified:1034469717240459354>')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('LANG-FR-VERIF')
    .setEmoji('🇫🇷')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('LANG-FR-VERIF-b-3')
    .setEmoji('🇪🇸')
    .setStyle('PRIMARY'),
)

module.exports = {
    name: 'LANG-USA-VERIF',
    async runInteraction (client, interaction) {
        const captchaUSA = new MessageEmbed()
        .setColor('#0fffff')
        .setTitle(':flag_us: Vérification')
        .setDescription('\n<:Discord_Danger:1034472688242130965> **By clicking on the validation button, you take full responsibility for your acts on the server, even if they are if they are not authorized**\n\n<:blue_role:1034492516176773221> __If you can\'t click on the button, please wait 5/10mins__\n\n<:Verified_Simplified:1034469717240459354> **Click on the button to unlock the server.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/1034410086191333395/1034523517124882452/8877-verified-simplified.png')
        await interaction.reply({ embeds: [captchaUSA], components: [buttons], ephemeral: true})
    }
};