
module.exports = {

	name: 'suggest',

	description: 'Lets you send a suggestion',

	args: true,
	
	serverOnly: true,
	
	cooldown: 3,
	
	usage: '(suggestion)',
	
	argsMessage: 'You didnt give a suggestion.',
	
	execute(message, args) {

			const suggestch = message.guild.channels.find("name", "suggestions");
			suggestch.send(`Suggestion: ${args} by: ${message.author.username}`);
			message.channel.send('Suggestion sent!');
	},

};