// Definição do array carros2024
const carros2024 = [
    {
        nome: 'Ferrari',
        sigla: 'FER',
        velocidadeMaxima: 340,
        potencia: 800,
        consumo: 5.5,
        aceleracao: 2.9,
        preco: 300000,
    },
    {
        nome: 'Lamborghini',
        sigla: 'LAM',
        velocidadeMaxima: 355,
        potencia: 770,
        consumo: 6.2,
        aceleracao: 2.8,
        preco: 330000,
    },
    {
        nome: 'BMW',
        sigla: 'BMW',
        velocidadeMaxima: 200,
        potencia: 500,
        consumo: 7.5,
        aceleracao: 4.0,
        preco: 120000,
    },
    {
        nome: 'Audi',
        sigla: 'AUD',
        velocidadeMaxima: 290,
        potencia: 650,
        consumo: 7.0,
        aceleracao: 3.6,
        preco: 11500,
    },
    {
        nome: 'Honda',
        sigla: 'HON',
        velocidadeMaxima: 220,
        potencia: 200,
        consumo: 12.0,
        aceleracao: 6.5,
        preco: 35000,
    },
    {
        nome: 'Ford',
        sigla: 'FOR',
        velocidadeMaxima: 230,
        potencia: 250,
        consumo: 11.0,
        aceleracao: 6.0,
        preco: 40000,
    },
];

// Exportação das funções
export const getAllCarros = () => carros2024;

export const getCarroBySigla = (sigla) => {
    return carros2024.find(carro => carro.sigla === sigla);
};

export const createCarro = (novoCarro) => {
    carros2024.push(novoCarro);
    return novoCarro;
};

export const updateCarro = (sigla, dadosAtualizados) => {
    const carroIndex = carros2024.findIndex(carro => carro.sigla === sigla);
    if (carroIndex === -1) return null;
    carros2024[carroIndex] = { ...carros2024[carroIndex], ...dadosAtualizados };
    return carros2024[carroIndex];
};

export const deleteCarro = (sigla) => {
    const carroIndex = carros2024.findIndex(carro => carro.sigla === sigla);
    if (carroIndex === -1) return null;
    const [carroRemovido] = carros2024.splice(carroIndex, 1);
    return carroRemovido;
};
