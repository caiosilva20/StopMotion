# AnimaMídia 2000

Software educacional web sobre animação e Stop Motion. O projeto apresenta os conceitos básicos de animação em sistemas multimídia, tipos de animação, um tutorial prático e um quiz interativo.

## Funcionalidades

- Introdução ao conceito de animação e persistência da visão
- Conteúdo sobre animação 2D, 3D e Stop Motion
- Narração em áudio
- Vídeo explicativo sobre tipos de animação
- Tutorial ilustrado do processo de criação do Stop Motion
- Vídeo da animação produzida pelo grupo
- Quiz com cinco perguntas sorteadas a partir de um banco de questões
- Feedback imediato sobre as respostas e pontuação final
- Layout responsivo inspirado em interfaces dos anos 2000

## Como executar

Não é necessário instalar dependências ou usar um framework.

1. Clone ou baixe este projeto.
2. Abra a pasta `StopMotion`.
3. Sirva os arquivos com um servidor local. Por exemplo, usando a extensão Live Server do VS Code ou o Python:

```powershell
cd StopMotion
python -m http.server 8000
```

4. Acesse `http://localhost:8000` no navegador.

Também é possível abrir o arquivo `index.html` diretamente, mas executar por meio de um servidor local oferece maior compatibilidade com áudio e vídeo.

## Estrutura do projeto

```text
StopMotion/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── animacao.svg
│   ├── passo1.jpeg
│   ├── passo2.jpeg
│   └── passo3.jpeg
├── audio/
│   └── audio.m4a
├── video/
│   └── stopmotion-grupo.mp4
└── animationtypes/
    └── TiposDeAnimacao.MOV
```

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript puro
- Elementos nativos de áudio e vídeo

## Navegação

A página inicial apresenta quatro seções:

1. **O que é Animação?**
2. **Tipos de Animação**
3. **Tutorial Prático**
4. **Quiz Interativo**

Cada seção pode ser acessada independentemente pelo menu principal. Os botões permitem voltar ao menu e reiniciar o quiz após o resultado.
