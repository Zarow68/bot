module.exports = {
    name: 'dbconfig',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'dbconfig [key] <value>',
    examples: ['dbconfig', 'dbconfig prefix ?', 'dbconfig prefix'],
    category: 'admin',
    description: 'Configurer les données de la base de données',
    async run(client, message, args, guildSettings) {
        if (!args[0] || !args[0].match(/^(prefix|logChannel|testChannel)$/))

        return message.reply('Merci d\'entrer une clé valide (`prefix`/`logChannel`, `testChannel`)');
        const key = args[0];
        const value = args[1];

            if (args[0] == 'prefix') {
            if (value) {
                await client.updateGuild(message.guild, { prefix: value });
                return message.reply({ content: `Nouvelle Valeur de préfix : ${value}`})
            }
            message.reply({ content: `Valeur de préfix : ${guildSettings.prefix}`})
        } else if (key == 'logChannel') {
            if (value) {
                await client.updateGuild(message.guild, { logChannel: value });
                return message.reply({ content: `Nouvelle Valeur de logChannel : ${value}`})
            }
            message.reply({ content: `Valeur de logChannel : ${guildSettings.logChannel}`})
        } else if (key == 'testChannel') {
            if (value) {
                await client.updateGuild(message.guild, { testChannel: value });
                return message.reply({ content: `Nouvelle Valeur de testChannel : ${value}`})
            }
            message.reply({ content: `Valeur de testChannel : ${guildSettings.testChannel}`})
            

        }
    },
    options: [
        {
            name: 'key',
            description: 'Choisir une clé à modifier ou afficher',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'prefix',
                    value: 'prefix'
                },
                {
                    name: 'logChannel',
                    value: 'logChannel'
                },
                {
                    name: 'testChannel',
                    value: 'testChannel'
                },
            ]
        },
        {
            name: 'value',
            description: 'Choisir la nouvelle valeur pour votre clé',
            type: 'STRING',
        },

    ],
    async runInteraction(client, interaction, guildSettings) {
        const key = interaction.options.getString('key');
        const value = interaction.options.getString('value');

        if (key == "prefix") {
            if (value) {
                await client.updateGuild(interaction.guild, { prefix: value});
                return interaction.reply({ content: `Nouvelle valeur de préfix: ${value}`});
            }
            interaction.reply({ content: `Valeur de préfix: ${guildSettings.prefix}`});
        } else if (key == "logChannel") {
            if (value) {
                await client.updateGuild(interaction.guild, { logChannel: value});
                return interaction.reply({ content: `Nouvelle valeur de logChannel: ${value}`});
            }
            interaction.reply({ content: `Valeur de préfix: ${guildSettings.logChannel}`});
        } else if (key == "testChannel") {
            if (value) {
                await client.updateGuild(interaction.guild, { testChannel: value});
                return interaction.reply({ content: `Nouvelle valeur de testChannel: ${value}`});
            }
            interaction.reply({ content: `Valeur de testChannel: ${guildSettings.testChannel}`});
        }
         
    }
};