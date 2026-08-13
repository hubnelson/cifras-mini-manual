import { describe, it } from 'node:test';
import assert from 'node:assert';
import { transposedCipher } from '../../js/ciphers/transposedCipher.js';

describe('Cifra Transposto (transposedCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(transposedCipher.encode(''), '');
        assert.strictEqual(transposedCipher.encode(null), '');
        assert.strictEqual(transposedCipher.decode(''), '');
        assert.strictEqual(transposedCipher.decode(null), '');
    });

    it('deve codificar e descodificar com chave padrão (V)', () => {
        const encoded = transposedCipher.encode('ESCUTEIRO', { keyLetter: 'V' });
        assert.strictEqual(encoded, 'ZNXPOZDMJ');
        const decoded = transposedCipher.decode('ZNXPOZDMJ', { keyLetter: 'V' });
        assert.strictEqual(decoded, 'ESCUTEIRO');
    });

    it('deve codificar e descodificar com chave personalizada (ex: B)', () => {
        // A=B (deslocamento 1) -> E->F, S->T, C->D, U->V, T->U, E->F, I->J, R->S, O->P
        const encoded = transposedCipher.encode('ESCUTEIRO', { keyLetter: 'B' });
        assert.strictEqual(encoded, 'FTDVUFJSP');
        const decoded = transposedCipher.decode('FTDVUFJSP', { keyLetter: 'B' });
        assert.strictEqual(decoded, 'ESCUTEIRO');
    });

    it('deve manter pontuação e espaços inalterados', () => {
        const encoded = transposedCipher.encode('OLA, MUNDO!');
        const decoded = transposedCipher.decode(encoded);
        assert.strictEqual(decoded, 'OLA, MUNDO!');
    });
});
