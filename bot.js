// Require config file
const config = require('./config.json');

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// Logging in to discord
client.on('ready', () => {
  console.log('');
});


// ################ THE REAL MEAT ################

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (["fortnite", "cancer", "floss"].includes(message.content)) {
    // Send "pong" to the same channel
    message.channel.send('https://gfycat.com/MeagerBrokenJackrabbit');
  }

  if (message.content.startsWith(config.prefix + "help")){ //prefix is imported from config.json
    message.channel.send("you fool, I dont help people like you");
  }
  
});

client.login(config.token);


