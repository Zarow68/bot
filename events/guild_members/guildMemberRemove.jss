const { MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require('canvas')

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client, member) {
        const fetchGuild = await client.getGuild(member.guild);
        const fetchKickLog = await member.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_KICK'
         });


        const embed = new MessageEmbed()
        .setAuthor({name: `${member.user.tag} (${member.id})`, IconURL: member.user.displayAvatarURL() })
        .setColor('#dc143c')
        .setDescription(`● Nom d'utilisateur: ${member.displayName}
        ● Crée le : <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
        ● Rejoint le : <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
        ● Quitté le : <t:${parseInt(Date.now() / 1000)}:f> (<t:${parseInt(Date.now() / 1000)}:R>)`)
        .setTimestamp()
        .setFooter({text: 'L\'utilisateur a quitté !'  });

        const embed1 = new MessageEmbed()
        .setTitle('Membre a quitté !')
        .setDescription('Enrevoir !')
        .setImage("attachment://Welcome.png") //dans l'embed

        const logChannel = client.channels.cache.get(fetchGuild.logChannel);
        logChannel.send({ embeds: [embed] });

        const canvas = Canvas.createCanvas(1024, 500);

        ctx = canvas.getContext("2d");

        const background = await Canvas.loadImage("./events/guild_members/background.jpg")
        ctx.drawImage(background, 0, 0, 1024, 500);

        ctx.font = "72px sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(member.user.tag.toUpperCase(), 512, 410);

        ctx.beginPath();
        ctx.arc(512, 166, 119, 0, Math.PI *2);
        ctx.closePath();
        ctx.clip();

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({
            format: "png",
            size: 1024
        }));

        ctx.drawImage(avatar, 393, 47, 238, 238)
        
        const attachment = new MessageAttachment(canvas.toBuffer(), 'Welcome.png')

        const WelcomeChannel = client.channels.cache.get(fetchGuild.WelcomeChannel)
        WelcomeChannel.send({ embeds: [embed1], files: [attachment]})
    }
};