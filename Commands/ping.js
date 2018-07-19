module.exports = {
	
    name: 'ping',
	
    description: 'Ping!',
	
	cooldown: 3,
	
    execute(message) {
		
        message.channel.send('Pong.');
		
    },
};