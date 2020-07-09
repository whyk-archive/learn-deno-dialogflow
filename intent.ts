import { Application, Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts"
import { QueryResult, Response } from './config.ts';

const app = new Application();

app.static('/', './public')

app.get('/', async (ctx: Context) => {
  await ctx.file('./public/index.html')
})

app.post('/', async (ctx: Context) => {
  const { queryResult } = await ctx.body()
  const body: QueryResult = queryResult

  const displayName = body.intent.displayName
  let response: Response

  if (displayName === 'MorningIntent') response = { fulfillmentText: 'おはよう！' }
  else if (displayName === 'NameIntent') response = { fulfillmentText: `あなたの名前は「${body.parameters.name}」ですね` }
  else response = { fulfillmentText: `Denoから「${body.queryText}」` }

  ctx.json(response)
});

app.start({ port: 8888 })
