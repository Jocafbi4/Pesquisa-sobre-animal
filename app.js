function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma sting sem nada
    if (campoPesquisa =="") {
        section.innerHTML = "<p>Nenhum animal correspondente foi encontrado. Por favor digite o nome do animal.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.titulo.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // Se titulo icludes campoPesquisa
        if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) ||tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }
    if(!resultados) {
        resultados = "<p>Nenhum animal correspondente foi encontrado.</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}