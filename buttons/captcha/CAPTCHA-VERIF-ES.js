const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'CAPTCHA-VERIF-ES',
    async runInteraction (client, interaction) {
        const Verif = new MessageEmbed()
        .setColor('#008000')
        .setTitle(':flag_es: Captcha')
        .setDescription(`El rol <@&1034410084631064582> ha sido añadido a ${interaction.member}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/1034410086191333395/1034523517124882452/8877-verified-simplified.png')
        .setTimestamp()
        await interaction.member.roles.add('1034410084631064582')
        await interaction.reply({ embeds: [Verif], ephemeral: true})
    }
};