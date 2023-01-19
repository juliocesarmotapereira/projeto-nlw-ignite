type Usuario = {
    idade = number
}

function mostraIdadeDoUsuario(usuario: Usuario) {
    return usuario.idade
}

const usuario = {
    nome: "Júlio",
    idade: 38
}

mostraIdadeDoUsuario(usuario)

const usuario2 = {
    nome: "Júlio",
}

mostraIdadeDoUsuario(usuario2)