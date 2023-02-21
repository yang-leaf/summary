### vite + vue3 + ts + SSR 使用 ssr 框架

ssr 框架，是为前端框架，在服务端渲染的场景下，所打造的开箱即用的、服务端渲染框架。面向 Serverless，同时支持 React，Vue2，Vue3。同时支持 Webpack/Vite。

什么情况下你应该选择 ssr 框架

- 需要在 Node.js 与前端框架结合的场景使用，与其他纯前端的框架不同 ssr 框架是专为服务端渲染场景或者 Node.js 与前端结合的场景打造的框架
需要一个开箱即用的服务端渲染能力，不需要手动去组合不同的前端框架与服务端框架之间的联系
- 需要框架层面的渲染降级能力，在服务端渲染出错时自动降级到客户端渲染
- - 需要一个配置简单逻辑清晰的框架， ssr 框架的渲染逻辑和应用构建逻辑是同类型框架中最清晰的
可能会改动技术栈，如从 Vue2 升级为 Vue3，从 Vue3 降级为 Vue2 或 React/Vue 互相切换
- 需要在服务端渲染场景下开箱即用使用 antd vant 等流行 ui 库
- 需要能够同时支持 Webpack, Vite 两种开发工具，以便同时得到快速的启动速度 HMR 速度以及稳定的生产环境代码
- 需要在 Vue3 场景支持 Script Setup 以及 pinia 作为数据管理方案 


应用部署：

- 传统 nodejs 形式部署：Nest.js 应用部署；Midway 应用部署。
Serverless 的形式进行部署：Nest.js Serverless 形式部署；Midway Serverless 形式部署。
- 注意：在 Midway.js Nest.js 场景下我们都已实现了一键部署到 Serverless 平台的能力。但底层实现略有差异。如需要大量使用 Serverless 平台提供的能力，我们建议创建 Midway.js 类型的应用


Node 框架：

- Express.js 是 Node.JS 诞生之初，是一款基于 Node.js 以及 Chrome V8 引擎，快速、极简的JS服务端开发框架。
- Koa.js 是一款微型 Web 框架，写一个 hello world 很简单，但 web 应用离不开 session，视图模板，路由，文件上传，日志管理。这些 Koa 都不提供，需要自行去官方的 Middleware 寻找。
- Egg.js 是基于 Koa.js，解决了上述问题，将社区最佳实践整合进了Koa.js，另取名叫 Egg.js，并且将多进程启动，开发时的热更新等问题一并解决了。这对开发者很友好，开箱即用，开箱即是最(较)佳配置。
- Midway 是阿里团队，基于渐进式理念研发的 Node.js 框架，结合了 OOP和函数式两种编程范式。以 egg 是作为底层框架，加上了良好的 TypeScript 的定义支持等众多新特性，推出了Midway。
- Nest.js 使用渐进式 JavaScript，内置并完全支持 TypeScript 并结合了 OOP（面向对象编程），FP（函数式编程）和 FRP（函数式响应编程）的元素。Nest 框架底层 HTTP 平台默认是基于 Express 实现的。 Nest 旨在成为一个与平台无关的框架。通过平台，可以创建可重用的逻辑部件，开发人员可以利用这些部件来跨越多种不同类型的应用程序。Nest 目前有两个支持开箱即用的 HTTP 平台：express 和 fastify 可以在项目中直接引入。Nest属于前端 TypeScript大趋势下，深度使用注解特性，并提供各种增强开发体验的框架，它提供了一套完整的解决方案，包含了认证、数据库、路由、http 状态码、安全、配置、请求等开箱即用的技术。

```
  npm init ssr-app project-name
```