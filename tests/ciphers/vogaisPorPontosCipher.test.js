import { describe, it } from 'node:test';
import assert from 'node:assert';
import { vogaisPorPontosCipher } from '../../js/ciphers/vogaisPorPontosCipher.js';

describe('Cifra Vogais por Pontos (vogaisPorPontosCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(vogaisPorPontosCipher.encode(''), '');
        assert.strictEqual(vogaisPorPontosCipher.encode(null), '');
        assert.strictEqual(vogaisPorPontosCipher.decode(''), '');
        assert.strictEqual(vogaisPorPontosCipher.decode(null), '');
    });

    it('deve substituir todas as vogais por pontos .', () => {
        const encoded = vogaisPorPontosCipher.encode('SEMPRE ALERTA');
        assert.strictEqual(encoded, 'S.MPR. .L.RT.');
    });

    it('deve substituir vogais acentuadas e maiúsculas/minúsculas', () => {
        const encoded = vogaisPorPontosCipher.encode('Olá Água Éter Ícone Óleo Úmido');
        assert.strictEqual(encoded, '.l. .g.. .t.r .c.n. .l.. .m.d.');
    });

    it('na descodificação direta preserva a estrutura cifrada', () => {
        const decoded = vogaisPorPontosCipher.decode('S.MPR. .L.RT.');
        assert.strictEqual(decoded, 'S.MPR. .L.RT.');
    });
});
