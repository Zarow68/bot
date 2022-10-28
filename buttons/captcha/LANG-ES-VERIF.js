const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('CAPTCHA-VERIF-ES')
    .setEmoji('<:Verified_Simplified:1034469717240459354>')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('LANG-FR-VERIF-b-2')
    .setEmoji('🇫🇷')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('LANG-US-VERIF')
    .setEmoji('🇺🇸')
    .setStyle('PRIMARY'),
)


module.exports = {
    name: 'LANG-ES-VERIF',
    async runInteraction (client, interaction) {
        const captchaES = new MessageEmbed()
        .setColor('#0fffff')
        .setTitle(':flag_es: Vérification')
        .setDescription('\n<:Discord_Danger:1034472688242130965> **Al hacer clic en el botón de validación, usted tomar toda la responsabilidad de sus actúa en el servidor, incluso si no están autorizados**\n\n<:blue_role:1034492516176773221> __Si no puede hacer clic en el botón, por favor, espere 5/10 minutos__\n\n<:Verified_Simplified:1034469717240459354> **Haga clic en el botón para desbloquear el servidor.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/1034410086191333395/1034523517124882452/8877-verified-simplified.png')
        await interaction.reply({ embeds: [captchaES], components: [buttons], ephemeral: true})
    }
};