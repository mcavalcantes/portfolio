O post de hoje é técnico. Mais especificamente, falarei sobre como resolvi o
problema de implementar e gerenciar os posts desse blog, sem usar back-end ou
um banco de dados propriamente dito.

Disclaimer: a stack usada nesse website é TypeScript + React + Tailwind CSS, e
NodeJS no servidor.

Enfim, a descrição do problema é a seguinte: dados N arquivos em um diretório
(exemplo: "/src/assets/posts"), como eu posso:

1. coletar todos os arquivos ali existentes
2. guardá-los num vetor e ordená-los por ordem cronológica
3. enviar todos os posts para serem renderizados

Inicialmente, eu imaginei que pudesse usar o sistema de gerenciamento de arquivos
do NodeJS pra pelo menos coletar os arquivos, que estariam no formato Markdown.
Entretanto, eu ainda sou meio ignorante nos fundamentos da Web e, para minha
infelicidade, percebi que os módulos do Node não funcionam no ambiente
do navegador. Fiquei meio sem saber o que fazer... até tentei ver algo sobre
polyfills (nem sabia o que era isso) mas depois entendi que não dava pra usar
aquilo. Eu nem deveria tentar.

Pesquisando e lendo a documentação do Vite... percebo que posso literalmente
importar alguns recursos estáticos como strings, simplesmente inserindo um
`?raw` ao final das URLs de importações:

```typescript
import post from "../assets/posts/post.md?raw";
```

É tão estúpido que me fez rir na hora, pois eu sequer tinha pensado nessa
possibilidade. Enfim, só pela simplicidade dessa solução eu resolvi fazer
dessa forma num primeiro momento, pois assim eu poderia pelo menos criar a
interface usando alguns posts de teste. No final, eu resolvi criar um arquivo
separado para fazer todos os imports e ficou algo mais ou menos assim:

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

Isso me possibilitou fazer pelo menos um protótipo da interface dos posts,
tanto na listagem (`/blog`) como na página dos próprios posts. O problema
dessa solução é que ela é muito manual e, portanto, suscetível a mais erros.
Além disso, hoje é possível colocar metadata (que são informações como
título, data, autor, etc.) no próprio arquivo Markdown, mas essa implementação
não suporta isso diretamente. O ideal seria ter um mecanismo em que eu
simplesmente teria que adicionar um arquivo (um post) novo na pasta `posts`
do projeto.

Mesmo assim, resolvi continuar com essa solução até encontrar tempo pra fazer
uma implementação melhor.

Com isso, consegui fazer o design da página `/blog` com os posts de teste,
e depois tive que implementar rotas dinâmicas pra conseguir acessar cada post.
Agora surge outro problema: a única informação que recebo na página que
efetivamente renderiza o post é a `slug`, isto é, o identificador do post.
Preciso ver uma forma de obter o post baseado somente nessa informação.

Então, criei uma função utilitária que era chamada a partir do componente
da página (passando a `slug` da URL como parâmetro), e iterava sobre todos
os posts em `POSTS`, e retornava o post quando `post.slug === slug`. No caso
em que, por algum motivo, a URL inserida não fosse encontrada em nenhum post,
a função retornava `null`. Daí só tive que fazer tratamento de exceções
~~pro TypeScript não encher o saco~~ pra garantir que as coisas fossem ocorrer
como esperado, e pronto, o blog estava funcional.

Após isso, retirei os posts de teste e coloquei os posts 'normais', testei a
build, e mandei pro ambiente de produção. Feito!

Observação: na data de publicação desse post (17 de setembro de 2025), estou usando
a implementação acima, que ~~é uma porqueira tecnicamente falando~~ funciona incrivelmente
bem. Devo implementar uma solução melhor no futuro e atualizar esse post contando como a fiz.