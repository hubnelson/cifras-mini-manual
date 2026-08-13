import { describe, it } from 'node:test';
import assert from 'node:assert';
import { palavrasSeguidasCipher } from '../../js/ciphers/palavrasSeguidasCipher.js';

describe('Cifra Palavras Seguidas (palavrasSeguidasCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(palavrasSeguidasCipher.encode(''), '');
        assert.strictEqual(palavrasSeguidasCipher.encode(null), '');
        assert.strictEqual(palavrasSeguidasCipher.decode(''), '');
        assert.strictEqual(palavrasSeguidasCipher.decode(null), '');
    });

    it('deve remover todos os espaços ao codificar', () => {
        const encoded = palavrasSeguidasCipher.encode('SAIR DO CAMPO AS NOVE HORAS E PROCURAR O CHEFE');
        assert.strictEqual(encoded, 'SAIRDOCAMPOASNOVEHORASEPROCURAROCHEFE');
    });

    it('deve remover espaços e normalizar na descodificação', () => {
        const decoded = palavrasSeguidasCipher.decode('SAIR DO CAMPO');
        assert.strictEqual(decoded, 'SAIRDOCAMPO');
    });
});
