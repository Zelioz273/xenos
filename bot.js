 const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const { prefix, token } = require("./config.json");
client.commands = new Discord.Collection();
const commandFile = require(`./Commands/${file}`);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

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
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

 const command = client.commands.get(commandName);
 
 if (command.serverOnly && message.channel.type !== 'text') {
    return message.reply('I can\'t execute that command inside DMs!');
}
  if (command.args && !args.length) {
     let reply = `${command.argsMessage}`;

        if (command.usage) {
           reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
		
        return message.channel.send(reply);
    }
	
	
  try {
    
    commandFile.execute(message, args);
	  
  }
	catch (err) {
    console.error(err);
message.reply('There was an error trying to execute that command!');
	}
});

client.login(token);
