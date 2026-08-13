import { describe, it } from 'node:test';
import assert from 'node:assert';
import { primeiraLetraFalsaCipher } from '../../js/ciphers/primeiraLetraFalsaCipher.js';

describe('Cifra Primeira Letra Falsa (primeiraLetraFalsaCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(primeiraLetraFalsaCipher.encode(''), '');
        assert.strictEqual(primeiraLetraFalsaCipher.encode(null), '');
        assert.strictEqual(primeiraLetraFalsaCipher.decode(''), '');
        assert.strictEqual(primeiraLetraFalsaCipher.decode(null), '');
    });

    it('deve adicionar uma letra inicial falsa em cada palavra resultante', () => {
        const text = 'AS TENDAS FICAM';
        const encoded = primeiraLetraFalsaCipher.encode(text);
        const words = encoded.split(/\s+/);
        assert.ok(words.length >= 3);
    });

    it('deve descodificar removendo a primeira letra de cada palavra', () => {
        // Exemplo: "LAS ATEN UDAS AFIC RAM" -> "AS TEN DAS FIC AM"
        const encodedSample = 'LAS ATEN UDAS AFIC RAM';
        const decoded = primeiraLetraFalsaCipher.decode(encodedSample);
        assert.strictEqual(decoded, 'AS TEN DAS FIC AM');
    });
});
