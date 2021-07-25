const { error } = require('../src/error')

function memeimagen(){
    let memes = ['https://cdn.discordapp.com/attachments/848176631859642419/868884703862726706/meme-7.png','https://cdn.discordapp.com/attachments/848176631859642419/868878502005465138/meme-3.jpg','https://cdn.discordapp.com/attachments/848176631859642419/868876499355316274/Pendejojaja.png','https://cdn.discordapp.com/attachments/848176631859642419/868694542138871828/IMG-20210421-WA0000.jpg','https://cdn.discordapp.com/attachments/848176631859642419/868227438050693141/image0.png','https://cdn.discordapp.com/attachments/848176631859642419/868155949116981268/C9-1ZI-XoAI24z3.png','https://cdn.discordapp.com/attachments/848176631859642419/867590290978504704/206211945_3264231953900855_801017179665946086_n.png','https://cdn.discordapp.com/attachments/848176631859642419/867571434742087710/imagen_2021-06-14_180630.png']
    let randomeme  = memes[Math.floor(Math.random()*memes.length)]
    let meme = randomeme
    
    return meme
}

function memevideo(){
    let memesvideos = ['https://cdn.discordapp.com/attachments/848176631859642419/868105111442972703/c288271b94e14373de71b5779c27348d.mp4','https://cdn.discordapp.com/attachments/848176631859642419/868083439033782302/6b7967b1df99c63d7890a4ac928c4739.mp4','https://cdn.discordapp.com/attachments/848176631859642419/867922493262934136/nodigasuwu.mp4','https://cdn.discordapp.com/attachments/848176631859642419/867121153813643294/34015ce3a58934370cd727e8188c86de.mp4','https://cdn.discordapp.com/attachments/848176631859642419/868955295160864878/VID-20210715-WA0023_1.mp4']
    let randovideo  = memes[Math.floor(Math.random()*memes.length)]
    let memevideos = randovideo
    
    return memevideos
}

function momasos(){
    let mome = ['https://cdn.discordapp.com/attachments/848176631859642419/868884703862726706/meme-7.png','https://cdn.discordapp.com/attachments/848176631859642419/868878502005465138/meme-3.jpg','https://cdn.discordapp.com/attachments/848176631859642419/868876499355316274/Pendejojaja.png','https://cdn.discordapp.com/attachments/848176631859642419/868694542138871828/IMG-20210421-WA0000.jpg','https://cdn.discordapp.com/attachments/848176631859642419/868227438050693141/image0.png','https://cdn.discordapp.com/attachments/848176631859642419/868155949116981268/C9-1ZI-XoAI24z3.png','https://cdn.discordapp.com/attachments/848176631859642419/867590290978504704/206211945_3264231953900855_801017179665946086_n.png','https://cdn.discordapp.com/attachments/848176631859642419/867571434742087710/imagen_2021-06-14_180630.png','https://cdn.discordapp.com/attachments/848176631859642419/868105111442972703/c288271b94e14373de71b5779c27348d.mp4','https://cdn.discordapp.com/attachments/848176631859642419/868083439033782302/6b7967b1df99c63d7890a4ac928c4739.mp4','https://cdn.discordapp.com/attachments/848176631859642419/867922493262934136/nodigasuwu.mp4','https://cdn.discordapp.com/attachments/848176631859642419/867121153813643294/34015ce3a58934370cd727e8188c86de.mp4','https://cdn.discordapp.com/attachments/848176631859642419/868955295160864878/VID-20210715-WA0023_1.mp4']
    let randomomaso  = mome[Math.floor(Math.random()*mome.length)]
    let memaso = randomomaso
    
    return memaso
}

module.exports = {
    memevideo,
    memeimagen,
    momasos
}