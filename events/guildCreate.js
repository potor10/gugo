module.exports = async (client) => {
    console.log(`LOG: New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);

    client.user.setActivity(`Gugo Is Currently Terrorizing ${client.guilds.cache.size} Servers`);
};