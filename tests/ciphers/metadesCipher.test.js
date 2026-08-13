import { describe, it } from 'node:test';
import assert from 'node:assert';
import { metadesCipher } from '../../js/ciphers/metadesCipher.js';

describe('Cifra Metades (metadesCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(metadesCipher.encode(''), '');
        assert.strictEqual(metadesCipher.encode(null), '');
        assert.strictEqual(metadesCipher.decode(''), '');
        assert.strictEqual(metadesCipher.decode(null), '');
    });

    it('deve codificar dividindo alternadamente pelas duas linhas', () => {
        // Entrada: "CHAMAR O SOCORRISTA"
        // cleaned: CHAMAROSOCORRISTA (17 letras)
        // Linha 1 (pares: 0,2,4,6,8,10,12,14,16): C A O O O R S A -> CAAOOORSA
        // Linha 2 (ímpares: 1,3,5,7,9,11,13,15): H M R S C R I T -> HMRSCRIT
        // Saída: CAAOOORSAHMRSCRIT
        const encoded = metadesCipher.encode('CHAMAR O SOCORRISTA');
        assert.strictEqual(encoded, 'CAAOOORSAHMRSCRIT');
    });

    it('deve descodificar restaurando a mensagem original sem espaços', () => {
        const decoded = metadesCipher.decode('CAAOOORSAHMRSCRIT');
        assert.strictEqual(decoded, 'CHAMAROSOCORRISTA');
    });

    it('deve lidar com número par e ímpar de carateres', () => {
        const evenText = 'TESTE';
        const encodedEven = metadesCipher.encode(evenText);
        const decodedEven = metadesCipher.decode(encodedEven);
        assert.strictEqual(decodedEven, 'TESTE');
    });
});
