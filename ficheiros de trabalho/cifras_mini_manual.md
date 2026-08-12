# Mini Manual Escutista - Cifras

## Índice

1. Código Braille Falso
2. Data
3. Alfabeto Invertido
4. Transposto
5. Passa um Melro
6. Passa dois Melros
7. Alfabeto Numeral
8. Alfabeto Numeral com Chave
9. Romano-Árabe
10. Metades
11. Vogais por Pontos

---

# Código Braille Falso

## Descrição

O Código Braille Falso utiliza três quadrados de 3 × 3 para representar todas as letras do alfabeto.

Cada letra é identificada por um conjunto de três números:

1. Número do quadrado.
2. Linha dentro do quadrado.
3. Coluna dentro do quadrado.

Assim, cada letra é convertida numa sequência de três algarismos.

Este método não corresponde ao verdadeiro alfabeto Braille, utilizando apenas uma organização geométrica das letras.

## Tabela

### Quadrado 1

|     | Col. 1 | Col. 2 | Col. 3 |
|-----|--------|--------|--------|
| Linha 1 | A | B | C |
| Linha 2 | D | E | F |
| Linha 3 | G | H | I |

### Quadrado 2

|     | Col. 1 | Col. 2 | Col. 3 |
|-----|--------|--------|--------|
| Linha 1 | J | K | L |
| Linha 2 | M | N | O |
| Linha 3 | P | Q | R |

### Quadrado 3

|     | Col. 1 | Col. 2 | Col. 3 |
|-----|--------|--------|--------|
| Linha 1 | S | T | U |
| Linha 2 | V | W | X |
| Linha 3 | Y | Z | |

## Procedimento

Para cada letra:

1. Identificar em que quadrado se encontra.
2. Identificar a linha.
3. Identificar a coluna.
4. Escrever os três números consecutivamente.

## Exemplo

Segundo o exemplo apresentado no manual:

```
F

Quadrado: 1
Linha:    2
Coluna:   3

Resultado: 123
```

Outro exemplo:

```
T

Quadrado: 3
Linha:    1
Coluna:   2

Resultado: 312
```

## Notas

- Cada letra é representada sempre por três algarismos.
- O código depende apenas da posição da letra na grelha.

---

# Data

## Descrição

A cifra "Data" utiliza uma tabela onde:

- as linhas representam a dezena do ano;
- as colunas representam a unidade do ano.

Cada cruzamento corresponde a uma letra.

Assim, uma sequência de dois algarismos pode representar uma letra.

## Tabela

A tabela apresentada no manual distribui todas as letras do alfabeto por uma grelha numérica organizada por datas.

(Será reproduzida integralmente na versão final do documento.)

## Procedimento

1. Procurar a letra na tabela.
2. Identificar os dois números correspondentes.
3. Escrever esses dois números.
4. Repetir para todas as letras da mensagem.

## Exemplo

O manual apresenta o seguinte exemplo:

```
ALERTA

↓

11 92 15 98 90 11
```

## Notas

- Cada letra corresponde sempre a dois algarismos.
- A mesma tabela deve ser utilizada por quem codifica e por quem descodifica.

---

# Alfabeto Invertido

## Descrição

Esta cifra consiste em substituir cada letra pela letra correspondente na posição simétrica do alfabeto.

O primeiro carácter do alfabeto corresponde ao último, o segundo ao penúltimo, e assim sucessivamente.

### Correspondência

| Normal | A | B | C | D | E | F | G | H | I | J | K | L | M |
|--------|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cifra  | Z | Y | X | W | V | U | T | S | R | Q | P | O | N |

| Normal | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|--------|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cifra  | M | L | K | J | I | H | G | F | E | D | C | B | A |

## Procedimento

1. Escrever o alfabeto.
2. Escrever imediatamente por baixo o alfabeto em sentido inverso.
3. Substituir cada letra da mensagem pela correspondente.

## Exemplo

Mensagem:

```
ESCUTEIRO
```

Resultado:

```
VHXFGVRIL
```

## Notas

- A mesma tabela serve para codificar e descodificar.
- É uma cifra por substituição simples.

---

# Transposto

## Descrição

Por baixo do alfabeto normal, escreve-se mesmo o alfabeto, mas começando na letra chave do código que, neste exemplo, é a letra V ( então A = V ). As letras de baixo são a codificação das de cima.

### Correspondência

| Normal | A | B | C | D | E | F | G | H | I | J | K | L | M |
|--------|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cifra  | V | W | X | Y | Z | A | B | C | D | E | F | G | H |

| Normal | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|--------|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cifra  | I | J | K | L | M | N | O | P | Q | R | S | T | U |

## Procedimento

1. Escrever o alfabeto.
2. Escrever a letra chave por baixo do A
3. Escrever as restantes letras do alfabeto.
4. Construir a tabela de substituição.

## Exemplo

Palavra-chave:

```
ESCUTEIRO
```

Tabela:

```
ZNXPOZDMJ
```

(continuada pelas restantes letras não utilizadas)

## Notas

- Quem recebe a mensagem tem de conhecer previamente a letra-chave.

---

# Passa um Melro

## Descrição

Entre cada letra verdadeira da mensagem é introduzida uma letra falsa.

A letra falsa pode ser escolhida aleatoriamente ou segundo uma regra previamente combinada.

Na descodificação basta eliminar uma letra sim e outra não.

## Procedimento

1. Escrever a primeira letra da mensagem.
2. Introduzir uma letra falsa.
3. Escrever a letra seguinte.
4. Repetir até terminar.

## Exemplo

Mensagem:

```
ESCUTA
```

Codificação:

```
EASBCDUETFAG
```

Descodificação:

```
ESCUTA
```

## Notas

- As letras falsas não têm qualquer significado.
- A dificuldade depende da aleatoriedade das letras introduzidas.

---

# Passa dois Melros

## Descrição

Semelhante ao "Passa um Melro", mas são inseridas duas letras falsas entre cada letra verdadeira.

Para descodificar conserva-se apenas uma letra em cada grupo de três.

## Procedimento

1. Escrever uma letra verdadeira.
2. Acrescentar duas letras falsas.
3. Repetir até ao final da mensagem.

## Exemplo

Mensagem:

```
ESCUTA
```

Codificação:

```
EABSCDUEFGTHIA
```

Descodificação:

```
ESCUTA
```

## Notas

- Mais difícil de identificar do que o "Passa um Melro".
- Pode ser adaptado para três ou mais letras falsas entre cada letra verdadeira.

---

# Alfabeto Numeral

## Descrição

A cada letra do alfabeto corresponde um número, de **01 a 26**, pela ordem normal.

## Tabela

| Letra | A | B | C | D | E | F | G | H | I | J | K | L | M |

|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|

| Número | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 |

| Letra | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |

|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|

| Número | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |

## Procedimento

Substituir cada letra pelo respetivo número.

A mensagem pode ser escrita:

- sem separadores;

- separando cada número por espaços.

## Exemplo

Mensagem:

```

ESCUTEIRO

```

Codificação:

```

051903212005091815

```

ou

```

05 19 03 21 20 05 09 18 15

```

---

# Alfabeto Numeral com Chave

## Descrição

A cada letra do alfabeto corresponde um número.

Para identificar corretamente o código é necessário conhecer previamente uma **chave numérica**.

No exemplo apresentado, a chave é **12**, pelo que a numeração começa nesse valor.

## Tabela (chave = 12)

| Letra | A | B | C | D | E | F | G | H | I | J | K | L | M |

|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|

| Número | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 |

| Letra | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |

|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|

| Número | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 |

## Procedimento

1. Definir uma chave.

2. Construir a tabela começando pelo valor da chave.

3. Substituir cada letra pelo respetivo número.

## Exemplo

Mensagem:

```

ALERTA

```

Codificação:

```

122316293112

```

ou

```

12 23 16 29 31 12

```

---

# Romano-Árabe

## Descrição

Nesta cifra:

- as **vogais** são representadas por números romanos;

- as **consoantes** são representadas por números árabes.

## Tabela das Vogais

| Vogal | A | E | I | O | U |

|-------|---|---|---|---|---|

| Romano | I | II | III | IV | V |

## Tabela das Consoantes

| Letra | B | C | D | F | G | H | J | K | L | M | N | P | Q | R | S | T | V | W | X | Y | Z |

|-------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

| Número | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 |

## Procedimento

1. Identificar se a letra é vogal ou consoante.

2. Se for vogal, utilizar a tabela romana.

3. Se for consoante, utilizar a tabela árabe.

## Exemplo

```

ALERTA

```

Codificação:

```

I 9 II 14 16 I

```
# Metades

## Descrição

As letras da mensagem são dispostas alternadamente numa tabela de **duas linhas**.

Vamos considerar a seguinte mensagem:

```

CHAMAR O SOCORRISTA

```

Construímos a tabela:

| C |   | A |   | A |   | O |   | O |   | R |   | S |   | A |

|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

|   | H |   | M |   | R |   | S |   | C |   | R |   | I | T |

## Procedimento

1. Escrever alternadamente as letras da mensagem nas duas linhas da tabela.

2. O número total de letras deve ser sempre **par**.

3. Caso a mensagem tenha um número ímpar de letras, acrescenta-se uma letra qualquer no final.

4. A mensagem codificada é obtida lendo:

   1. toda a primeira linha;

   2. seguida de toda a segunda linha.

5. Para descodificar, divide-se a mensagem cifrada ao meio e volta-se a construir a tabela.

## Exemplo

Mensagem:

```

CHAMAR O SOCORRISTA

```

Mensagem cifrada:

```

CAAOOORSAHMRSCRIT

```

## Notas

A descodificação consiste apenas em reconstruir novamente a tabela utilizando metade da mensagem em cada linha.

---
# Vogais por Pontos

## Descrição

Todas as vogais da mensagem são substituídas por um ponto (`.`).

As restantes letras permanecem inalteradas.

## Procedimento

1. Percorrer toda a mensagem.

2. Sempre que surgir uma vogal (A, E, I, O ou U), substituí-la por um ponto.

3. Manter todas as consoantes.

## Exemplo

Mensagem:

```

SEMPRE ALERTA

```

Resultado:

```

S.MPR. .L.RT.

```

## Notas

Esta é uma cifra extremamente simples, sendo normalmente utilizada em conjunto com outras técnicas de codificação para aumentar a dificuldade da descodificação.

---