// DOCUMENTATION FOR discord.js = https://discord.js.org/#/docs/main/stable/general/welcome 

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


// MAKE OOP !!!!!!

// THIS IS NOW A REMINDER BOT!!!!!!!




// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"

  // ADD "IF USER = !BOT, DO OO SHIT"

  if (["fortnite", "cancer", "floss"].includes(message.content)) {
    // Send "pong" to the same channel
    message.channel.send('https://gfycat.com/MeagerBrokenJackrabbit');
  }

  if (message.content.startsWith(config.prefix + "help")) { //prefix is imported from config.json
    message.channel.send("you fool, I dont help people like you");
  }

  if (["ping", "pong", ":ping_pong:"].includes(message.content.startsWith)) {
    message.channel.send(":ping_pong:");
  }
});

client.login(config.token);