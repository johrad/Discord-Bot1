// Require token file
require('./TOKEN.js');

// Import the discord.js module
'use strict';
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();


// Logging in to discord
client.on('ready', () => {
  console.log('');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.login(TOKEN);

