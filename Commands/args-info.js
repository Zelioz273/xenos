
module.exports = {

	name: 'args-info',

	description: 'Information about the arguments provided.',

	args: true,

	usage: '(args)',
	
	cooldown: 3,
	
	argsMessage: 'You didnt give any args.',
	
	execute(message, args) {
    message.channel.send(`Arguments: ${args}`);


	},

};