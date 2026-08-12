import { sampleCipher } from './sampleCipher.js';
import { dataCipher } from './dataCipher.js';
import { invertedAlphabetCipher } from './invertedAlphabetCipher.js';
import { transposedCipher } from './transposedCipher.js';
import { passaNMelrosCipher } from './passaNMelrosCipher.js';
import { numeralAlphabetCipher } from './numeralAlphabetCipher.js';

/**
 * Gestor Central de Cifras Escutistas
 */
class CipherRegistry {
    constructor() {
        this.ciphers = new Map();
        
        // Registar cifras
        this.register(dataCipher);
        this.register(invertedAlphabetCipher);
        this.register(transposedCipher);
        this.register(passaNMelrosCipher);
        this.register(numeralAlphabetCipher);
        this.register(sampleCipher);
    }

    /**
     * Regista uma nova cifra no sistema.
     * NOTA DE REQUISITO: Todas as cifras novas DEVEM implementar obrigatoriamente tanto a codificação (encode) 
     * como a descodificação (decode), mesmo que a descodificação fique oculta na interface do utilizador.
     * @param {Object} cipher - Objeto contendo id, name, description, example, encode e decode
     */
    register(cipher) {
        if (!cipher || !cipher.id || typeof cipher.encode !== 'function' || typeof cipher.decode !== 'function') {
            console.error('Tentativa de registar cifra inválida. Todas as cifras devem conter id, encode() e decode():', cipher);
            return;
        }
        this.ciphers.set(cipher.id, cipher);
    }

    /**
     * Obtém uma cifra pelo seu ID
     * @param {string} id 
     * @returns {Object|null}
     */
    get(id) {
        return this.ciphers.get(id) || null;
    }

    /**
     * Retorna a lista de todas as cifras registadas
     * @returns {Array} Array de objetos com { id, name }
     */
    getAll() {
        return Array.from(this.ciphers.values()).map(c => ({
            id: c.id,
            name: c.name,
            description: c.description,
            example: c.example
        }));
    }
}

export const cipherRegistry = new CipherRegistry();
