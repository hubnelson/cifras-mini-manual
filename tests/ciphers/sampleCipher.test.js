import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sampleCipher } from '../../js/ciphers/sampleCipher.js';

describe('Cifra de Exemplo (sampleCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(sampleCipher.encode(''), '');
        assert.strictEqual(sampleCipher.encode(null), '');
        assert.strictEqual(sampleCipher.decode(''), '');
        assert.strictEqual(sampleCipher.decode(null), '');
    });

    it('deve substituir vogais por números (A=1, E=2, I=3, O=4, U=5)', () => {
        const encoded = sampleCipher.encode('ESCUTISMO E SEMPRE ALERTA');
        assert.strictEqual(encoded, '2SC5T3SM4 2 S2MPR2 1L2RT1');
    });

    it('deve descodificar substituindo números por vogais em maiúsculas', () => {
        const decoded = sampleCipher.decode('2SC5T3SM4 2 S2MPR2 1L2RT1');
        assert.strictEqual(decoded, 'ESCUTISMO E SEMPRE ALERTA');
    });
});
