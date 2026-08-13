import { describe, it } from 'node:test';
import assert from 'node:assert';
import { ultimaLetraFalsaCipher } from '../../js/ciphers/ultimaLetraFalsaCipher.js';

describe('Cifra Última Letra Falsa (ultimaLetraFalsaCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(ultimaLetraFalsaCipher.encode(''), '');
        assert.strictEqual(ultimaLetraFalsaCipher.encode(null), '');
        assert.strictEqual(ultimaLetraFalsaCipher.decode(''), '');
        assert.strictEqual(ultimaLetraFalsaCipher.decode(null), '');
    });

    it('deve adicionar uma letra final falsa em cada palavra resultante', () => {
        const text = 'AS TENDAS FICAM';
        const encoded = ultimaLetraFalsaCipher.encode(text);
        const words = encoded.split(/\s+/);
        assert.ok(words.length >= 3);
    });

    it('deve descodificar removendo a última letra de cada palavra', () => {
        const encodedSample = 'ASO TENDO DASO FIM CAME';
        const decoded = ultimaLetraFalsaCipher.decode(encodedSample);
        assert.strictEqual(decoded, 'AS TEND DAS FI CAM');
    });
});
