# discord-multiple-functions


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
[Bola 8](https://www.npmjs.com/package/discord-multiple-functions#bola8)

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
    let prefix = '/'
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


### Bola 8

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Informacion:

```
El bot responde a tus preguntas o puedes usar la opcion de solo las respuestas y poner a tu gusto como respondera
```

🎊 Modo de uso:

Funcion 8 ball 

```js

const Discord = require('discord.js')
const client = new Discord.Client();
const { bola8 } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === '8ball'){
    message.channel.send(await bola8())
}

})

client.login('TOKEN')

```

Funcion solo respuestas

```js

const Discord = require('discord.js')
const client = new Discord.Client();
const { anser } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === '8ball'){
    let respuestas = await anser;

    message.channel.send(`Mi respuesta a tu pregunta es ${respuestas}`)
}

})

client.login('TOKEN')

```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━