import { describe, it } from 'node:test';
import assert from 'node:assert';
import { chaveMaisCipher } from '../../js/ciphers/chaveMaisCipher.js';

describe('Cifra Chave + ? (chaveMaisCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(chaveMaisCipher.encode(''), '');
        assert.strictEqual(chaveMaisCipher.encode(null), '');
        assert.strictEqual(chaveMaisCipher.decode(''), '');
        assert.strictEqual(chaveMaisCipher.decode(null), '');
    });

    it('deve codificar com deslocamento positivo padrão (+3)', () => {
        const encoded = chaveMaisCipher.encode('ESCUTA', { shiftValue: 3 });
        assert.strictEqual(encoded, 'HVFXWD');
    });

    it('deve descodificar com deslocamento positivo (+3)', () => {
        const decoded = chaveMaisCipher.decode('HVFXWD', { shiftValue: 3 });
        assert.strictEqual(decoded, 'ESCUTA');
    });

    it('deve codificar e descodificar com deslocamento negativo (ex: -3)', () => {
        // Shift -3: E->B, S->P, C->Z, U->R, T->Q, A->X
        const encoded = chaveMaisCipher.encode('ESCUTA', { shiftValue: -3 });
        assert.strictEqual(encoded, 'BPZRQX');
        const decoded = chaveMaisCipher.decode(encoded, { shiftValue: -3 });
        assert.strictEqual(decoded, 'ESCUTA');
    });

    it('deve limitar deslocamentos fora da amplitude [-25, 25]', () => {

        const encoded30 = chaveMaisCipher.encode('A', { shiftValue: 30 });
        const encoded25 = chaveMaisCipher.encode('A', { shiftValue: 25 });
        assert.strictEqual(encoded30, encoded25);
    });
});
