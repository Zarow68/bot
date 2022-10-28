const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: 'LANG-USA-VERIF-b-2',
    async runInteraction (client, interaction) {
        const captcha = new MessageEmbed()
        .setColor('#0fffff')
        .setTitle(':flag_us: Vérification')
        .setDescription('\n<:Discord_Danger:1034472688242130965> **En cliquant sur le bouton de validation, vous prenez l\'entiere responsabilité de vos actes sur le serveur, même s\'ils ne sont pas autorisés**\n\n<:blue_role:1034492516176773221> __Si vous ne pouvez pas cliquer sur le bouton, merci d\'attendre 5/10mins__\n\n<:Verified_Simplified:1034469717240459354> **Cliquez sur le bouton pour voir dévérouiller le serveur.**')
        .setThumbnail('https://cdn.discordapp.com/attachments/1034410086191333395/1034523517124882452/8877-verified-simplified.png')
        await interaction.reply({ embeds: [captcha], components: [buttons], ephemeral: true})
        
    }
};