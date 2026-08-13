import { describe, it } from 'node:test';
import assert from 'node:assert';
import { passaNMelrosCipher } from '../../js/ciphers/passaNMelrosCipher.js';

describe('Cifra Passa N Melros (passaNMelrosCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(passaNMelrosCipher.encode(''), '');
        assert.strictEqual(passaNMelrosCipher.encode(null), '');
        assert.strictEqual(passaNMelrosCipher.decode(''), '');
        assert.strictEqual(passaNMelrosCipher.decode(null), '');
    });

    it('deve codificar e descodificar com 1 Melro por defeito', () => {
        const text = 'SOL';
        const encoded = passaNMelrosCipher.encode(text, { melrosCount: 1 });
        // Com 1 melro, o comprimento das letras deve ser o dobro (S + 1 melro, O + 1 melro, L + 1 melro)
        assert.strictEqual(encoded.length, 6);
        assert.strictEqual(encoded[0], 'S');
        assert.strictEqual(encoded[2], 'O');
        assert.strictEqual(encoded[4], 'L');

        const decoded = passaNMelrosCipher.decode(encoded, { melrosCount: 1 });
        assert.strictEqual(decoded, 'SOL');
    });

    it('deve codificar e descodificar com 3 Melros', () => {
        const text = 'MAR';
        const encoded = passaNMelrosCipher.encode(text, { melrosCount: 3 });
        // M + 3 melros, A + 3 melros, R + 3 melros -> total 12 letras
        assert.strictEqual(encoded.length, 12);
        const decoded = passaNMelrosCipher.decode(encoded, { melrosCount: 3 });
        assert.strictEqual(decoded, 'MAR');
    });

    it('deve preservar espaços entre palavras ao descodificar', () => {
        const text = 'BOA CACA';
        const encoded = passaNMelrosCipher.encode(text, { melrosCount: 2 });
        const decoded = passaNMelrosCipher.decode(encoded, { melrosCount: 2 });
        assert.strictEqual(decoded, 'BOA CACA');
    });
});
