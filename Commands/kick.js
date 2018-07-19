module.exports = {

	name: 'kick',

	description: 'Kicks a user',

	args: true,
	
	serverOnly: true,
	
	cooldown: 2,
	
	usage: '(user mention)',
	
	argsMessage: 'You didnt tell me who to kick',
	
	execute(message, args) {	
			
   const taggeduser = message.mentions.users.first();
	message.channel.send(`You wanted to kick ${taggeduser}?`);
	

  },

};

