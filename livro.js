class livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }
}

let novo_livro = new livro("O mar de monstros", "Rick Riordan", 192)

console.log(novo_livro.titulo + "   " + novo_livro.autor + "   " + novo_livro.paginas)