/**
 * Cifra de Exemplo Demonstrativa (Para validar a interface)
 * Substitui as vogais por números (A=1, E=2, I=3, O=4, U=5)
 */
export const sampleCipher = {
    id: 'sample-vowels',
    name: 'Cifra Exemplo (Vogais Numéricas)',
    description: 'Cifra demonstrativa para testar a interface. Substitui cada vogal pelo seu número correspondente (A=1, E=2, I=3, O=4, U=5). Mantém consoantes, maiúsculas/minúsculas e acentos.',
    example: 'Entrada: "ESCUTISMO E SEMPRE ALERTA"\nSaída: "2SC5T3SM4 2 S2MPR2 1L2RT1"',
    
    encode(text) {
        if (!text) return '';
        const map = {
            'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5',
            'A': '1', 'E': '2', 'I': '3', 'O': '4', 'U': '5',
            'á': '1', 'é': '2', 'í': '3', 'ó': '4', 'ú': '5',
            'Á': '1', 'É': '2', 'Í': '3', 'Ó': '4', 'Ú': '5',
            'â': '1', 'ê': '2', 'ô': '4', 'Â': '1', 'Ê': '2', 'Ô': '4',
            'ã': '1', 'õ': '4', 'Ã': '1', 'Õ': '4'
        };
        
        return text.split('').map(char => map[char] || char).join('');
    },
    
    decode(text) {
        if (!text) return '';
        const map = {
            '1': 'A', '2': 'E', '3': 'I', '4': 'O', '5': 'U'
        };
        
        return text.split('').map(char => map[char] || char).join('');
    }
};
