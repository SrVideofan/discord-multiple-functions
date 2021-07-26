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

• [Interacciones](https://www.npmjs.com/package/discord-multiple-functions#interacciones)

• [Caracteres](https://www.npmjs.com/package/discord-multiple-functions#caracteres)

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
 
 ### Memes imagenes:

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

### Memes videos

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

### Memes de dos los tipos

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

### Interacciones

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Informacion:

```
Usalo para hacer los comandos de kiss y hug
```

🎮 Funciones:

|Funcion    |       Uso        |            Explicacion                                             |
|-----------|      ------------|            --------------------------------------------------------|
| kiss      |      kiss()      |            Suelta un gif random de besos                           | 
| hug       |      hug()       |            Suelta un gif random de abrazos                         |
| kisstext  |      kisstext()  |            Suelta un texto random relacionado con los besos        |
| hugtext   |      hugtext()   |            Suelta un texto random relacionado con los abrazos      |



🎊 Modos de uso:
 
 ### Kiss:

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { kiss } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'kiss'){

    let user = message.mentions.users.first()
    if(!user)return message.channel.send('Debes mencionar a alguien!')
    
    const embed = new Discord.MessageEmbed()  
    .setTitle(`${message.author.tag}  le ha dado un beso a ${user.tag}`)
    .setImage(kiss())
    .setColor('RANDOM')

    message.channel.send(embed)


})

client.login('TOKEN')
```

### Hug

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { hug } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'hug'){

    let user = message.mentions.users.first()
    if(!user)return message.channel.send('Debes mencionar a alguien!')
    
    const embed = new Discord.MessageEmbed()  
    .setTitle(`${message.author.tag}  le ha dado un abrazo a ${user.tag}`)
    .setImage(hug())
    .setColor('RANDOM')

        message.channel.send(embed)


    
})

client.login('TOKEN')
```

### Kiss text

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { kisstext, kiss } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'kiss'){

    let user = message.mentions.users.first()
    if(!user)return message.channel.send('Debes mencionar a alguien!')
    
    const embed = new Discord.MessageEmbed()  
    .setTitle(`${message.author.tag} ${kisstext()} ${user.tag}`)
    .setImage(kiss())
    .setColor('RANDOM')

        message.channel.send(embed)


    
})

client.login('TOKEN')
```

### Hug Text

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { hug, hugtext } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'hug'){

    let user = message.mentions.users.first()
    if(!user)return message.channel.send('Debes mencionar a alguien!')
    
    const embed = new Discord.MessageEmbed()  
    .setTitle(`${message.author.tag}  ${hugtext()} ${user.tag}`)
    .setImage(hug())
    .setColor('RANDOM')

        message.channel.send(embed)


    
})

client.login('TOKEN')
```


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### Caracteres

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Informacion:

```
Saca un caracter o un codigo de digitos random 
```

🎮 Funciones:

|Funcion    |       Uso        |            Explicacion                   |
|-----------|      ------------|            ------------------------------|
| character |      await character()|            Saca un codigo random    | 


🎊 Modo de uso:
 
 

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { character } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'random'){
    
    let random = await character(6)
 
    message.channel.send(random)    
})

client.login('TOKEN')
```

📙 Nota:

```
En el parentesis de await character() puedes poner el numero que tu quieras no nesesariamente el que yo puse
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Si nesecitas ayuda o quieres sugerir algo unete a nuestro [discord](https://discord.gg/XKnAs4Xq8G)