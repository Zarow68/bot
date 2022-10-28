const { MessageEmbed, Modal, MessageActionRow, TextInputComponent } = require("discord.js");

module.exports = {
    name: 'embed',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'embed',
    examples: ['embed'],
    description: 'embed',
    async run(interaction) {
        const modal = new Modal()
        .setTitle('Create Embed')
        .setCustomId('embed')
        .addComponents(
            new MessageActionRow({
                components: [
                    new TextInputComponent()
                    .setCustomId('title')
                    .setLabel('What should be the title ?')
                    .setPlaceholder('chessy title of the embed (optional)')
                    .setStyle('SHORT')
                ]
            }),
            new MessageActionRow({
                components: [
                    new TextInputComponent()
                    .setCustomId('description')
                    .setLabel('What should be the description ?')
                    .setPlaceholder('interesting description for the embed (optional)')
                    .setStyle('PARAGRAPH')
                ]
            }),
            
            
        )

        return interaction.showModal(modal)
    },
    async runInteraction (client, interaction) {
        const modal = new Modal()
        .setTitle('Create Embed')
        .setCustomId('embed')
        .addComponents(
            new MessageActionRow({
                components: [
                    new TextInputComponent()
                    .setCustomId('title')
                    .setLabel('What should be the title ?')
                    .setPlaceholder('chessy title of the embed (optional)')
                    .setStyle('SHORT')
                ]
            }),
            new MessageActionRow({
                components: [
                    new TextInputComponent()
                    .setCustomId('description')
                    .setLabel('What should be the description ?')
                    .setPlaceholder('interesting description for the embed (optional)')
                    .setStyle('PARAGRAPH')
                ]
            }),
            
            
        )

        return interaction.showModal(modal)
        
    }
};