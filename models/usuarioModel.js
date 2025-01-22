// Importando o módulo brcypt para criptografar senhas.
import brcypt from 'brcypt';

// Inicializando uma lista de usuários (Em um cenário real, isso viria de um BD).
let usuario = [
    // Exemplo de um usuário com senha criptografada.
    {
        id: 1, // ID do usuário.
        nome: 'Matheus Senna',
        email: 'senna9961@gmail.com',
        senha: brcypt.hashSync('Senha1234', 10)
        // Senha gerada com o brcypt (O segundo parametro é o número de saltos para gerar o Hash).
    },
];

// Função para obter todos os usuários.
export const getAllUsuarios = () => usuarios;

// Função para encontrar  um usuário pelo e-mail.
export const getAllByEmail = (email) => {
    // Retorna o usuário.
    return usuarios.find((usuario) => usuario.email === email);
};

// Função para criar um novo usuário.
export const createUsuario = (novoUsuario) => {
    // Gera um novo ID para o usuário (Simualando um banco de dados com incremento).
    const novoId = usuario.length + 1;

    // Cria o novo usuário com dados fornecidos e senha criptografada.
     const usuario = {
        ...novoUsuario, // Copia os dados do novo usuario.
        id: novoId, // Adiciona o ID gerado.
        senha: brcypt.hashSync(novoUsuario.senha, 10), // Criptografando a senha antes de armazenar
    };

    // Adiciona o novo usuário a lista de usuários.
    usuarios.push(usuario);

    // Retorna o novo usuário criado.
    return usuario;
};

// Função para atualizar os dados de um usuário existente.
export const updateUsuario = (id, dadosAtualizados) => {
    // Procura o índice do usuário com o ID fornecido.
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    // Se o usuário não for encontrado retorna Null.
    if (usuarioIndex === -1) return null;

    // Atualiza os dados do usuário no índice encontrado (Combinando Dados antigos com os novos).
    usuario[usuarioIndex] = { ...usuario[usuarioIndex], ...dadosAtualizados };

    // Retorna o usuário atualizado.
    return usuario[usuarioIndex];
};

// Função para excluir um usuário pelo ID.
export const deleteUsuario = (id) => {
    // Procura o índice do usuário a ser removido.
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    // Se o usuário não for encontrado, retorna Null.
    if (usuarioIndex === -1) return null;

    // Remove o usuário da lista (usando o método splice) e retorna o usuário removido.
    const [usuarioRemovido] = usuarios.splice(usuarioIndex, 1);

    // Retorna o usuário que foi removido.
    return usuarioRemovido;
};