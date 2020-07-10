import { Application, Context } from './deps.ts';
import { QueryResult, Response, BookItems } from './config.ts';

const app = new Application();

app.static('/', './public');

app.get('/', async (ctx: Context) => {
  await ctx.file('./public/index.html');
});

app.post('/', async (ctx: Context) => {
  const { queryResult } = await ctx.body();
  const body: QueryResult = queryResult;

  const title = encodeURI(body.queryText);

  const fetchData = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${title}`
  );
  const json = await fetchData.json();
  const items: BookItems[] = json.items;

  const bookList = items.map((book) => ({
    type: 'accordion',
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.authors
      ? book.volumeInfo.authors.join(', ')
      : '作者不明',
    text: `発売日: ${
      book.volumeInfo.publishedDate
        ? book.volumeInfo.publishedDate.replaceAll('-', '/')
        : '0000-00-00'
    }<br>価格: ${
      book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : null
    }円`,
  }));

  const response: Response = {
    fulfillmentMessages: [
      {
        payload: {
          richContent: [bookList],
        },
      },
    ],
  };

  ctx.json(response);
});

app.start({ port: 8888 });
