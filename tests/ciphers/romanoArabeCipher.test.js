import { describe, it } from 'node:test';
import assert from 'node:assert';
import { romanoArabeCipher } from '../../js/ciphers/romanoArabeCipher.js';

describe('Cifra Romano-Árabe (romanoArabeCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(romanoArabeCipher.encode(''), '');
        assert.strictEqual(romanoArabeCipher.encode(null), '');
        assert.strictEqual(romanoArabeCipher.decode(''), '');
        assert.strictEqual(romanoArabeCipher.decode(null), '');
    });

    it('deve codificar vogais em romano e consoantes em árabe', () => {
        // A=I, L=9, E=II, R=14, T=16, A=I
        const encoded = romanoArabeCipher.encode('ALERTA');
        assert.strictEqual(encoded, 'I 9 II 14 16 I');
    });

    it('deve descodificar a mensagem cifrada', () => {
        const decoded = romanoArabeCipher.decode('I 9 II 14 16 I');
        assert.strictEqual(decoded, 'ALERTA');
    });

    it('deve tratar acentos corretamente ao codificar', () => {
        const encoded = romanoArabeCipher.encode('Água');
        // A=I, G=5, U=V, A=I
        assert.strictEqual(encoded, 'I 5 V I');
        const decoded = romanoArabeCipher.decode(encoded);
        assert.strictEqual(decoded, 'AGUA');
    });
});
