const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands'); 

const contextDescription = {
    userinfo: 'Renvoie des information sur l\'utilisateur'
}
module.exports = {
    name: 'help',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'help <command>',
    examples: ['help', 'help ping', 'help poll'],
    description: 'La commande aide envoie la liste de commande du bot !',
    
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
            const noArgsEmbed = new MessageEmbed()
            .setColor('#6e4aff')
            .addFields({ name: 'Liste des commandes', value: `Une liste de toutes les catégories disponibles et leurs commandes. \nPour plus d\'informations sur une commande, taper \`/help <command>\``})

            for (const category of commandFolder) {
                noArgsEmbed.addField(
                    `+ ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                );
            }

            return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true});
        }

        const cmd = client.commands.get(cmdName);
        if (!cmd) return interaction.reply({ content: 'cette commande n\'existe pas ! ', ephemeral: true})

        return interaction.reply({ content: `
\`\`\`makefile
[Help: Commande => ${cmd.name}] ${cmd.ownerOnly ? '/!\\ Pour les admins du bot uniquements' : ''}

${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

Utilisation : ${prefix}${cmd.usage}
Exemples : ${prefix}${cmd.examples.join(` | ${prefix}`)}
Permissions : ${cmd.permissions.join(', ')}

---

${prefix} = prefix utiliser pour le bot (/ commands sont aussi disponibles)
{} = sous -commande(s) disponible(s) | [] = option(s) obligatoire(s) | <> = option(s) optionnel(s)
Ne pas inclure ces caractères -> {}, [] et <> dans vos commandes.
\`\`\``, ephemeral: true})
    }
};