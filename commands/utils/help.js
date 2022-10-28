const { MessageEmbed } = require('discord.js');
const { readdirSync} = require('fs');
const commandFolder = readdirSync('./commands');

const contextDescription = {
    userinfo: 'Renvoie des informations sur l\'utilisateur'
}

module.exports = {
    name: 'help',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'help <command>',
    examples: ['ping', 'help ping', 'help poll'],
    description: 'La commande help envoie la liste de commande du bot !',
    async run(client, message, args, guildSettings) {
        const prefix = guildSettings.prefix;
        if (!args.length) {
            const NoArgsEmbed = new MessageEmbed()
            .setColor('#6e4aff')
            .addField('Liste des commandes', `Une liste de toutes les catégories disponible et leurs commandes.\nPour plus d'informations sur une commande, taper\`${prefix}help <command>\``)

            for (const category of commandFolder) {
                NoArgsEmbed.addField(
                    `● ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase() )}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }

            return message.channel.send({ embeds: [NoArgsEmbed]})
        }

        const cmd = client.commands.get(args[0]);
        if (!cmd) return message.reply('cette commande n\'existe pas !');

        const Commande = new MessageEmbed()
        .setTitle(`Commande ${cmd.name}`)
        .setColor('#00FFFF')
        .setDescription(`${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}`)
        .addFields(
            { name: 'Catégorie', value: `\`${cmd.category}\``},
            { name: 'Utilisation', value: `\`${prefix}${cmd.usage}\``},
            { name: 'Exemples', value: `\`${prefix}${cmd.examples.join(` | ${prefix}`)}\``},
            { name: 'Permissions requises', value: `\`${cmd.permissions.join(', ')}\``}
        )
        .setFooter({ text: `Prefix : ${prefix}`})
        


        message.channel.send({ embeds: [Commande],ephemeral: true });

    },
    options: [
        {
            name: 'command',
            description: 'Taper le nom de votre commande',
            type: 'STRING',
            required: false,
        }
    ],
    async runInteraction(client, interaction, guildSettings) {
        const prefix = guildSettings.prefix;
        const cmdName = interaction.options.getString('command');

        if (!cmdName) {
            const NoArgsEmbed = new MessageEmbed()
            .setColor('#6e4aff')
            .addField('Liste des commandes', `Une liste de toutes les catégories disponible et leurs commandes.\nPour plus d'informations sur une commande, taper\`${prefix}help <command>\``)

            for (const category of commandFolder) {
                NoArgsEmbed.addField(
                    `● ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase() )}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }

            return interaction.reply({ embeds: [NoArgsEmbed], ephemeral: true})
        }

        const cmd = client.commands.get(cmdName);
        if (!cmd) return interaction.reply({ content: 'cette commande ,\'existe pas !', ephemeral: true});

        const SlashCommande = new MessageEmbed()
        .setTitle(`Commande -> ${cmd.name}  ${cmd.ownerOnly ? '⚠️ Pour les admins du bot uniquement ⚠️': ''}`)
        .setColor('#00FFFF')
        .setDescription(`${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}`)
        .addFields(
            { name: 'Catégorie', value: `\`${cmd.category}\``},
            { name: 'Utilisation', value: `\`${prefix}${cmd.usage}\``},
            { name: 'Exemples', value: `\`${prefix}${cmd.examples.join(` | ${prefix}`)}\``},
            { name: 'Permissions requises', value: `\`${cmd.permissions.join(', ')}\``}
        )
        .setFooter({ text: `Prefix : ${prefix}`})


        interaction.reply({ embeds: [SlashCommande],ephemeral: true });
    }
};