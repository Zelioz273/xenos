
module.exports = {

	name: 'whois',

	description: 'Gives info on a user.',

	args: true,
	
	serverOnly: true,
	
	cooldown: 3,
	
	usage: '(user mention)',
	
	argsMessage: 'You state anyone to give infomation on.',
	
	execute(message, args) {
			const taggeduser = message.mentions.users.first();
			
			message.channel.send(`${taggeduser.username}:`);
	},

};