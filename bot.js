 const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const { prefix, token } = require("./config.json");
client.commands = new Discord.Collection();


// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
 if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();
	
  if (!client.commands.has(commandName)) return;
	client.commands.set(command.name, command);
	const command = client.commands.get(commandName);
	
	 if (command.args && !args.length) {
     let reply = `${command.argsMessage}`;

        if (command.usage) {
           reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
		
        return message.channel.send(reply);
    }

	
	
  try {
    let commandFile = require(`./Commands/${command}.js`);
    commandFile.execute(message, args);
	  
  }
	catch (err) {
    console.error(err);
	}
});

client.login(token);
