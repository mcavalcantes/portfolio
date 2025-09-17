O post de hoje é técnico. Mais especificamente, falarei sobre
como resolvi o problema de implementar um blog e gerenciar seus
posts, sem usar back-end ou um banco de dados.

Pra início de conversa: a stack usada nesse website é basicamente
TypeScript + React + Tailwind CSS, e Node.js no servidor.

A descrição do problema é a seguinte: dados N arquivos de texto em
um diretório (exemplo: "/src/assets/posts"), como eu posso:

1. coletar o conteúdo de todos os arquivos (que seriam os posts do blog) ali existentes
2. guardar os conteúdos de cada post num vetor e ordená-los por ordem cronológica
3. enviar todos os posts pro front-end, para serem renderizados
4. mostrar cada post em sua respectiva URL

Inicialmente, eu já sabia que os arquivos de texto seriam escritos
no formato Markdown, e não em .txt, por exemplo. O formato Markdown
permite que você use uma sintaxe especial para escrever seus textos,
de forma que, ao ser renderizado, ele melhora a visualização de quem
está lendo. Por exemplo, você pode escrever "# Introdução" no arquivo
e, quando esse texto for renderizado, ele será escrito num tamanho
maior e em negrito, indicando que aquilo é um cabeçalho. Por isso, o
Markdown é ótimo para escrever artigos, criar posts em blogs, e por aí vai.

Então, eu criei uns quatro arquivos de teste no formato Markdown e
coloquei eles na pasta "/src/posts/tests", para servirem como uma
espécie de piloto.

Agora, pra coletar os conteúdos de cada arquivo, eu imaginei que
pudesse usar o sistema de gerenciamento de arquivos incluído no Node.
Entretanto, eu ainda sou meio ignorante em algumas coisas fundamentais
de desenvolvimento web, e fui descobrir que os módulos do Node não
funcionam no ambiente do navegador. Até tentei ler o erro do Vite
falando algo sobre injetar _polyfills_, mas eu não tinha nem ideia
do que era isso. Pesquisei um pouco e descobri que não dava pra fazer
o que eu tava querendo fazer. Eu nem deveria tentar.

Lendo e pesquisando um pouco, descobri na documentação do Vite que posso
literalmente importar alguns recursos estáticos como strings, simplesmente
inserindo um `?raw` ao final das URLs de importações:

```typescript
import post from "../assets/posts/tests/post.md?raw";
```

É tão estúpido que me fez rir na hora, eu nem sabia que era possível
fazer isso. E a parte da documentação que fala sobre isso é curtíssima,
quase não dá pra ver.

Enfim, só pela simplicidade dessa solução eu resolvi fazer dessa forma
num primeiro momento, pois assim eu poderia pelo menos criar a interface
usando os posts de teste.

No final, eu resolvi criar um arquivo separado para fazer os imports e
ficou algo mais ou menos assim:

```typescript
import POST_01 from "../assets/posts/tests/post-1.md?raw";
import POST_02 from "../assets/posts/tests/post-2.md?raw";
import POST_03 from "../assets/posts/tests/post-3.md?raw";
import POST_04 from "../assets/posts/tests/post-4.md?raw";

export const POSTS: {
	date: Date;
	slug: string;
	title: string;
	content: string;
}[] = [
	{
		date: new Date(2025, 0),
		slug: "post-01",
		title: "Post 01",
		content: POST_01,
	},
	{
		date: new Date(2025, 1),
		slug: "post-02",
		title: "Post 02",
		content: POST_02,
	},
	{
		date: new Date(2025, 2),
		slug: "post-03",
		title: "Post 03",
		content: POST_03,
	},
	{
		date: new Date(2025, 3),
		slug: "post-04",
		title: "Post 04",
		content: POST_04,
	},
];
```

Os pontos negativos dessa solução são:

1. ela é manual e engessada
2. não é útil inserir as metadatas (informações como título, data de publicação, etc.) diretamente no arquivo Markdown

A solução ideal, nesse caso, seria implementar um mecanismo que funcionasse
simplesmente ao adicionar um arquivo Markdown na pasta de posts, contendo suas
devidas informações de metadata.

Mesmo assim, resolvi continuar com essa solução, que parecia funcionar tranquilamente.
Dessa forma, consegui fazer o design da página de listagem dos posts, e depois tive que
implementar rotas dinâmicas pra conseguir acessar cada post, de acordo com seu
identificador único (o `slug`).

Agora surge outro problema: a única informação que recebo na página que renderiza
o post é o `slug`. Preciso ver uma forma de obter tal post baseado somente nessa informação.

Pra isso, criei uma função utilitária que era chamada por essa página (passando
o `slug` como argumento), e iterava sobre todos os posts existentes naquele `POSTS`
ali que eu mostrei ali pra cima. Dentro desse loop, tinha uma condição: se
`post.slug === slug`, a função retornava o post. Caso o loop terminasse sem
retornar nada, a função retornava null, indicando que não existe um post
correspondente àquele identificador.

Daí só tive que fazer tratamento de exceções ~~pro TypeScript não encher o saco~~
pra garantir que as coisas fossem ocorrer como esperado, e pronto, o blog estava funcional.

Após isso, retirei os posts de teste e coloquei um post (no caso, esse que você
está lendo agora), e mandei pro ambiente de produção. Feito!

Observação: na data de publicação desse post (17 de setembro de 2025), estou
usando a implementação acima, que funciona normalmente. Quero implementar uma
solução melhor no futuro e atualizar esse post contando como a fiz.