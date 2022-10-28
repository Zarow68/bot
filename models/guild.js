const mongoose = require('mongoose');
const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': '!' },
    logChannel: { 'type': String, 'default': '.' },
    testChannel: { 'type': String, 'default': '.' },
    
});

module.exports = mongoose.model('Guild', guildSchema);