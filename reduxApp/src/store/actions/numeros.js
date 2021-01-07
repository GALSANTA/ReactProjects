function alterarNumeroMinimo(novoNumero) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}

function alterarNumeroMaximo(novoNumero) {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}

export {
    alterarNumeroMinimo,
    alterarNumeroMaximo
}