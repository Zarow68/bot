const { promisify } = require('util');
const { glob } = require('glob');
const Pglob = promisify(glob);
const Logger = require('../Logger');

module.exports = async (client) => {
    (await Pglob(`${process.cwd()}/buttons/*/*.js`)).map(async (btnFile) => {
        const btn = require(btnFile);
        if (!btn.name) return Logger.warn(`Bouton non fonctionnel: ajouter un nom à votre bouton ↓\nFichier -> ${btnFile}`);
        client.buttons.set(btn.name, btn);
    });
};