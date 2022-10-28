const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'CAPTCHA-VERIF',
    async runInteraction (client, interaction) {
        const Verif = new MessageEmbed()
        .setColor('#008000')
        .setTitle(':flag_fr: Captcha')
        .setDescription(`Le role <@&1034410084631064582> a été ajouté à ${interaction.member}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/1034410086191333395/1034523517124882452/8877-verified-simplified.png')
        .setTimestamp()
        await interaction.member.roles.add('1034410084631064582')
        await interaction.reply({ embeds: [Verif], ephemeral: true})
    }
};