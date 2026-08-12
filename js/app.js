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
                group.id = `group_extra_${field.id}`;

                if (field.type === 'switch' || field.type === 'checkbox') {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'toggle-switch-wrapper';

                    const labelText = document.createElement('span');
                    labelText.className = 'switch-label-text';
                    labelText.textContent = field.label;

                    const switchLabel = document.createElement('label');
                    switchLabel.className = 'toggle-switch';

                    const input = document.createElement('input');
                    input.type = 'checkbox';
                    input.id = `extra_${field.id}`;
                    input.checked = !!field.defaultValue;

                    const slider = document.createElement('span');
                    slider.className = 'slider';

                    switchLabel.appendChild(input);
                    switchLabel.appendChild(slider);

                    wrapper.appendChild(labelText);
                    wrapper.appendChild(switchLabel);
                    group.appendChild(wrapper);

                    input.addEventListener('change', () => {
                        // Alternar visibilidade de campos dependentes
                        cipher.extraFields.forEach(depField => {
                            if (depField.dependsOn === field.id) {
                                const depGroup = document.getElementById(`group_extra_${depField.id}`);
                                if (depGroup) {
                                    if (input.checked) {
                                        depGroup.classList.remove('hidden');
                                    } else {
                                        depGroup.classList.add('hidden');
                                    }
                                }
                            }
                        });
                        processCipher();
                    });
                } else if (field.type === 'select' && Array.isArray(field.options)) {
                    const label = document.createElement('label');
                    label.htmlFor = `extra_${field.id}`;
                    label.textContent = field.label;

                    const selectWrapper = document.createElement('div');
                    selectWrapper.className = 'select-wrapper';

                    const input = document.createElement('select');
                    input.id = `extra_${field.id}`;
                    input.className = 'form-control';

                    field.options.forEach(opt => {
                        const optEl = document.createElement('option');
                        const val = typeof opt === 'object' ? opt.value : opt;
                        const lbl = typeof opt === 'object' ? opt.label : opt;
                        optEl.value = val;
                        optEl.textContent = lbl;
                        if (val == field.defaultValue) {
                            optEl.selected = true;
                        }
                        input.appendChild(optEl);
                    });

                    input.addEventListener('change', () => {
                        processCipher();
                    });

                    selectWrapper.appendChild(input);
                    group.appendChild(label);
                    group.appendChild(selectWrapper);
                } else {
                    const label = document.createElement('label');
                    label.htmlFor = `extra_${field.id}`;
                    label.textContent = field.label;

                    const input = document.createElement('input');
                    input.type = field.type || 'text';
                    input.id = `extra_${field.id}`;
                    input.className = 'form-control';
                    input.value = field.defaultValue !== undefined ? field.defaultValue : '';
                    if (field.min !== undefined) input.min = field.min;
                    if (field.max !== undefined) input.max = field.max;
                    if (field.placeholder) {
                        input.placeholder = field.placeholder;
                    }

                    const validateAndClamp = () => {
                        if (field.type === 'number' && input.value !== '' && input.value !== '-') {
                            const val = parseInt(input.value, 10);
                            if (!isNaN(val)) {
                                if (field.max !== undefined && val > field.max) {
                                    input.value = field.max;
                                } else if (field.min !== undefined && val < field.min) {
                                    input.value = field.min;
                                }
                            }
                        }
                    };

                    input.addEventListener('input', () => {
                        validateAndClamp();
                        if (inputText.value.trim() !== '') {
                            processCipher();
                        }
                    });

                    input.addEventListener('change', () => {
                        validateAndClamp();
                        if (inputText.value.trim() !== '') {
                            processCipher();
                        }
                    });

                    group.appendChild(label);
                    group.appendChild(input);
                }

                cipherExtraOptions.appendChild(group);

                // Ocultar inicialmente se depende de um pai desativado
                if (field.dependsOn) {
                    const parentInput = document.getElementById(`extra_${field.dependsOn}`);
                    const isParentChecked = parentInput ? parentInput.checked : false;
                    if (!isParentChecked) {
                        group.classList.add('hidden');
                    }
                }
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
                    if (field.type === 'switch' || field.type === 'checkbox') {
                        options[field.id] = input.checked;
                    } else {
                        options[field.id] = input.value;
                    }
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

