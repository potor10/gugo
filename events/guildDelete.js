module.exports = async (client) => {
    console.log(`LOG: I have been removed from: ${guild.name} (id: ${guild.id})`);

    client.user.setActivity(`Gugo Is Currently Terrorizing ${client.guilds.cache.size} Servers`);
};