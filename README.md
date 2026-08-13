# Cifras Escutistas - Mini Manual

Aplicação web moderna, responsiva e 100% autónoma (Vanilla HTML, CSS e JavaScript sem dependências externas nem bases de dados) concebida para codificar mensagens com cifras do mini-manual escutista.

🌐 **Aceder Online**: [https://hubnelson.github.io/cifras-mini-manual/](https://hubnelson.github.io/cifras-mini-manual/)

---

## 🌟 Funcionalidades

- **Codificação de Mensagens**: Processamento simples e rápido de mensagens texto.
- **Acionamento Manual por Botão**: Processamento ao clicar no botão dedicado ("Codificar Mensagem").
- **Explicação Dinâmica da Cifra**: Cartão explicativo com descrição detalhada do funcionamento da cifra selecionada e um exemplo prático.
- **Opções Personalizáveis**: Suporte para opções adicionais em cifras específicas (ex: deslocamento numérico, letras chave, seletores).
- **Utilitários Úteis**:
  - Botão **Limpar** para reiniciar rapidamente a caixa de entrada.
  - Botão **Copiar Resultado** com feedback visual *Toast* instantâneo.
  - Estatísticas em tempo real do número de carateres e palavras.
- **100% Local & Sem Dependências**: Executa em qualquer navegador web diretamente a partir do ficheiro `index.html`.

---

## 📜 Cifras Disponíveis

A aplicação inclui as seguintes cifras escutistas:

1. **Data**
2. **Alfabeto Invertido**
3. **Transposto**
4. **Passa N Melros** (intercala letras conforme seletor)
5. **Alfabeto Numeral** (com opção de Chave)
6. **Romano-Árabe**
7. **Metades**
8. **Vogais por Pontos**
9. **Caranguejo**
10. **Chave + ?** (deslocamento positivo ou negativo)
11. **Última Letra Falsa**
12. **Primeira Letra Falsa**
13. **Palavras Seguidas**
14. **Palavras Divididas** (com seletor de tamanho do grupo)
15. **Batalha Naval com Chave**
16. **Caracol** (tamanho $N \times N$ calculado automaticamente)

---

## 📁 Estrutura do Projeto

```
cifras-mini-manual/
├── index.html                    # Interface HTML5 semântica e acessível
├── styles.css                    # Estilos CSS3 modernos (tema escutista verde floresta / ouro)
├── README.md                     # Documentação do projeto
└── js/
    ├── app.js                    # Controlador da UI, gestão de eventos e ligação à lógica
    └── ciphers/
        ├── cipherRegistry.js     # Registo central e gestor extensível de cifras
        ├── dataCipher.js
        ├── invertedAlphabetCipher.js
        ├── transposedCipher.js
        ├── passaNMelrosCipher.js
        ├── numeralAlphabetCipher.js
        ├── romanoArabeCipher.js
        ├── metadesCipher.js
        ├── vogaisPorPontosCipher.js
        ├── caranguejoCipher.js
        ├── chaveMaisCipher.js
        ├── ultimaLetraFalsaCipher.js
        ├── primeiraLetraFalsaCipher.js
        ├── palavrasSeguidasCipher.js
        ├── palavrasDivididasCipher.js
        ├── batalhaNavalComChaveCipher.js
        └── caracolCipher.js
```

---

## 🚀 Como Aceder / Executar

### Opção 1: Consultar Online (Recomendado)
Aceda diretamente à aplicação pronta a usar sem necessidade de instalações:
👉 **[https://hubnelson.github.io/cifras-mini-manual/](https://hubnelson.github.io/cifras-mini-manual/)**

### Opção 2: Abrir diretamente no navegador (Local)
Dê duplo clique ou abra o ficheiro `index.html` em qualquer navegador web moderno (Chrome, Safari, Firefox, Edge).

### Opção 3: Servidor Local (Opcional)
Se preferir utilizar um servidor HTTP estático simples, pode executar no terminal dentro da pasta do projeto:

```bash
python3 -m http.server 8080
```
Depois aceda no navegador a: `http://localhost:8080`

---

## 🛠️ Como Adicionar Novas Cifras

O projeto foi desenhado com uma arquitetura modular baseada em ES6 Modules para permitir adicionar novas cifras facilmente:

1. Crie um novo ficheiro `.js` na pasta `js/ciphers/` (ex: `js/ciphers/cifraAmazonia.js`).
2. Defina o objeto da cifra exportado:
   ```javascript
   export const cifraAmazonia = {
       id: 'amazonia',
       name: 'A-MAZONIA',
       description: 'Descrição de como funciona a cifra...',
       example: 'Entrada: ...\nSaída: ...',
       encode(text) {
           // Algoritmo de codificação
           return text;
       },
       decode(text) {
           // Algoritmo de descodificação
           return text;
       }
   };
   ```
3. Importe e registe a cifra no ficheiro `js/ciphers/cipherRegistry.js`:
   ```javascript
   import { cifraAmazonia } from './cifraAmazonia.js';

   // Dentro do construtor:
   this.register(cifraAmazonia);
   ```

---

## ⚜️ Sempre Alerta para servir
Desenvolvido para atividades escutistas e jogos de pistas.
