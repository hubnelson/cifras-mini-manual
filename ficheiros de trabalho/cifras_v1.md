# Mini Manual Escutista - Cifras

> Versão em Markdown baseada no Mini Manual Escutista.
>
> Este documento pretende servir como manual de consulta e base de conhecimento,
> mantendo a informação original mas reorganizada numa estrutura consistente.
>
> Para cada cifra são apresentados:
>
> - Descrição
> - Tipo de cifra
> - Grau de dificuldade
> - Procedimento de codificação
> - Procedimento de descodificação
> - Tabelas
> - Exemplos
> - Observações

---

# Índice

1. Código Braille Falso
2. Data
3. Alfabeto Invertido
4. Transposto
5. Passa Um Melro
6. Passa Dois Melros
7. Alfabeto Numeral
8. Alfabeto Numeral com Chave
9. Romano-Árabe
10. Metades
11. Grelha
12. Vogais por Pontos
13. Caranguejo
14. Frase 1
15. Frase 2
16. Chave +3
17. Código Chinês 1
18. Código Chinês 2
19. Angular 1
20. Angular 2
21. Última Letra Falsa
22. Batalha Naval com Chave
23. Batalha Naval sem Chave
24. Mensagens Invisíveis
25. Caracol
26. Primeira Letra Falsa
27. Palavra-Chave 1
28. Palavra-Chave 2
29. Palavra-Chave 3
30. Palavras Seguidas
31. Palavras Divididas
32. Tabela de Figuras
33. Código Braille

---

# Código Braille Falso

## Tipo

Cifra por posição.

## Dificuldade

⭐ Fácil

## Descrição

Esta cifra utiliza três quadrados de 3 × 3 para distribuir o alfabeto.

Cada letra é representada pela sua posição dentro destes quadrados.

O código é constituído por três algarismos:

1. Número do quadrado;
2. Número da linha;
3. Número da coluna.

Apesar do nome, esta cifra **não corresponde ao verdadeiro alfabeto Braille**.

É apenas uma forma geométrica de representar as letras.

---

## Tabela

### Quadrado 1

|     | 1 | 2 | 3 |
|-----|---|---|---|
| **1** | A | B | C |
| **2** | D | E | F |
| **3** | G | H | I |

### Quadrado 2

|     | 1 | 2 | 3 |
|-----|---|---|---|
| **1** | J | K | L |
| **2** | M | N | O |
| **3** | P | Q | R |

### Quadrado 3

|     | 1 | 2 | 3 |
|-----|---|---|---|
| **1** | S | T | U |
| **2** | V | W | X |
| **3** | Y | Z | |

---

## Como codificar

Para cada letra:

1. Localizar o quadrado.
2. Identificar a linha.
3. Identificar a coluna.
4. Escrever os três números.

---

## Como descodificar

1. Ler três algarismos.
2. O primeiro identifica o quadrado.
3. O segundo identifica a linha.
4. O terceiro identifica a coluna.

A intersecção corresponde à letra.

---

## Exemplo

### F

```
Quadrado 1
Linha 2
Coluna 3
```

Resultado

```
123
```

### T

```
Quadrado 3
Linha 1
Coluna 2
```

Resultado

```
312
```

---

## Observações

Esta cifra é extremamente rápida de aprender.

É muito utilizada para iniciação às cifras escutistas.

Pode facilmente ser combinada com outras cifras para aumentar a dificuldade.

---

# Data

## Tipo

Cifra por tabela.

## Dificuldade

⭐⭐ Fácil

## Descrição

Cada letra corresponde a uma data representada por dois algarismos.

O primeiro algarismo identifica a linha da tabela.

O segundo identifica a coluna.

Quem codifica e quem descodifica devem utilizar exatamente a mesma tabela.

---

## Tabela

> **Nota**
>
> A tabela original do Mini Manual é apresentada graficamente.
>
> Na versão definitiva deste documento será recriada exatamente em Markdown,
> mantendo a mesma disposição do original.

---

## Como codificar

1. Procurar a letra.
2. Ler os dois números associados.
3. Escrever esses números.
4. Repetir para todas as letras.

---

## Como descodificar

1. Separar a mensagem em grupos de dois algarismos.
2. Procurar cada par na tabela.
3. Escrever a letra correspondente.

---

## Exemplo

Mensagem

```
ALERTA
```

Resultado

```
11 92 15 98 90 11
```

---

## Observações

É uma cifra simples.

A segurança depende inteiramente da confidencialidade da tabela utilizada.

 ---

# Alfabeto Invertido

## Tipo

Cifra por substituição.

## Dificuldade

⭐ Muito Fácil

## Descrição

O **Alfabeto Invertido** consiste em substituir cada letra pela letra que ocupa a posição simétrica no alfabeto.

Ou seja:

- A torna-se Z
- B torna-se Y
- C torna-se X
- ...
- Z torna-se A

É uma das cifras clássicas de substituição e não necessita de qualquer chave.

---

## Tabela

| Alfabeto | A | B | C | D | E | F | G | H | I | J | K | L | M |
|----------|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cifra    | Z | Y | X | W | V | U | T | S | R | Q | P | O | N |

| Alfabeto | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|----------|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cifra    | M | L | K | J | I | H | G | F | E | D | C | B | A |

---

## Como codificar

1. Escrever a mensagem.
2. Substituir cada letra pela correspondente da segunda linha da tabela.
3. Manter os espaços e a pontuação, caso pretendido.

---

## Como descodificar

Como a correspondência é simétrica, utiliza-se exatamente a mesma tabela.

Basta substituir novamente cada letra.

---

## Exemplo

Mensagem

```text
ESCUTEIRO
```

Codificação

```text
VHXFGVRIL
```

---

## Observações

Esta é uma cifra extremamente simples.

É frequentemente utilizada em conjunto com outras cifras para aumentar a dificuldade da descodificação.

---

# Transposto

## Tipo

Cifra por substituição com chave.

## Dificuldade

⭐⭐ Fácil

## Descrição

Nesta cifra o alfabeto deixa de estar na ordem habitual.

É construída uma nova sequência de letras utilizando uma **palavra-chave**.

Primeiro escrevem-se as letras da palavra-chave, eliminando as repetições.

Depois acrescentam-se todas as restantes letras do alfabeto que ainda não tenham sido utilizadas.

O novo alfabeto passa a ser utilizado para substituir todas as letras da mensagem.

---

## Construção da tabela

### Palavra-chave

```text
ESCUTEIRO
```

### Removendo letras repetidas

```text
ESCUTIRO
```

### Acrescentando as restantes letras

```text
ESCUTIROABDFGHJKLMNPQVWXYZ
```

---

## Tabela de substituição

| Original | A | B | C | D | E | F | G | H | I | J | K | L | M |
|----------|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cifra    | E | S | C | U | T | I | R | O | A | B | D | F | G |

| Original | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|----------|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cifra    | H | J | K | L | M | N | P | Q | V | W | X | Y | Z |

> **Nota:** A tabela acima é construída a partir da palavra-chave do exemplo. Uma palavra-chave diferente origina uma tabela diferente.

---

## Como codificar

1. Escolher uma palavra-chave.
2. Eliminar letras repetidas.
3. Completar o alfabeto com as restantes letras.
4. Construir a tabela de substituição.
5. Substituir cada letra da mensagem.

---

## Como descodificar

1. Construir novamente a tabela utilizando a mesma palavra-chave.
2. Procurar cada letra na linha da cifra.
3. Substituí-la pela letra correspondente da linha do alfabeto original.

---

## Exemplo

### Palavra-chave

```text
ESCUTEIRO
```

### Mensagem

```text
ALERTA
```

### Processo

```text
A → E
L → F
E → T
R → M
T → P
A → E
```

Resultado

```text
EFTMPE
```

---

## Observações

Quanto mais invulgar for a palavra-chave, maior será a segurança da cifra.

Nunca devem existir letras repetidas na construção do novo alfabeto.

É aconselhável utilizar palavras-chave conhecidas apenas pelos intervenientes.

Esta cifra pode ser facilmente combinada com outras, como:

- Alfabeto Numeral;
- Chave +3;
- Passa Um Melro;
- Passa Dois Melros.

A utilização de duas ou mais cifras em sequência aumenta significativamente a dificuldade de descodificação.

---

---

# Passa Um Melro

## Tipo

Cifra por ocultação.

## Dificuldade

⭐ Muito Fácil

## Descrição

A cifra **Passa Um Melro** consiste em introduzir **uma letra falsa** entre cada letra da mensagem.

As letras falsas podem ser escolhidas aleatoriamente ou segundo uma regra previamente combinada entre quem envia e quem recebe a mensagem.

À primeira vista, a mensagem parece uma sequência de letras sem significado.

---

## Princípio de funcionamento

```
Mensagem original

E  S  C  U  T  A
│  │  │  │  │  │

Introduzindo uma letra falsa entre cada letra

E X S A C M U P T R A

```

Na descodificação basta eliminar uma letra em cada duas.

---

## Como codificar

1. Escrever a primeira letra da mensagem.
2. Inserir uma letra falsa.
3. Escrever a letra seguinte.
4. Inserir outra letra falsa.
5. Repetir até terminar.

---

## Como descodificar

Ler apenas:

- a 1.ª letra;
- a 3.ª;
- a 5.ª;
- a 7.ª;
- ...

Ignoram-se todas as restantes.

---

## Exemplo

Mensagem

```text
ESCUTA
```

Codificação

```text
EXSACMUPTRA
```

Descodificação

```text
ESCUTA
```

---

## Variações

A letra falsa pode:

- ser totalmente aleatória;
- seguir uma sequência previamente definida;
- ser sempre a mesma letra.

Quanto menos previsível for a regra utilizada, maior será a dificuldade da descodificação.

---

## Observações

É uma das primeiras cifras ensinadas aos escuteiros devido à sua simplicidade.

É frequentemente utilizada em conjunto com outras cifras.

---

# Passa Dois Melros

## Tipo

Cifra por ocultação.

## Dificuldade

⭐⭐ Fácil

## Descrição

O funcionamento é semelhante ao **Passa Um Melro**.

A diferença é que são introduzidas **duas letras falsas** entre cada letra verdadeira da mensagem.

---

## Princípio de funcionamento

```
Mensagem

E  S  C  U  T  A

↓

E X M S T B C P H U R F T A Q A

```

Cada letra verdadeira fica separada por duas letras falsas.

---

## Como codificar

1. Escrever uma letra da mensagem.
2. Acrescentar duas letras falsas.
3. Escrever a letra seguinte.
4. Repetir até terminar.

---

## Como descodificar

Ler apenas:

- a primeira letra;
- depois de três em três caracteres.

Ou seja:

```
1
4
7
10
13
...
```

---

## Exemplo

Mensagem

```text
JANTAR AS FEBRAS
```

Codificação (exemplo do manual)

```text
JIMASUNAETIMASRRASAMISSUFRIEMIBURRINATOSAS
```

Descodificação

```text
JANTAR AS FEBRAS
```

---

## Variações

É possível construir outras variantes:

- Passa Três Melros
- Passa Quatro Melros
- Passa Cinco Melros

Bastará aumentar o número de letras falsas introduzidas entre cada letra verdadeira.

---

## Comparação

| Cifra | Letras falsas |
|--------|---------------|
| Passa Um Melro | 1 |
| Passa Dois Melros | 2 |
| Passa Três Melros | 3 |

---

## Observações

Quanto maior for o número de letras falsas, maior será o comprimento da mensagem codificada e mais difícil será identificar o padrão.

Tal como o Passa Um Melro, esta cifra é normalmente utilizada em conjunto com outras técnicas de codificação.

---
---

# Passa Um Melro

## Tipo

Cifra por ocultação.

## Dificuldade

⭐ Muito Fácil

## Descrição

A cifra **Passa Um Melro** consiste em introduzir **uma letra falsa** entre cada letra da mensagem.

As letras falsas podem ser escolhidas aleatoriamente ou segundo uma regra previamente combinada entre quem envia e quem recebe a mensagem.

À primeira vista, a mensagem parece uma sequência de letras sem significado.

---

## Princípio de funcionamento

```
Mensagem original

E  S  C  U  T  A
│  │  │  │  │  │

Introduzindo uma letra falsa entre cada letra

E X S A C M U P T R A

```

Na descodificação basta eliminar uma letra em cada duas.

---

## Como codificar

1. Escrever a primeira letra da mensagem.
2. Inserir uma letra falsa.
3. Escrever a letra seguinte.
4. Inserir outra letra falsa.
5. Repetir até terminar.

---

## Como descodificar

Ler apenas:

- a 1.ª letra;
- a 3.ª;
- a 5.ª;
- a 7.ª;
- ...

Ignoram-se todas as restantes.

---

## Exemplo

Mensagem

```text
ESCUTA
```

Codificação

```text
EXSACMUPTRA
```

Descodificação

```text
ESCUTA
```

---

## Variações

A letra falsa pode:

- ser totalmente aleatória;
- seguir uma sequência previamente definida;
- ser sempre a mesma letra.

Quanto menos previsível for a regra utilizada, maior será a dificuldade da descodificação.

---

## Observações

É uma das primeiras cifras ensinadas aos escuteiros devido à sua simplicidade.

É frequentemente utilizada em conjunto com outras cifras.

---

# Passa Dois Melros

## Tipo

Cifra por ocultação.

## Dificuldade

⭐⭐ Fácil

## Descrição

O funcionamento é semelhante ao **Passa Um Melro**.

A diferença é que são introduzidas **duas letras falsas** entre cada letra verdadeira da mensagem.

---

## Princípio de funcionamento

```
Mensagem

E  S  C  U  T  A

↓

E X M S T B C P H U R F T A Q A

```

Cada letra verdadeira fica separada por duas letras falsas.

---

## Como codificar

1. Escrever uma letra da mensagem.
2. Acrescentar duas letras falsas.
3. Escrever a letra seguinte.
4. Repetir até terminar.

---

## Como descodificar

Ler apenas:

- a primeira letra;
- depois de três em três caracteres.

Ou seja:

```
1
4
7
10
13
...
```

---

## Exemplo

Mensagem

```text
JANTAR AS FEBRAS
```

Codificação (exemplo do manual)

```text
JIMASUNAETIMASRRASAMISSUFRIEMIBURRINATOSAS
```

Descodificação

```text
JANTAR AS FEBRAS
```

---

## Variações

É possível construir outras variantes:

- Passa Três Melros
- Passa Quatro Melros
- Passa Cinco Melros

Bastará aumentar o número de letras falsas introduzidas entre cada letra verdadeira.

---

## Comparação

| Cifra | Letras falsas |
|--------|---------------|
| Passa Um Melro | 1 |
| Passa Dois Melros | 2 |
| Passa Três Melros | 3 |

---

## Observações

Quanto maior for o número de letras falsas, maior será o comprimento da mensagem codificada e mais difícil será identificar o padrão.

Tal como o Passa Um Melro, esta cifra é normalmente utilizada em conjunto com outras técnicas de codificação.

---
---

# Metades

## Tipo

Cifra por transposição.

## Dificuldade

⭐⭐ Fácil

## Descrição

A cifra **Metades** consiste em distribuir alternadamente as letras da mensagem por duas linhas.

Depois de concluída a distribuição, a mensagem codificada obtém-se lendo primeiro toda a primeira linha e só depois toda a segunda linha.

---

## Princípio de funcionamento

Mensagem:

```text
CHAMAR O SOCORRISTA
```

Distribuição das letras:

| Linha 1 | C | A | A | O | O | R | S | A |
|---------|---|---|---|---|---|---|---|---|
| Linha 2 | H | M | R | S | C | R | I | T |

Mensagem cifrada:

```text
CAAOORSAHMRSCRIT
```

---

## Como codificar

1. Escrever a mensagem sem alterar a ordem das letras.
2. Colocar alternadamente uma letra na primeira linha e outra na segunda.
3. Quando todas as letras estiverem distribuídas, ler:
   - toda a primeira linha;
   - seguida de toda a segunda linha.

---

## Como descodificar

1. Dividir a mensagem codificada em duas partes iguais.
2. Colocar cada metade numa linha.
3. Ler alternadamente uma letra de cada linha.

---

## Exemplo

Mensagem original

```text
CHAMAR O SOCORRISTA
```

Mensagem codificada

```text
CAAOORSAHMRSCRIT
```

---

## Observações

Caso a mensagem tenha um número ímpar de letras, deve acrescentar-se uma letra qualquer no final para equilibrar as duas linhas.

---

# Grelha

## Tipo

Cifra por grelha.

## Dificuldade

⭐⭐⭐ Média

## Descrição

A cifra **Grelha** utiliza um cartão perfurado (ou uma grelha previamente conhecida) para esconder a posição real das letras.

As restantes posições da grelha são preenchidas com letras aleatórias.

Sem possuir a grelha correta é extremamente difícil descobrir quais são as letras verdadeiras.

---

## Princípio de funcionamento

Exemplo utilizado no manual:

```text
TRAZER A TENDA
```

É construída uma grelha.

Algumas posições são reservadas para a mensagem.

Todas as restantes casas recebem letras aleatórias.

Exemplo simplificado:

| T | I | R | A |
|---|---|---|---|
| U | Z | E | M |
| R | A | M | C |
| A | T | R | E |
| N | D | I | A |

Apenas determinadas posições pertencem à mensagem.

---

## Como codificar

1. Construir uma grelha quadrada.
2. Definir previamente as posições válidas.
3. Escrever a mensagem nessas posições.
4. Preencher todas as restantes casas com letras aleatórias.

---

## Como descodificar

Utilizando exatamente a mesma grelha.

Só são lidas as casas previamente definidas.

---

## Exemplo

Mensagem

```text
TRAZER A TENDA
```

Resultado

Conforme grelha apresentada no manual.

---

## Observações

Esta cifra é bastante segura porque a chave não é uma palavra, mas sim a própria grelha.

Mesmo conhecendo a técnica, sem a grelha correta é muito difícil recuperar a mensagem.

---

# Vogais por Pontos

## Tipo

Cifra por substituição.

## Dificuldade

⭐ Muito Fácil

## Descrição

Todas as vogais são substituídas por um ponto (`.`).

As consoantes permanecem inalteradas.

---

## Princípio de funcionamento

```text
A → .
E → .
I → .
O → .
U → .
```

---

## Como codificar

Percorrer toda a mensagem.

Sempre que surgir uma vogal:

- substituí-la por um ponto.

Todas as restantes letras permanecem iguais.

---

## Como descodificar

O destinatário deverá reconstruir mentalmente as vogais.

Esta cifra depende muito do contexto da mensagem.

---

## Exemplo

Mensagem

```text
SEMPRE ALERTA
```

Resultado

```text
S.MPR. .L.RT.
```

---

## Observações

Isoladamente é uma cifra muito simples.

É normalmente utilizada em conjunto com outras cifras, tornando a mensagem bastante mais difícil de interpretar.

---
---

# Caranguejo

## Descrição

As letras e as palavras são escritas ao contrário.

## Exemplo

Mensagem:

```text
BOA CAÇA E SEMPRE ALERTA
```

Mensagem codificada:

```text
ATRELA ERPMES E AÇAC AOB
```

## Notas

A inversão é feita letra a letra dentro de cada palavra.

---

# Frase 1

## Descrição

Cada letra da mensagem é utilizada para começar uma palavra de uma frase.

Este código requer um bocado de imaginação, de maneira a que a frase final (com a mensagem codificada) pareça uma frase com algum sentido, ou pelo menos que leve o descodificador a pensar que se trata de alguma espécie de enigma, e não de uma mensagem codificada.

## Exemplo

Mensagem:

```text
ESCUTA
```

Mensagem codificada:

```text
ERGAM SACOS COM UVAS TODAS AMARELAS
```

---

# Frase 2

## Descrição

Idêntico ao **Frase 1**, mas usa-se a segunda letra de cada palavra.

No caso dos artigos definidos ("o" e "a") passa-se à frente.

Pode criar-se o **Frase 3**, usando a mesma metodologia.

---

# Chave +3

## Descrição

Cada letra do alfabeto corresponde à letra que está **3 posições à frente** no alfabeto.

Podemos então fazer uma tabela:

## Esquema

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | A | B | C |

Assim,

```text
A = D
B = E
```

etc.

## Exemplo

Mensagem:

```text
ESCUTA
```

Mensagem codificada:

```text
HVFXWD
```

## Notas

Este código pode ter inúmeras variações:

- +2
- +5
- -3
- -4

etc., sendo que **"-3" significa três posições atrás no alfabeto**.

---
---

# Código Chinês 1

## Descrição

Esta cifra é escrita apenas com traços horizontais e verticais. A cada traço vertical corresponde uma vogal.

As consoantes são indicadas por traços horizontais sobrepostos aos verticais.

Para escrever uma consoante, começa-se pela vogal imediatamente anterior (no alfabeto) e, por cima dos traços verticais dessa vogal, colocam-se tantos traços horizontais quanto o número de letras entre a vogal e a consoante.

Por exemplo, para a letra **P**, começamos pela vogal anterior que é o **O (IIII)**. Ora, como entre o **P** e o **O** a distância é de uma letra, apenas colocamos um traço horizontal sobre os quatro traços verticais da letra **O**.

## Esquema

### Vogais

| Letra | Representação |
|-------|---------------|
| A | `│` |
| E | `││` |
| I | `│││` |
| O | `││││` |
| U | `│││││` |

### Exemplo do alfabeto

| Letra | Representação |
|-------|---------------|
| A | `│` |
| B | `┼` |
| C | `╪` |
| D | `╫` |
| E | `││` |
| F | `╂` |
| G | `╋` |
| H | `╬` |
| I | `│││` |
| J | `╂│` |
| K | `╋│` |
| L | `╬│` |
| M | `╋╋` |
| N | `╬╬` |
| O | `││││` |
| P | `╂│││` |
| Q | `╋│││` |
| R | `╬│││` |
| S | `╬╬│` |
| T | `╬╬╬` |
| U | `│││││` |
| V | `╂││││` |
| W | `╋││││` |
| X | `╬││││` |
| Y | `╬╬││` |
| Z | `╬╬╬│` |

> **Nota:** A tabela acima representa em Unicode a lógica gráfica do esquema apresentado no manual. A disposição visual dos traços é recriada em texto, podendo variar ligeiramente conforme o tipo de letra utilizado.

## Exemplo

O exemplo do manual é a letra **P**.

1. Procura-se a vogal imediatamente anterior (**O**).
2. Escrevem-se os quatro traços verticais.
3. Acrescenta-se um traço horizontal sobre os quatro traços verticais.

---

# Código Chinês 2

## Descrição

Esta cifra é escrita apenas com traços horizontais e verticais. A cada traço vertical corresponde uma vogal.

As consoantes são indicadas por traços horizontais escritos **ao lado** dos verticais.

Para escrever uma consoante, começa-se pela vogal imediatamente anterior (no alfabeto) e, ao lado dos traços verticais dessa vogal, colocam-se tantos traços horizontais quanto o número de letras entre a vogal e a consoante.

Por exemplo, para a letra **P**, começamos pela vogal anterior que é o **O (IIII)**. Ora, como entre o **P** e o **O** a distância é de uma letra, apenas colocamos um traço horizontal ao lado dos quatro traços verticais da letra **O**.

Deve ser deixado algum espaço entre as letras para evitar confusão entre os traços de cada uma.

## Esquema

### Vogais

| Letra | Representação |
|-------|---------------|
| A | `│` |
| E | `││` |
| I | `│││` |
| O | `││││` |
| U | `│││││` |

### Exemplo do alfabeto

| Letra | Representação |
|-------|---------------|
| A | `│` |
| B | `│─` |
| C | `│═` |
| D | `│≡` |
| E | `││` |
| F | `││─` |
| G | `││═` |
| H | `││≡` |
| I | `│││` |
| J | `│││─` |
| K | `│││═` |
| L | `│││≡` |
| M | `│││≣` |
| N | `│││≣≣` |
| O | `││││` |
| P | `││││─` |
| Q | `││││═` |
| R | `││││≡` |
| S | `││││≣` |
| T | `││││≣≣` |
| U | `│││││` |
| V | `│││││─` |
| W | `│││││═` |
| X | `│││││≡` |
| Y | `│││││≣` |
| Z | `│││││≣≣` |

> **Nota:** Tal como no Código Chinês 1, esta representação utiliza caracteres Unicode para aproximar o desenho do manual.

## Exemplo

O exemplo do manual utiliza igualmente a letra **P**, construída a partir da vogal **O**, acrescentando um único traço horizontal ao lado dos quatro traços verticais.

---
---

# Angular 1

## Descrição

Este código usa símbolos angulares (90º) e pontos, retirados do esquema de codificação.

O símbolo angular é representado pelas linhas que rodeiam a letra, com ou sem ponto.

Por exemplo, a diferença entre a letra **S** e a letra **W** é que esta possui um ponto enquanto a outra não.

A ordem de disposição das letras é fixa e, no caso das duas cruzes, começa em cima e segue o sentido dos ponteiros do relógio.

## Esquema

### Grelha principal

```text
A | B | C
--+---+--
D | E | F
--+---+--
G | H | I
```

### Segunda grelha

```text
J | K | L
--+---+--
M | N | O
--+---+--
P | Q | R
```

As letras **S** a **Z** utilizam a cruz em "X", seguindo o sentido dos ponteiros do relógio.

```text
      S

V           T

      U
```

As letras **W**, **X**, **Y** e **Z** utilizam o mesmo esquema, mas acrescentando um ponto.

## Exemplo

Mensagem

```text
ALERTA
```

Representação gráfica conforme o esquema do manual.

Mensagem

```text
SUZY
```

Representação gráfica conforme o esquema do manual.

## Notas

As letras que utilizam o mesmo símbolo distinguem-se pela presença ou ausência do ponto.

---

# Angular 2

## Descrição

Este código usa símbolos angulares (90º) e pontos, retirados do esquema de codificação.

O símbolo angular é representado pelas linhas que rodeiam a letra e por um ponto que indica a posição relativa entre as linhas.

Por exemplo, as letras **A** e **B** usam as mesmas linhas, mas o **A** tem um ponto mais à esquerda e o **B** um ponto mais à direita, devido às suas posições.

No caso da cruz, começa em cima à esquerda e segue o sentido dos ponteiros do relógio.

## Esquema

### Grelha principal

```text
A B | C D | E F
----+-----+----
G H | I J | K L
----+-----+----
M N | O P | Q R
```

### Cruz

```text
      T

S           U

Z           V

      Y
        X
```

## Exemplo

Mensagem

```text
ALERTA
```

Representação gráfica conforme o esquema do manual.

Mensagem

```text
SUZY
```

Representação gráfica conforme o esquema do manual.

## Notas

Neste código, a posição do ponto faz parte da codificação e permite distinguir letras que utilizam o mesmo símbolo angular.

---

# Última Letra Falsa

## Descrição

A última letra de cada palavra da mensagem codificada é falsa.

Por isso, para descodificar, basta eliminar as últimas letras.

Para dificultar ainda mais, podem-se cortar as palavras ao meio.

## Exemplo

Mensagem

```text
AS TENDAS FICAM MONTADAS JUNTO AO RIO
```

Mensagem codificada

```text
ASO TENDO ASO FIM CAME MONA TADASE JUL NTOU AOR RIOP
```

ou

```text
ASO TENDO ASO FIM CAME MONA TADASE JUL NTOU AOR
RIOP
```

## Notas

A letra acrescentada no final de cada palavra não tem qualquer significado.

A divisão das palavras pode ser alterada para dificultar ainda mais a leitura da mensagem.

---
---

# Batalha Naval com Chave

## Descrição

É feita uma tabela estilo Batalha Naval, 5 linhas por 5 colunas, onde as letras do alfabeto são dispostas ordenadamente, começando na letra a seguir à letra-chave.

Por exemplo, se a letra-chave for **"J"**, essa letra não é escrita nem pode ser codificada, e começa-se a preencher a tabela com a letra seguinte, **"K"**.

## Esquema

**Letra-chave: J**

|   | A | B | C | D | E |
|---|---|---|---|---|---|
| **1** | K | L | M | N | O |
| **2** | P | Q | R | S | T |
| **3** | U | V | W | X | Y |
| **4** | Z | A | B | C | D |
| **5** | E | F | G | H | I |

Assim,

```text
A = B4
T = E2
C = D4
```

## Exemplo

Mensagem:

```text
CHAMAR A JOANA
```

Resultado:

```text
D4 D5 B4 C1 B4 C2 B4 ... E1 B4 D1 B4
```

---

# Batalha Naval sem Chave

## Descrição

É feita uma tabela estilo Batalha Naval, com o mesmo número de linhas e de colunas, que fica ao critério da pessoa que codifica.

As letras usadas na mensagem são dispostas aleatoriamente na tabela, misturadas com outras letras que não têm nada a ver com a mensagem.

Para descodificar é preciso, obrigatoriamente, ter uma tabela igual à que o codificador usou.

As letras são codificadas fazendo referência às quadrículas respetivas.

## Esquema

|   | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| **1** | A | C | E | R | A | M |
| **2** | C | H | U | N | G | A |
| **3** | N | E | L | J | I | O |
| **4** | C | I | A | N | V | U |
| **5** | R | A | T | A | X | U |
| **6** | A | L | O | Q | U | M |

## Exemplo

Mensagem:

```text
CHAMAR A JOANA
```

Resultado:

```text
B1 B2 E1 F6 E1 A5 E1 D3 C6 E1 A3 E1
```

---

# Mensagens Invisíveis

## Descrição

Usa-se uma "tinta" especial, invisível, que não deixa marca no papel.

As "tintas" mais usadas são:

- sumo de limão;
- sumo de batata;
- leite;
- sabão.

Escreve-se com um pincel fino ou com a cabeça de um fósforo, para evitar que o papel fique marcado.

Para ler, basta aproximar o papel de uma fonte de calor (vela, fósforo, fogueira, etc.) e as letras ficarão visíveis.

**Cuidado para não queimares o papel.**

---
---

# Caracol

## Descrição

O código **Caracol** precisa de uma chave, tanto para codificar como para descodificar, e que é simplesmente um número.

Este número corresponde à altura (e largura) da tabela.

Vamos dar o exemplo de um **Caracol 6**, uma mensagem que queremos codificar.

O número de letras da mensagem a codificar tem de ser sempre igual ou inferior ao quadrado da chave; neste caso, a mensagem tem de ter menos de **36 (6 × 6)** letras.

Uma mensagem com 24 ou 25 letras não deveria ser escrita com Caracol 6, mas sim com **Caracol 5 (5 × 5 = 25)**.

Mensagem:

```text
ACAMPAMENTO JUNTO AO RIO COM FOGUEIRA
```

As letras são dispostas em caracol, no sentido contrário aos ponteiros do relógio.

Os espaços que sobram devem ser preenchidos com letras ao acaso.

## Esquema

Caracol 6

| A | I | R | O | A | O |
|---|---|---|---|---|---|
| C | O | A | R | I | T |
| A | C | L | A | E | N |
| M | O | T | U | U | U |
| P | M | F | O | G | J |
| A | M | E | N | T | O |

A mensagem cifrada é, então, obtida lendo normalmente na horizontal:

```text
AIROAOCOARITACLAENMOTUUUPMFOGJAMENTO
```

## Como decifrar

1. Contar quantas letras tem a mensagem.
2. Calcular a raiz quadrada desse número para determinar as dimensões da grelha.
3. Colocar as letras na tabela, pela ordem horizontal.
4. Ler a mensagem em caracol.

---

# Primeira Letra Falsa

## Descrição

A primeira letra de cada palavra da mensagem codificada é falsa.

Por isso, para descodificar, basta eliminar as primeiras letras.

Para dificultar ainda mais, podem-se cortar as palavras ao meio.

## Exemplo

Mensagem:

```text
AS TENDAS FICAM MONTADAS JUNTO AO RIO
```

Mensagem codificada:

```text
LAS ATEN UDAS AFIC RAM SMON ATADAS AJU ONTO NAOR BIO
```

Outra forma de apresentar a mesma mensagem:

```text
LAS ATEN
UDAS AFIC
RAM SMON
ATADAS AJU
ONTO NAOR
BIO
```

Depois de eliminar as primeiras letras de cada palavra obtém-se novamente:

```text
AS TENDAS FICAM MONTADAS JUNTO AO RIO
```

---
---

# Palavra-Chave 1

## Descrição

Escolhe-se uma palavra-chave, que não deve ter qualquer significado.

Coloca-se uma letra desta chave entre cada duas letras da mensagem.

## Exemplo

Palavra-chave:

```text
SHZUMJB
```

Mensagem:

```text
A PISTA COMEÇA NO LARGO
```

Mensagem cifrada:

```text
ASPHIZSUTMAJCBOSMHEZÇUAMNJOBLSAHRZGUOM
```

Para decifrar, cortam-se as letras da palavra-chave.

---

# Palavra-Chave 2

## Descrição

Escolhe-se uma palavra ou frase curta para servir de chave.

Exemplo de chave:

```text
SEMPRE ALERTA
```

### 1.º passo

Escrever a chave, retirando as letras repetidas.

```text
SEMPRE ALERTA
↓
SEMPRALT
```

### 2.º passo

Escrever uma linha de 13 letras, começando com as letras obtidas e continuando com a sequência do alfabeto, desde o seu início, sem nunca repetir uma letra.

```text
SEMPRALT
↓
SEMPRALTBCDFG
```

### 3.º passo

Completar uma segunda linha com 13 letras, utilizando as restantes letras do alfabeto, sem repetir nenhuma.

## Esquema

| S | E | M | P | R | A | L | T | B | C | D | F | G |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| H | I | J | K | N | O | Q | U | V | W | X | Y | Z |

Com esta tabela pode começar-se a cifrar ou decifrar a mensagem, sendo que as letras de cima correspondem às de baixo e vice-versa.

Exemplos:

```text
A = O
S = H
D = X
```

## Exemplo

Mensagem:

```text
ESCUTEIRO
```

Resultado:

```text
IHWTUINA
```

### Nota

No caso de a chave ser uma frase grande e no primeiro passo ainda sobrarem letras, continua-se na segunda linha.

---

# Palavra-Chave 3

## Descrição

Escolhe-se uma palavra ou frase curta para servir de chave.

Exemplo de chave:

```text
BROWNSEA
```

Escreve-se a chave numa tabela, retirando as letras repetidas.

Por baixo, continua-se com a sequência do alfabeto, desde o seu início, sem nunca repetir uma letra.

## Esquema

| B | R | O | W | N | S | E | A |
|---|---|---|---|---|---|---|---|
| C | D | F | G | H | I | J | K |
| L | M | P | Q | T | U | V | X |
| Y | Z |   |   |   |   |   |   |

De seguida, faz-se uma nova tabela, escrevendo na primeira linha a sequência de colunas da tabela anterior (começando de cima para baixo e da direita para a esquerda).

Na segunda linha escrevem-se todas as letras do alfabeto, por ordem.

Para decifrar também é necessário construir estas tabelas.

## Esquema

Depois de construída a primeira tabela, faz-se uma segunda tabela.

As letras da primeira linha correspondem às colunas da tabela anterior, lidas **de cima para baixo e da direita para a esquerda**.

A segunda linha contém o alfabeto por ordem normal.

### Exemplo

| B | C | L | Y | R | D | M | Z | O | F | P | W | G | Q | N | H | T | S | I | U | E | J | V | A | K | X |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |

As letras de cima correspondem às de baixo.

Exemplos:

```text
C = L
E = R
O = N
```

Para cifrar, procura-se a letra que queremos na linha de baixo e usa-se a correspondente da linha de cima.

Para decifrar, procura-se a letra na linha de cima e utiliza-se a correspondente da linha de baixo.

## Exemplo

Mensagem:

```text
ESCUTEIRO
```

Mensagem cifrada:

```text
RILEUROSN
```

---

# Palavras Seguidas

## Descrição

Consiste em escrever todas as palavras seguidas, eliminando os espaços.

## Exemplo

```text
SAIRDOCAMPOÀSNOVEHORAS E
PROCURAROCHEFEÀPORTADAIGREJA
```

---

# Palavras Divididas

## Descrição

Consiste em dividir as palavras da mensagem em grupos de letras diferentes dos originais, dificultando a identificação das palavras.

## Exemplo

```text
SA IRDOC AMPO ÀSNO VEHO RASEPRO CUR AROCH EFEÀ PO
RTAD AIG REJA
```

---

# Tabela de Figuras

## Descrição

Faz-se uma tabela com várias figuras, as quais possam facilmente ser identificadas.

Para escrever a mensagem, espalham-se as sílabas dos nomes das figuras entre as sílabas das palavras do texto, sem deixar espaços.

Para decifrar, é necessário conhecer o quadro e, depois, basta riscar as sílabas dos nomes das figuras.

## Esquema

Exemplo de figuras utilizadas no manual:

| Borboleta | Canguru | Gato |
|-----------|----------|------|
| Tesoura | Machado | Telefone |
| Morcego | Chave | Casa |

## Exemplo

Mensagem codificada:

```text
AOBORLABODOLETADACANFONGUTERUESGATÁTOUMTEENVE
SOURALOMARPECOMTEMETALODETEDASLECOORDEFONANE
DASMOREAECOUGOTRACHAMEVETADECANATENSADA
```

Após eliminar as sílabas correspondentes aos nomes das figuras, obtém-se a mensagem original.

---

# Código Braille

## Descrição

Utiliza o alfabeto Braille para representar cada letra.

## Esquema

O manual apresenta o alfabeto Braille completo, de **A** a **Z**, utilizando a representação normalizada de seis pontos.

Na edição digital recomenda-se utilizar a codificação Unicode Braille:

| Letra | Braille | Letra | Braille |
|-------|---------|-------|---------|
| A | ⠁ | N | ⠝ |
| B | ⠃ | O | ⠕ |
| C | ⠉ | P | ⠏ |
| D | ⠙ | Q | ⠟ |
| E | ⠑ | R | ⠗ |
| F | ⠋ | S | ⠎ |
| G | ⠛ | T | ⠞ |
| H | ⠓ | U | ⠥ |
| I | ⠊ | V | ⠧ |
| J | ⠚ | W | ⠺ |
| K | ⠅ | X | ⠭ |
| L | ⠇ | Y | ⠽ |
| M | ⠍ | Z | ⠵ |

> **Nota:** O Mini Manual apresenta os caracteres em representação gráfica de pontos. Nesta edição digital utiliza-se o bloco Unicode Braille, que preserva exatamente o mesmo significado.

---