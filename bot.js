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
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();
	


	
	
  try {
    let commandFile = require(`./Command/${command}.js`);
    commandFile.execute(message, args);
	  
  }
	catch (err) {
    console.error(err);
		
	}
});

client.login(token);
