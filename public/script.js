const button= document.getElementById('enviar')
const caixaMensagem= document.getElementById('texto')
const chat= document.getElementById('mensagens')

const socket= io() //conexao do socket.io com o back para informar os dados

button.addEventListener('click', ()=>{
   if(caixaMensagem.value !== ""){ //quando o campo estiver preenchido 

    //emit pro socket/back informando nova mensagem com o texto enviado
     socket.emit('Nova mensagem', caixaMensagem.value) 
     caixaMensagem.value= "" //campo do input volta a ficar vazio
   }

})

socket.addEventListener('Nova mensagem', (msg)=>{
    const elementoMsg=document.createElement('li') //cria o elemento <li></li>
    elementoMsg.textContent=msg //coloca dentro da lista a msg enviada
    elementoMsg.classList.add('mensagem')
    chat.appendChild(elementoMsg) //appendchild recebe o elemento filho, <div> 
                                                                      //<li></li> 
                                                                    //</div>
})