import { describe, it } from 'node:test';
import assert from 'node:assert';
import { palavrasDivididasCipher } from '../../js/ciphers/palavrasDivididasCipher.js';

describe('Cifra Palavras Divididas (palavrasDivididasCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(palavrasDivididasCipher.encode(''), '');
        assert.strictEqual(palavrasDivididasCipher.encode(null), '');
        assert.strictEqual(palavrasDivididasCipher.decode(''), '');
        assert.strictEqual(palavrasDivididasCipher.decode(null), '');
    });

    it('deve agrupar por defeito em grupos de 4 letras', () => {
        const encoded = palavrasDivididasCipher.encode('SAIR DO CAMPO AS NOVE HORAS E PROCURAR O CHEFE', { groupSize: 4 });
        assert.strictEqual(encoded, 'SAIR DOCA MPOA SNOV EHOR ASEP ROCU RARO CHEF E');
    });

    it('deve suportar tamanhos de grupo personalizados (ex: 3)', () => {
        const encoded = palavrasDivididasCipher.encode('ESCUTEIROS', { groupSize: 3 });
        assert.strictEqual(encoded, 'ESC UTE IRO S');
    });

    it('deve descodificar juntando todas as letras sem espaços', () => {
        const decoded = palavrasDivididasCipher.decode('SAIR DOCA MPOA SNOV EHOR ASEP ROCU RARO CHEF E');
        assert.strictEqual(decoded, 'SAIRDOCAMPOASNOVEHORASEPROCURAROCHEFE');
    });
});
