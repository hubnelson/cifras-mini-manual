# Cifras Escutistas - Mini Manual

Aplicação web moderna, responsiva e 100% autónoma (Vanilla HTML, CSS e JavaScript sem dependências externas nem bases de dados) concebida para codificar e descodificar mensagens cifradas de manuais escutistas.

---

## 🌟 Funcionalidades

- **Codificação e Descodificação**: Alternador intuitivo entre modo de codificação e descodificação.
- **Acionamento Manual por Botão**: Processamento da mensagem ao clicar nos botões dedicados ("Codificar Mensagem" ou "Descodificar Mensagem").
- **Explicação Dinâmica da Cifra**: Cartão explicativo com descrição detalhada do funcionamento da cifra selecionada e um exemplo prático.
- **Utilitários Úteis**:
  - Botão **Limpar** para reiniciar rapidamente a caixa de entrada.
  - Botão **Copiar Resultado** com feedback visual *Toast* instantâneo.
  - Estatísticas em tempo real do número de carateres e palavras.
- **100% Local & Sem Dependências**: Executa em qualquer navegador web diretamente a partir do ficheiro `index.html`.

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
        └── sampleCipher.js       # Algoritmo de exemplo demonstrativo (Vogais Numéricas)
```

---

## 🚀 Como Executar

Não é necessária qualquer instalação ou processo de compilação (*build*).

### Opção 1: Abrir diretamente no navegador
Dê duplo clique ou abra o ficheiro `index.html` em qualquer navegador web modern (Chrome, Safari, Firefox, Edge).

### Opção 2: Servidor Local (Opcional)
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

## ⚜️ Sempre Alerta!
Desenvolvido para atividades escutistas e jogos de pistas.
