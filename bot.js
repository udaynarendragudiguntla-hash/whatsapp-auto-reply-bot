
import {Client} from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
const client =new Client();
client.on('qr',(qr)=>{
    qrcode.generate(qr,{small:true});
});
client.on('ready',()=>{
    console.log('bot is ready');
});
client.on('message',message=>{
    if(!message.body||typeof message.body!=='string'){
        console.log('invalid or empty message body,skipping');
        return;
    }
    if(message.from.includes("@g.us"))
        return;
    let text=message.body.toLowerCase();
    if(text.includes('hello')){
        message.reply('Hey! Hows it going?');
    }
    else if(text.includes('how are you')){
        message.reply('I am doing great! Thanks for asking  How about you?');
    }
    else if(text.includes('what are you doing')){
        message.reply('Just chilling and learning some cool suff What about you?');
    }
    else if(text.includes('Bye')){
        message.reply('Bye! see you later');
    }
    else if(text.includes('see you')){
        message.reply('see you! Take care');
    }
    else if(text.includes('thanks')){
        message.reply('you are welcome!');
    }
    else if(text.includes('cool')){
        message.reply('Haha Totally!');
    }
    else if(text.includes('good night')){
        message.reply('Good night! sleep well');
    }
    else if(text.includes('good morning')){
        message.reply('Good morning');
    }
    else{
        message.reply('Haha I see... tell me more!')
    }

});
client.initialize();
