const Logger = require('../../utils/Logger');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        let guildCount = await client.guilds.fetch();
        let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
        Logger.client(`- Prêt à être utilisé sur ${usersCount} utilisateurs sur ${guildCount.size}`);

        client.user.setPresence({ activities: [{ name: `VSCODE `, type: 'WATCHING' }], status: 'dnd' });

        //const devGuild = await client.guilds.cache.get('1034410084631064577');
        //devGuild.commands.set(client.commands.map(cmd => cmd));
        client.application.commands.set(client.commands.map(cmd => cmd));
    },
};