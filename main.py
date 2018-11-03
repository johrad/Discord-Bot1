# Work with Python 3.6
#import discord
from discord.ext.commands import Bot
import random
import requests as req


BOT_PREFIX = ("!")
# https://simplycalc.com/base16-encode.php
TOKEN = '4E54417A4E6A45794D7A51794D5449334E5455344E6A59332E4472347671772E55496356326371484E4477776E786B4A49474459764F776E6A7838'

client = Bot(command_prefix=BOT_PREFIX)


@client.command(name='8ball')
async def eight_ball():
    altResponses = [
        "sounds like you\'re gay",
        "idk man ask ur mom",
        "yeah",
        "no",
        "maybe.....",
        ":thinking:",
        ]
        
    await client.say(random.choice(altResponses))



@client.command(name = "doggo")
async def doggo():
    
    toSay = req.get('https://dog.ceo/api/breeds/list/all', data = {"retriever":"golden"})

    await client.say("Here's a cute doggo:\n {}".format(toSay.url))

print("Bot is online")
client.run(TOKEN)

