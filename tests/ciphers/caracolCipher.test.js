import { describe, it } from 'node:test';
import assert from 'node:assert';
import { caracolCipher } from '../../js/ciphers/caracolCipher.js';

describe('Cifra Caracol (caracolCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(caracolCipher.encode(''), '');
        assert.strictEqual(caracolCipher.encode(null), '');
        assert.strictEqual(caracolCipher.decode(''), '');
        assert.strictEqual(caracolCipher.decode(null), '');
    });

    it('deve calcular corretamente o tamanho da grelha N x N', () => {
        assert.strictEqual(caracolCipher.calculateGridSize('ABC'), 2); // 3 letras -> 2x2 (4 células)
        assert.strictEqual(caracolCipher.calculateGridSize('ACAMPAMENTO JUNTO AO RIO COM FOGUEIRA'), 6); // 36 letras -> 6x6
    });

    it('deve codificar e descodificar recuperando o texto limpo original', () => {
        const input = 'ACAMPAMENTO JUNTO AO RIO';
        const gridSize = caracolCipher.calculateGridSize(input);
        const totalCells = gridSize * gridSize;

        const encoded = caracolCipher.encode(input);
        assert.strictEqual(encoded.length, totalCells);

        const decoded = caracolCipher.decode(encoded);
        // O texto descodificado conterá as letras limpas originais no início
        const cleanInput = input.replace(/[^A-Z]/g, '');
        assert.ok(decoded.startsWith(cleanInput));
    });
});
