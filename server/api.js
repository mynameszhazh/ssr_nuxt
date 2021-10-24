const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router()
router.prefix('/api')

app.keys = ['some secret', 'another secret']
const goods = [
  { id: 1, text: 'web老子加捡回', price: 1000 },
  { id: 2, text: 'web老子加宝剑', price: 2000 }
]

router.get('/', (ctx) => {
  ctx.body = 'niaho'
})

router.get('/goods', (ctx) => {
  ctx.body = {
    ok: 1,
    goods
  }
})

router.get('/detail', (ctx) => {
  // console.log(goods.find(good => good.id == 2))
  ctx.body = {
    ok: 1,
    // 这里出现这种情况是一定要尽快知道才可以的不是吗
    data: goods.find(good => good.id == ctx.query.id)
  }
})

// 登录
router.post('/login', (ctx) => {
  const user = ctx.request.body
  if (user.username === 'jerry' && user.password === '123') {
    const token = 'a mock token'
    ctx.cookies.set('token', token)
    ctx.body = { ok: 1, token }
  } else {
    ctx.body = { ok: 0 }
  }
})

app.use(bodyparser())
app.use(router.routes())

app.listen(8080, () => console.log('api服务已启动'))
