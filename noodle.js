const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
 	if (message.content === 'theme change' || message.content === 'tc') {
		for (i = 0; i < 25; i++) {
			message.channel.send("Theme change when? ");
		}
	}
});


client.login('NDE3OTEyMzI4NDg3NDM2Mjg4.Xq9CKA.lQguRbS-q7jR-uShs-df13gOHxI');


