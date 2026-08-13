import { describe, it } from 'node:test';
import assert from 'node:assert';
import { caranguejoCipher } from '../../js/ciphers/caranguejoCipher.js';

describe('Cifra Caranguejo (caranguejoCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(caranguejoCipher.encode(''), '');
        assert.strictEqual(caranguejoCipher.encode(null), '');
        assert.strictEqual(caranguejoCipher.decode(''), '');
        assert.strictEqual(caranguejoCipher.decode(null), '');
    });

    it('deve inverter a string completamente ao codificar', () => {
        const encoded = caranguejoCipher.encode('BOA CACA E SEMPRE ALERTA');
        assert.strictEqual(encoded, 'ATRELA ERPMES E ACAC AOB');
    });

    it('deve ser simétrica (encode(encode(text)) === text e decode(encode(text)) === text)', () => {
        const input = 'MENSAGEM DE TESTE';
        const encoded = caranguejoCipher.encode(input);
        const decoded = caranguejoCipher.decode(encoded);
        assert.strictEqual(decoded, input);
    });
});
