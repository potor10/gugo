module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command>',
    description: 'Get help on how to use the bot',
    adminonly: false,

    execute(client, message, args) {
        if (!args[0]) {
            const core = message.client.commands.filter(x => x.category == 'Core').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
                    author: { name: 'Bot Help' },
                    footer: { text: client.config.discord.footerText },
                    fields: [
                        { name: 'General', value: core },
                    ],
                    timestamp: new Date(),
                    description: `Gugo will help.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            let description_text = `${command.description}\nMandatory arguments \`[]\`, optional arguments \`<>\`.`;

            message.channel.send({
                embed: {
                    color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
                    author: { name: args.join(" ").toLowerCase() },
                    footer: { text: client.config.discord.footerText },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: description_text,
                }
            });
        };
    },
};