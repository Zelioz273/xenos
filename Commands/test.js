
module.exports = {

	name: 'test',

	description: 'Test.',
	
	cooldown: 3,
	
	execute(message) {
			message.channel.send(`hello, ${message.author.username}!`);
	
     },
};