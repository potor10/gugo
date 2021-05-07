module.exports = async (client) => {
    console.log(`LOG: Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setActivity(`Gugo Is Currently Terrorizing ${client.guilds.cache.size} Servers`);
};