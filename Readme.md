# Demo NestJS Guard exception issue

Setup
```
yarn install
yarn build
cd ./projects/api
yarn start:dev
```

## Create 500 error when 401 is expected.
```
curl --location --request GET 'http://localhost:4000/test2'
```

Logs
```
[Nest] 52468   - 01/20/2021, 1:48:07 PM   [ExceptionsHandler] authorization header is missing +17133ms
Error: authorization header is missing
    at AuthGuard.canActivate (C:\Users\Super\git\nestjs-test\projects\@local\auth\src\auth.guard.ts:16:19)
    at GuardsConsumer.tryActivate (C:\Users\Super\git\nestjs-test\.yarn\unplugged\@nestjs-core-virtual-6b1ab77ecd\node_modules\@nestjs\core\guards\guards-consumer.js:15:34)
    at canActivateFn (C:\Users\Super\git\nestjs-test\.yarn\unplugged\@nestjs-core-virtual-6b1ab77ecd\node_modules\@nestjs\core\router\router-execution-context.js:132:59)
    at C:\Users\Super\git\nestjs-test\.yarn\unplugged\@nestjs-core-virtual-6b1ab77ecd\node_modules\@nestjs\core\router\router-execution-context.js:42:37
    at C:\Users\Super\git\nestjs-test\.yarn\unplugged\@nestjs-core-virtual-6b1ab77ecd\node_modules\@nestjs\core\router\router-proxy.js:9:23
    at Layer.handle [as handle_request] (C:\Users\Super\git\nestjs-test\.yarn\cache\express-npm-4.17.1-6815ee6bf9-c4b470d623.zip\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\Super\git\nestjs-test\.yarn\cache\express-npm-4.17.1-6815ee6bf9-c4b470d623.zip\node_modules\express\lib\router\route.js:137:13)
    at Route.dispatch (C:\Users\Super\git\nestjs-test\.yarn\cache\express-npm-4.17.1-6815ee6bf9-c4b470d623.zip\node_modules\express\lib\router\route.js:112:3)
    at Layer.handle [as handle_request] (C:\Users\Super\git\nestjs-test\.yarn\cache\express-npm-4.17.1-6815ee6bf9-c4b470d623.zip\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\Super\git\nestjs-test\.yarn\cache\express-npm-4.17.1-6815ee6bf9-c4b470d623.zip\node_modules\express\lib\router\index.js:281:22
```

Request response
```
{
    "statusCode": 500,
    "message": "Internal server error"
}
```