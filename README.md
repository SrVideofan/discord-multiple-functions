# discord-multiple-functions


๐ Instalar el paquete

```
npm i discord-multiple-functions
```

โฌ Actualizar el npm
```
npm i discord-multiple-functions@latest
```

๐งจ Usos disponibles:

โข [Curioso](https://www.npmjs.com/package/discord-multiple-functions#curioso)

โข [Memes](https://www.npmjs.com/package/discord-multiple-functions#memes)

โข [Interacciones](https://www.npmjs.com/package/discord-multiple-functions#interacciones)

โข [Caracteres](https://www.npmjs.com/package/discord-multiple-functions#caracteres)

โข [Deberia?](https://www.npmjs.com/package/discord-multiple-functions#deberia)

### Curioso

โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ

โจ Informacion:

```
Suelta datos curiosos acerca de videojuegos, y otros temas
```

๐ Modo de uso:


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


โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ

### Memes

โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ

โจ Informacion:

```
Suelta memes random en forma de video, imagen, o las dos juntas
```

๐ฎ Funciones:

|Funcion    |       Uso        |            Explicacion             |
|-----------|      ------------|            ------------------------------|
| memeimagen|      memeimagen()|            Suelta un meme en imagen      | 
| memevideo |      memevideo() |            Suelta un meme en video       |
| momasos   |      momasos()   |            Suelta memes de los dos tipos |



๐ Modos de uso:
 
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
} 
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
}  
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
}
})

client.login('TOKEN')
```


โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ

### Interacciones

โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ

โจ Informacion:

```
Usalo para hacer los comandos de kiss y hug
```

๐ฎ Funciones:

|Funcion    |       Uso        |            Explicacion                                             |
|-----------|      ------------|            --------------------------------------------------------|
| kiss      |      kiss()      |            Suelta un gif random de besos                           | 
| hug       |      hug()       |            Suelta un gif random de abrazos                         |
| kisstext  |      kisstext()  |            Suelta un texto random relacionado con los besos        |
| hugtext   |      hugtext()   |            Suelta un texto random relacionado con los abrazos      |



๐ Modos de uso:
 
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
}

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
}

    
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

}
    
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

}
    
})

client.login('TOKEN')
```


โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ


### Caracteres

โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ

โจ Informacion:

```
Saca un caracter o un codigo de digitos random 
```

๐ฎ Funciones:

|Funcion    |       Uso        |            Explicacion                   |
|-----------|      ------------|            ------------------------------|
| character |      await character()|            Saca un codigo random    | 


๐ Modo de uso:
 
 

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
}
})

client.login('TOKEN')
```

๐ Nota:

```
En el parentesis de await character() puedes poner el numero que tu quieras no nesesariamente el que yo puse
```

โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ

### Deberia

โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ

โจ Informacion:

```
La npm toma decisiones por ti! (obiamente de broma no te la creas xd)(tambien sirve para hacer un 8ball xd)
```

๐ฎ Funciones:

|Funcion    |       Uso        |            Explicacion                   |
|-----------|      ------------|        ----------------------------------|
| question |      question()   |        Te dara una respuesta a lo random | 


๐ Modo de uso:
 
 

```js
const Discord = require('discord.js')
const client = new Discord.Client();
const { question } = require('discord-multiple-functions')

client.on("message", async (message) => {
    let prefix = '/'
    if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix).trim().split(/ +/g);
const command = args.shift();

if(command === 'random'){
    
    const peo = args.join(' ')
    if(!peo)return message.channel.send('Nesecitas poner una pregunta!')
 
    message.channel.send(question())   
} 
})

client.login('TOKEN')
```


โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ


Si nesecitas ayuda o quieres sugerir algo unete a nuestro [discord](https://discord.gg/XKnAs4Xq8G)
