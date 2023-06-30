const { MessageEmbed, MessageAttachment, GuildMember } = require("discord.js");

const Canvas = require('canvas')

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member, guild, user) {
        const fetchGuild = await client.getGuild(member.guild);
//WELCOMEMESSAGE
        const embed2 = new MessageEmbed()
        .setAuthor({name: `${member.user.tag} (${member.id})`, IconURL: member.user.displayAvatarURL() })
        .setColor('#21ff81')
        .setDescription(`● Nom d'utilisateur: ${member}
        ● Crée le : <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
        ● Rejoint le : <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)`)
        .setTimestamp()
        .setFooter({text: 'L\'utilisateur a rejoint !'});

        const embed1 = new MessageEmbed()
        .setTitle('Membre a rejoint !')
        .setDescription('Bienvenue !')
        .setImage("attachment://Welcome.png") //dans l'embed

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

        const logChannel = client.channels.cache.get(fetchGuild.logChannel)
        logChannel.send({ embeds: [embed2] });

        

    }
};