/**
 * Cifra - Palavras Divididas
 * As palavras da mensagem são divididas em grupos de tamanho personalizável (por defeito 4 letras, ou entre 2 e 8 letras).
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

function parseGroupSize(val) {
    let parsed = parseInt(val, 10);
    if (isNaN(parsed) || parsed < 2) parsed = 4;
    if (parsed > 10) parsed = 10;
    return parsed;
}

export const palavrasDivididasCipher = {
    id: 'palavras-divididas',
    name: 'Palavras Divididas',
    description: 'As palavras da mensagem são reunidas e divididas em grupos de tamanho fixo (por exemplo, de 4 em 4 letras ou de 2 a 8 letras), dificultando a identificação imediata das palavras.',
    example: 'Tamanho do Grupo: 4\nEntrada: "SAIR DO CAMPO AS NOVE HORAS E PROCURAR O CHEFE"\nSaída: "SAIR DOCA MPOA SNOV EHOR ASEP ROCU RARO CHEF E"',
    
    hasExtraFields: true,
    extraFields: [
        {
            id: 'groupSize',
            label: 'Tamanho dos Grupos de Letras:',
            type: 'number',
            defaultValue: 4,
            min: 2,
            max: 10,
            placeholder: 'Ex: 4'
        }
    ],

    encode(text, options = {}) {
        if (!text) return '';
        const groupSize = parseGroupSize(options.groupSize);
        const normalized = normalizeText(text);
        const chars = normalized.replace(/\s+/g, '');

        if (chars.length === 0) return '';

        const groups = [];
        for (let i = 0; i < chars.length; i += groupSize) {
            groups.push(chars.slice(i, i + groupSize));
        }

        return groups.join(' ');
    },

    decode(text, options = {}) {
        if (!text) return '';
        const normalized = normalizeText(text);
        return normalized.replace(/\s+/g, '');
    }
};
