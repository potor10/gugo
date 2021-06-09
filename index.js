/**
 * @description Gugo Bot
 * @author Potor10 
 * @summary A Discord Bot For Gugo
 */

//const { Client, Attachment, MessageEmbed } = require("discord.js");

const discord = require('discord.js');
const fs = require('fs');

const client = new discord.Client({disableMentions: 'everyone'});

client.config = require('./config/config');
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`LOG: Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`LOG: Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};


// Catch the AUTISM
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

// Log In
console.log("LOG: Logging In To GUGO Bot");
client.login("BOT_TOKEN");



