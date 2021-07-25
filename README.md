# DISCORD-MULTIPLE-FUNCTIONS



🎈 Instalar el npm 

```
npm i discord-multiple-functions
```

⬆ Actualizar el npm
```
npm i discord-multiple-functions@lastest
```

🧨 Usos disponibles:

[curioso](https://www.npmjs.com/package/discord-multiple-functions#curioso)

### Curioso

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Informacion:

```
Suelta datos curiosos acerca de videojuegos, y otros temas
```

🎊 Modo de uso:


```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { curioso } = require('discord-multiple-functions')

client.on("message", async (message) => {
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'curioso'){
    message.channel.send(await curioso())
}

})

client.login('TOKEN')
```

Si quieres sugerir datos curiosos no dudes en unirte al [discord](https://discord.gg/XKnAs4Xq8G)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROXIMAMENTE MAS FUNCIONES




