module.exports = {
    name: 'config',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'config [key] <value>',
    examples: ['config', 'config prefix ?', 'config prefix'],
    category: 'admin',
    description: 'Configurer les données de la base de données',
    
    options: [
        {
            name: 'key',
            description: 'Choisir une clé à modifier ou afficher',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'logChannel',
                    value: 'logChannel'
                },

                {
                    name: 'WelcomeChannel',
                    value: 'WelcomeChannel'
                },
            ]
        },
        {
            name: 'value',
            description: 'Choisir la nouvelle valeur pour votre clée',
            type: 'STRING',
        },

    ],
    async runInteraction(client, interaction, guildSettings) {
        const key = interaction.options.getString('key');
        const value = interaction.options.getString('value');

        if (key == "LogChannel") {
            interaction.reply({ content: `Valeur de préfix: ${guildSettings.logChannel}`});
        } else if (key == "logChannel") {
            if (value) {
                await client.updateGuild(interaction.guild, { logChannel: value});
                return interaction.reply({ content: `Nouvelle valeur de logChannel: ${value}`, ephemeral: true});
            }
            interaction.reply({ content: `Valeur de WelcomeChannel: <#${guildSettings.WelcomeChannel}>`});
        } else if (key == "WelcomeChannel") {
            if (value) {
                await client.updateGuild(interaction.guild, { WelcomeChannel: value});
                return interaction.reply({ content: `Nouvelle valeur de WelcomeChannel: ${value}`, ephemeral: true});
            }
        }
        
         
    }
};