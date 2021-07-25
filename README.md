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

• [Curioso](https://www.npmjs.com/package/discord-multiple-functions#curioso)

• [Memes](https://www.npmjs.com/package/discord-multiple-functions#memes)


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


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Memes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Informacion:

```
Sulta memes random en forma de video, imagen, o las dos juntas
```

🎮 Funciones:

|Funcion    |       Uso        |            Explicacion             |
|-----------|      ------------|            ------------------------------|
| memeimagen|      memeimagen()|            Suelta un meme en imagen      | 
| memevideo |      memevideo() |            Suelta un meme en video       |
| momasos   |      momasos()   |            Suelta memes de los dos tipos |



🎊 Modos de uso:
 
 Memes imagenes:

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { memevideo } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'meme'){
    
    let meme = memeimagen()
 
    message.channel.send(meme)    
})

client.login('TOKEN')
```

Memes videos

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { memeimagen } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'meme'){
    
    let meme = memevideo()
 
    message.channel.send(meme)    
})

client.login('TOKEN')
```

Memes de los tipos

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { momasos } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'meme'){
    
    let meme = momasos()
 
    message.channel.send(meme)    
})

client.login('TOKEN')
```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Si nesecitas ayuda o quieres sugerir algo unete a nuestro [discord](https://discord.gg/XKnAs4Xq8G)
