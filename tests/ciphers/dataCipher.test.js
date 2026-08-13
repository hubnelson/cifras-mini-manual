import { describe, it } from 'node:test';
import assert from 'node:assert';
import { dataCipher } from '../../js/ciphers/dataCipher.js';

describe('Cifra Data (dataCipher)', () => {
    it('deve retornar string vazia para entrada vazia ou nula', () => {
        assert.strictEqual(dataCipher.encode(''), '');
        assert.strictEqual(dataCipher.encode(null), '');
        assert.strictEqual(dataCipher.decode(''), '');
        assert.strictEqual(dataCipher.decode(null), '');
    });

    it('deve codificar corretamente com chave por defeito (1984)', () => {
        // Exemplo: "ALERTA" -> "119215989011"
        const encoded = dataCipher.encode('ALERTA');
        assert.strictEqual(encoded, '119215989011');
    });

    it('deve descodificar corretamente com chave por defeito (1984)', () => {
        const decoded = dataCipher.decode('119215989011');
        assert.strictEqual(decoded, 'ALERTA');
    });

    it('deve suportar chaves de data personalizadas (ex: 2024)', () => {
        const encoded = dataCipher.encode('ALERTA', { dateKey: '2024' });
        // Com 2024, a primeira linha é '2', A é 21. L é 02. E é 25. R é 08. T é 00.
        assert.strictEqual(encoded, '210225080021');
        const decoded = dataCipher.decode(encoded, { dateKey: '2024' });
        assert.strictEqual(decoded, 'ALERTA');
    });

    it('deve preservar espaços e carateres especiais não cifráveis', () => {
        const encoded = dataCipher.encode('SOS!');
        const decoded = dataCipher.decode(encoded);
        assert.strictEqual(decoded, 'SOS!');
    });
});
