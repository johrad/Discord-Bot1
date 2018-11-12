# Work with Python 3.6
#import discord
from discord.ext.commands import Bot
import random

# import sys 

BOT_PREFIX = '!'
# TOKEN = str(sys.argv[1])
TOKEN = "NTExNDczNjQ5ODAzMzI5NTY1.Dsr6CA.yupXBAISp604yWAEXyqvfmGp3SU"

client = Bot(command_prefix=BOT_PREFIX)


@client.command(name='8ball')
async def eight_ball():
    altResponses = [
        "It kinda sounds like you\'re gay",
        "idk man ask ur mom",
        "yeah",
        "no",
        "maybe.....",
        ":thinking:",
        ]
        
    await client.say(random.choice(altResponses))



@client.command(name="golden")
async def golden():
    

    doggos = [
        "https://i.imgur.com/SJxwWFg.jpg",
        "https://i.redd.it/lxv2ydhbkcwz.jpg",
        "https://i.imgur.com/mkhjVVB.gifv",
        "https://i.redd.it/2mt9a52odxa01.jpg",
        "https://i.redd.it/7fwe4z7qeoy01.jpg",
        "dabdabdabmynigga"

    ]

    await client.say("such a good boy:\n{}".format(random.choice(doggos)))
    # toSay = req.get('https://dog.ceo/api/breeds/list/all', data = {"retriever":"golden"})
    # await client.say("Here's a cute doggo:\n {}".format(toSay.url))

print("Bot is online...")
client.run(TOKEN)

# running amination
