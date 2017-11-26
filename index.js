const Koa = require('koa');
const app = new Koa();

var port = (process.env.VCAP_APP_PORT || process.env.PORT ||3000); 
var host = (process.env.VCAP_APP_HOST || process.env.host ||'localhost');

app.use(async (ctx, next) => {
  const initTime = Date.now();
  await next();
  const time = Date.now() - initTime;
  ctx.set('x-response-time', `${time}ms`);
});

app.use(async ctx => {
  ctx.body = 'Hello World. This is a simple app to test KOA in bluemix';
});

app.listen(port);