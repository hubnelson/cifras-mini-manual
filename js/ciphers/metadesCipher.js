/**
 * Cifra - Metades
 * As letras da mensagem são dispostas alternadamente em 2 linhas (1.ª letra na linha 1, 2.ª na linha 2, etc.).
 * O resultado cifrado é obtido juntando a 1.ª linha com a 2.ª linha.
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, '');
}

export const metadesCipher = {
    id: 'metades',
    name: 'Metades',
    description: 'As letras da mensagem são dispostas alternadamente em duas colunas (ou linhas). A mensagem cifrada é obtida lendo primeiro a primeira linha e depois a segunda linha.',
    example: 'Entrada: "CHAMAR O SOCORRISTA"\nSaída: "CAAOOORSAHMRSCRIT"',
    
    hasExtraFields: false,

    encode(text) {
        if (!text) return '';
        const cleaned = normalizeText(text);
        let row1 = '';
        let row2 = '';

        for (let i = 0; i < cleaned.length; i++) {
            if (i % 2 === 0) {
                row1 += cleaned[i];
            } else {
                row2 += cleaned[i];
            }
        }

        return row1 + row2;
    },

    decode(text) {
        if (!text) return '';
        const cleaned = normalizeText(text);
        const len = cleaned.length;
        const half1Len = Math.ceil(len / 2);
        
        const half1 = cleaned.slice(0, half1Len);
        const half2 = cleaned.slice(half1Len);
        
        let result = '';
        for (let i = 0; i < half1Len; i++) {
            result += half1[i];
            if (i < half2.length) {
                result += half2[i];
            }
        }

        return result;
    }
};
