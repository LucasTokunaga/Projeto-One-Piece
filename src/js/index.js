const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        // Passo 3:
        const personagemSelecionado = document.querySelector('.selecionado');
        
        personagemSelecionado.classList.remove('selecionado');
        //Passo 2:
        personagem.classList.add('selecionado');
        // OBJETIVO 2 - 
        // Passo 1:
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // Passo 2:
        const idPersonagem = personagem.attributes.id.value;  
        
        imagemPersonagemGrande.src = `./src/imagens/${idPersonagem}.png`;

        // Passo 3:
        const nomePersonagem = document.getElementById('nome-personagem');
        
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Passo 4:
        const descricaoPersonagem = document.getElementById('descricao-personagem');

        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
});