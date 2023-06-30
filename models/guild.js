const mongoose = require('mongoose');
const guildSchema = mongoose.Schema({
    id: String,
    logChannel: { 'type': String, 'default': '.' },
    CaptchaChannel: { 'type': String, 'default': '.' },
    WelcomeChannel: { 'type': String, 'default': '.' },
});

module.exports = mongoose.model('Guild', guildSchema);