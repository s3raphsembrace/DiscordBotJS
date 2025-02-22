module.exports = (Discord, client) => {
    console.log('Bot online!!!');   
    client.user.setPresence({
        status: "idle"
    });
    client.user.setActivity('s/help', { type: 'PLAYING' });
};
