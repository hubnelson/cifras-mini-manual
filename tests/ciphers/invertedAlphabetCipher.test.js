import { describe, it } from 'node:test';
import assert from 'node:assert';
import { invertedAlphabetCipher } from '../../js/ciphers/invertedAlphabetCipher.js';

describe('Cifra Alfabeto Invertido (invertedAlphabetCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(invertedAlphabetCipher.encode(''), '');
        assert.strictEqual(invertedAlphabetCipher.encode(null), '');
        assert.strictEqual(invertedAlphabetCipher.decode(''), '');
        assert.strictEqual(invertedAlphabetCipher.decode(null), '');
    });

    it('deve codificar corretamente (A=Z, B=Y, C=X, etc.)', () => {
        const encoded = invertedAlphabetCipher.encode('ESCUTEIRO');
        assert.strictEqual(encoded, 'VHXFGVRIL');
    });

    it('deve descodificar corretamente o texto cifrado', () => {
        const decoded = invertedAlphabetCipher.decode('VHXFGVRIL');
        assert.strictEqual(decoded, 'ESCUTEIRO');
    });

    it('deve ser simétrica (encode(encode(text)) === text)', () => {
        const input = 'SEMPRE ALERTA';
        const encoded = invertedAlphabetCipher.encode(input);
        const doubleEncoded = invertedAlphabetCipher.encode(encoded);
        assert.strictEqual(doubleEncoded, input);
    });

    it('deve tratar acentos normalizando para maiúsculas sem acento', () => {
        const encoded = invertedAlphabetCipher.encode('AÇÂO');
        // 'A'->'Z', 'C'->'X', 'A'->'Z', 'O'->'L'
        assert.strictEqual(encoded, 'ZXZL');
    });
});
