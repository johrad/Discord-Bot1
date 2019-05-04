#! /bin/bash

echo "Getting the bot ready..."

cd ~/Discord-Bot1

# Asking if user wants me to run the bot

read -p "Want me to run the bot for you? (y/N): " ANSWER

case "$ANSWER" in
	[yY])
		echo "Alright, loading bot, hit (N) to exit"
		node bot.js
	;;
	[nN])
		echo "ok, you fucking looser"
	;;
*)
	echo "Enter y/N u dipshit"
	;;

esac

echo "yabadabadoo!!"

