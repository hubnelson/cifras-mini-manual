import { describe, it } from 'node:test';
import assert from 'node:assert';
import { numeralAlphabetCipher } from '../../js/ciphers/numeralAlphabetCipher.js';

describe('Cifra Alfabeto Numeral (numeralAlphabetCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(numeralAlphabetCipher.encode(''), '');
        assert.strictEqual(numeralAlphabetCipher.encode(null), '');
        assert.strictEqual(numeralAlphabetCipher.decode(''), '');
        assert.strictEqual(numeralAlphabetCipher.decode(null), '');
    });

    it('deve codificar sem chave (A=01, B=02, ..., Z=26)', () => {
        const encoded = numeralAlphabetCipher.encode('ABC');
        assert.strictEqual(encoded, '010203');
    });

    it('deve descodificar sem chave', () => {
        const decoded = numeralAlphabetCipher.decode('010203');
        assert.strictEqual(decoded, 'ABC');
    });

    it('deve codificar e descodificar com chave (ex: A=12)', () => {
        const options = { useKey: true, keyNumber: 12 };
        // A=12, B=13, C=14
        const encoded = numeralAlphabetCipher.encode('ABC', options);
        assert.strictEqual(encoded, '121314');
        const decoded = numeralAlphabetCipher.decode(encoded, options);
        assert.strictEqual(decoded, 'ABC');
    });

    it('deve preservar espaços e carateres não alfabéticos', () => {
        const encoded = numeralAlphabetCipher.encode('A B!');
        assert.strictEqual(encoded, '01 02!');
        const decoded = numeralAlphabetCipher.decode('01 02!');
        assert.strictEqual(decoded, 'A B!');
    });
});
