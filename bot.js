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

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"

  // ADD "IF USER = !BOT, DO OO SHIT"

  if (message.author.bot) return; // cheks if user if bot, if bot, stops and goes back

  if (["fortnite", "cancer", "floss"].includes(message.content)) {
    // Send "pong" to the same channel
    message.channel.send('https://gfycat.com/MeagerBrokenJackrabbit');
  }

  if (["simon", "Simon"].includes(message.content)) {
    // Send "pong" to the same channel
    message.channel.send({
      files: ['./benis.mp3']
    });
  }

  if (["selfie", "Selfie"].includes(message.content)) {
    // Send "pong" to the same channel
    message.channel.send({
      files: ['./img.png']
    });
    console.log(message.author.id, "told me to send a selfie UwU");
  }

  if (message.isMentioned(client.users.get('511473649803329565'))) {
    console.log("somebody pinged me!, the user was", message.author.id);
    console.log("Their nickname was", message.author.nicknam, "And they said:");
    console.log('\x1b[31m%s\x1b[0m', message.content, '\x1b[33m"\nSaved to the log (that doesnt exist yet lol)\n"\x1b[0m'); // "\x1b[31m" sets color 

  }

  if (message.content.startsWith(config.prefix + "help")) { //prefix is imported from config.json
    message.channel.send("you fool, I dont help people like you");
  }

  if (["ping", "pong", ":ping_pong:"].includes(message.content.startsWith)) {
    message.channel.send(":ping_pong:");
  }
});

console.log("No errors yet, procceding...");
client.login(config.token);