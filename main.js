// Parte 1 introdução ao 'Jquery'

$(document).ready(function(){
    /* console.log(document.querySelector('header button'))
    console.log($('#btn-cancelar')) */

    // Parte 2 manipulando eventos

    // Adicionando eventeListener 'click' para a tag button
    document.querySelector('header button').addEventListener('click', function(){

    })


    // Fazendo 'call-back' dos elementos localizados pelo 'querySelector' acima para o 'Jquery'

    // 1ª forma de adicionar eventos com o 'Jquery' ao JS
    $('header button').click(function(){
        // adicionando duração de 200ms para a animação do 'form'
        $('form').slideDown(200) 
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp(200)
    })
    

    // adicionando o preventDefault para evitar o carregamento da página ao clicar no button 'adicionar'

    // 2ª forma de adicionar eventos com o 'Jquery' ao JS
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-img-nova').val() // Coleta o link da imagem colocado pelo usuario no input
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src='${enderecoDaNovaImagem}' class='img-dimension'>`).appendTo(novoItem) // Utilizando o 'appendTo' para adicionar o elemento 'enderecoDaNovaImagem' ao <li>
        $(`<div class="overlay-img-link">
                <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>`).appendTo(novoItem)
        $(novoItem).appendTo(`ul`)
        $(novoItem).fadeIn(200)
        $('#endereco-img-nova').val('')
    })
})