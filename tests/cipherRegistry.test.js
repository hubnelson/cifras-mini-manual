import { describe, it } from 'node:test';
import assert from 'node:assert';
import { cipherRegistry } from '../js/ciphers/cipherRegistry.js';

describe('CipherRegistry Tests', () => {
    it('deve obter a lista de todas as cifras registadas', () => {
        const ciphers = cipherRegistry.getAll();
        assert.ok(Array.isArray(ciphers));
        assert.strictEqual(ciphers.length, 16);
        ciphers.forEach(c => {
            assert.ok(c.id, 'Cifra deve ter um ID');
            assert.ok(c.name, 'Cifra deve ter um Nome');
            assert.ok(c.description, 'Cifra deve ter uma Descrição');
        });
    });

    it('deve obter uma cifra específica pelo ID', () => {
        const dataCipher = cipherRegistry.get('data');
        assert.ok(dataCipher);
        assert.strictEqual(dataCipher.id, 'data');
        assert.strictEqual(typeof dataCipher.encode, 'function');
        assert.strictEqual(typeof dataCipher.decode, 'function');
    });

    it('deve retornar null para IDs inexistentes', () => {
        const invalidCipher = cipherRegistry.get('non-existent-id');
        assert.strictEqual(invalidCipher, null);
    });

    it('todas as cifras registadas devem cumprir a interface com id, encode e decode', () => {
        const expectedIds = [
            'data',
            'inverted-alphabet',
            'transposed',
            'passa-n-melros',
            'numeral-alphabet',
            'romano-arabe',
            'metades',
            'vogais-por-pontos',
            'caranguejo',
            'chave-mais',
            'ultima-letra-falsa',
            'primeira-letra-falsa',
            'palavras-seguidas',
            'palavras-divididas',
            'batalha-naval-com-chave',
            'caracol'
        ];

        expectedIds.forEach(id => {
            const cipher = cipherRegistry.get(id);
            assert.ok(cipher, `Cifra com ID '${id}' deve existir no registo`);
            assert.strictEqual(typeof cipher.id, 'string');
            assert.strictEqual(typeof cipher.name, 'string');
            assert.strictEqual(typeof cipher.encode, 'function');
            assert.strictEqual(typeof cipher.decode, 'function');
        });
    });
});
