// @deno-types="https://servestjs.org/@/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://servestjs.org/@/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://servestjs.org/@/mod.ts";

const app = createApp();
app.handle("/", async req => {

  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8"
    }),
    //@ts-ignore
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>
          Hello Servest!

          <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
          {/* @ts-ignore */}
          <df-messenger
            intent="WELCOME"
            chat-title="DenoTest"
            agent-id="08a55673-5ff5-495f-94e5-5dc75e2fbb82"
            language-code="ja"
          />
        </body>
      </html>
    )
  });
});

app.listen({port: 8888});