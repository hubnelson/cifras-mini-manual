import { describe, it } from 'node:test';
import assert from 'node:assert';
import { batalhaNavalComChaveCipher } from '../../js/ciphers/batalhaNavalComChaveCipher.js';

describe('Cifra Batalha Naval com Chave (batalhaNavalComChaveCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(batalhaNavalComChaveCipher.encode(''), '');
        assert.strictEqual(batalhaNavalComChaveCipher.encode(null), '');
        assert.strictEqual(batalhaNavalComChaveCipher.decode(''), '');
        assert.strictEqual(batalhaNavalComChaveCipher.decode(null), '');
    });

    it('deve codificar e descodificar com chave J', () => {
        const text = 'CHAMAR A JOANA';
        const encoded = batalhaNavalComChaveCipher.encode(text, { keyLetter: 'J' });
        assert.strictEqual(encoded, 'D4 D5 B4 C1 B4 C2 B4 ... E1 B4 D1 B4');

        const decoded = batalhaNavalComChaveCipher.decode(encoded, { keyLetter: 'J' });
        assert.strictEqual(decoded, 'CHAMARAJOANA');
    });

    it('deve codificar e descodificar com outra chave (ex: A)', () => {
        const text = 'BOA CACA';
        const encoded = batalhaNavalComChaveCipher.encode(text, { keyLetter: 'A' });
        const decoded = batalhaNavalComChaveCipher.decode(encoded, { keyLetter: 'A' });
        assert.strictEqual(decoded, 'BOACACA');
    });
});
