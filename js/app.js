import { cipherRegistry } from './ciphers/cipherRegistry.js';

document.addEventListener('DOMContentLoaded', () => {
    // Elements DOM
    const cipherSelect = document.getElementById('cipherSelect');
    const cipherExtraOptions = document.getElementById('cipherExtraOptions');
    const modeEncodeRadio = document.getElementById('modeEncode');
    const modeDecodeRadio = document.getElementById('modeDecode');
    
    const cipherDescription = document.getElementById('cipherDescription');
    const cipherExample = document.getElementById('cipherExample');
    
    const inputLabel = document.getElementById('inputLabel');
    const outputLabel = document.getElementById('outputLabel');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    
    const btnProcess = document.getElementById('btnProcess');
    const btnProcessText = document.getElementById('btnProcessText');
    const btnClearInput = document.getElementById('btnClearInput');
    const btnCopyOutput = document.getElementById('btnCopyOutput');
    
    const inputStats = document.getElementById('inputStats');
    const outputStats = document.getElementById('outputStats');
    const toastNotification = document.getElementById('toastNotification');

    // 1. Populate Cipher Select Box
    function populateCipherSelect() {
        const ciphers = cipherRegistry.getAll();
        cipherSelect.innerHTML = '';
        
        ciphers.forEach(cipher => {
            const option = document.createElement('option');
            option.value = cipher.id;
            option.textContent = cipher.name;
            cipherSelect.appendChild(option);
        });

        if (ciphers.length > 0) {
            updateCipherInfo(ciphers[0].id);
            updateCipherExtraFields(ciphers[0].id);
        }
    }

    // 2. Update Cipher Info Box
    function updateCipherInfo(cipherId) {
        const cipher = cipherRegistry.get(cipherId);
        if (cipher) {
            cipherDescription.textContent = cipher.description || 'Sem descrição disponível.';
            cipherExample.textContent = cipher.example || 'Sem exemplo disponível.';
        }
    }

    // 3. Render Dynamic Extra Fields for Selected Cipher
    function updateCipherExtraFields(cipherId) {
        const cipher = cipherRegistry.get(cipherId);
        cipherExtraOptions.innerHTML = '';

        if (cipher && cipher.hasExtraFields && Array.isArray(cipher.extraFields) && cipher.extraFields.length > 0) {
            cipherExtraOptions.classList.remove('hidden');

            cipher.extraFields.forEach(field => {
                const group = document.createElement('div');
                group.className = 'form-group';

                const label = document.createElement('label');
                label.htmlFor = `extra_${field.id}`;
                label.textContent = field.label;

                const input = document.createElement('input');
                input.type = field.type || 'text';
                input.id = `extra_${field.id}`;
                input.className = 'form-control';
                input.value = field.defaultValue !== undefined ? field.defaultValue : '';
                if (field.placeholder) {
                    input.placeholder = field.placeholder;
                }

                input.addEventListener('input', () => {
                    if (inputText.value.trim() !== '') {
                        processCipher();
                    }
                });

                group.appendChild(label);
                group.appendChild(input);
                cipherExtraOptions.appendChild(group);
            });
        } else {
            cipherExtraOptions.classList.add('hidden');
        }
    }

    // 4. Collect Extra Option Values
    function getExtraOptionsValues(cipher) {
        const options = {};
        if (cipher && cipher.hasExtraFields && Array.isArray(cipher.extraFields)) {
            cipher.extraFields.forEach(field => {
                const input = document.getElementById(`extra_${field.id}`);
                if (input) {
                    options[field.id] = input.value;
                }
            });
        }
        return options;
    }

    // 5. Update Mode Labels & Button Text
    function updateModeState() {
        const isEncode = modeEncodeRadio.checked;
        
        if (isEncode) {
            inputLabel.textContent = 'Mensagem Original (para Codificar):';
            outputLabel.textContent = 'Resultado Cifrado:';
            btnProcessText.textContent = 'Codificar Mensagem';
        } else {
            inputLabel.textContent = 'Mensagem Cifrada (para Descodificar):';
            outputLabel.textContent = 'Resultado Descodificado:';
            btnProcessText.textContent = 'Descodificar Mensagem';
        }
    }

    // 6. Calculate Text Stats
    function updateStats() {
        const text = inputText.value;
        const charCount = text.length;
        const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        inputStats.textContent = `${charCount} carateres | ${wordCount} palavras`;

        const outText = outputText.value;
        outputStats.textContent = `${outText.length} carateres`;
    }

    // 7. Process Cipher Action
    function processCipher() {
        const selectedId = cipherSelect.value;
        const cipher = cipherRegistry.get(selectedId);
        
        if (!cipher) {
            alert('Por favor, selecione uma cifra válida.');
            return;
        }

        const text = inputText.value;
        const isEncode = modeEncodeRadio.checked;
        const options = getExtraOptionsValues(cipher);

        try {
            const result = isEncode ? cipher.encode(text, options) : cipher.decode(text, options);
            outputText.value = result;
            updateStats();
        } catch (error) {
            console.error('Erro ao processar cifra:', error);
            outputText.value = `[ERRO NA CIFRA]: ${error.message}`;
        }
    }

    // 8. Copy Output to Clipboard
    async function copyOutput() {
        const text = outputText.value;
        if (!text) return;

        try {
            await navigator.clipboard.writeText(text);
            showToast('Copiado para a área de transferência!');
        } catch (err) {
            outputText.select();
            document.execCommand('copy');
            showToast('Copiado com sucesso!');
        }
    }

    // 9. Show Temporary Toast Notification
    function showToast(message) {
        toastNotification.textContent = message;
        toastNotification.classList.remove('hidden');
        setTimeout(() => {
            toastNotification.classList.add('hidden');
        }, 2200);
    }

    // Event Listeners
    cipherSelect.addEventListener('change', (e) => {
        const id = e.target.value;
        updateCipherInfo(id);
        updateCipherExtraFields(id);
        if (inputText.value.trim() !== '') {
            processCipher();
        }
    });

    modeEncodeRadio.addEventListener('change', () => {
        updateModeState();
        if (inputText.value.trim() !== '') processCipher();
    });
    modeDecodeRadio.addEventListener('change', () => {
        updateModeState();
        if (inputText.value.trim() !== '') processCipher();
    });

    inputText.addEventListener('input', () => {
        updateStats();
        if (inputText.value.trim() !== '') {
            processCipher();
        } else {
            outputText.value = '';
            updateStats();
        }
    });

    btnProcess.addEventListener('click', processCipher);

    btnClearInput.addEventListener('click', () => {
        inputText.value = '';
        outputText.value = '';
        updateStats();
        inputText.focus();
    });

    btnCopyOutput.addEventListener('click', copyOutput);

    // Initial Setup
    populateCipherSelect();
    updateModeState();
    updateStats();
});

