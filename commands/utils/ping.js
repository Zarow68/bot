const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'ping',
    examples: ['ping'],
    description: 'La commande ping verifie la latence du bot sur son serveur Discord !',
    async run(client, message, args) {
        const tryPong = await message.channel.send('On essaye de pong... un instant !')
        setTimeout(() => {
            tryPong.edit({ content: ' ', embeds: [embed] });
        }, 1000);

        


    const embed = new MessageEmbed()
    .setTitle('🏓Pong !')
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(
        { name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
        { name: 'Latence BOT', value: `\`\`\`${tryPong.createdTimestamp - message.createdTimestamp}ms\`\`\``, inline: true}
    )
    .setTimestamp()
    .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
    },
    async runInteraction (client, interaction) {
        const tryPong = await interaction.reply({ content: 'On essaye de pong... un instant !', fetchReply: true});
        setTimeout(() => {
            interaction.editReply({ content: ' ',embeds: [embed] });
        }, 1000);

    const embed = new MessageEmbed()
    .setTitle('🏓Pong !')
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(
        { name: 'Latence API', value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true},
        { name: 'Latence BOT', value: `\`\`\`${tryPong.createdTimestamp - interaction.createdTimestamp}ms\`\`\``, inline: true}
    )
    .setTimestamp()
    .setFooter({ text: interaction.user.username,
         iconURL: interaction.user.displayAvatarURL(),
        });

        
    }
};