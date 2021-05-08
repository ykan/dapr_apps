
const Koa = require('koa');
const app = new Koa();
const APP_NAME = 'app_2';

let tmp = 'test data';
app.use(async ctx => {
  if (ctx.path.includes('name')) {
    ctx.body = JSON.stringify({
      name: APP_NAME,
      tmp,
    });
  } else if (ctx.query.name && ctx.path.includes('set-name')) {
    tmp = ctx.query.name;
    ctx.body = JSON.stringify({
      name: APP_NAME,
      status: 'done',
    });
  }
});

app.listen(3001);
