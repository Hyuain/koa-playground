import Koa from "koa"

const app = new Koa()

const port = 3000

app.use(async (context) => {
  context.body = "hello"
})

app.listen(port)