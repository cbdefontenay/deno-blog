---
title: "Why Deno?"
subtitle: "Is Deno better than Node.Js?"
date: "25 April 2023"
---

## Deno: A Brief Introduction

Deno is a runtime for JavaScript and TypeScript that was created by Ryan Dahl, the original creator of Node.js.
Deno was designed to address some of the issues that Node.js had, such as security and module management.
History of Deno

Ryan Dahl first announced Deno in **2018** at JSConf EU.
The project was open-sourced in May 2018, and it has been gaining popularity ever since. Dahl created Deno as a response to some of the frustrations he had with Node.js.
Some of the main issues he wanted to address were:

    1) Security: Node.js had a security model that allowed arbitrary code execution, which could be dangerous. Deno's security model is based on permissions, which allows users to grant or deny access to different parts of the system.

    2) Module management: Node.js used the CommonJS module system, which made it difficult to use modern JavaScript features such as ES6 modules. Deno uses ES6 modules natively, which makes it much easier to work with modern JavaScript.

    3) Build system: Node.js didn't have a built-in build system, which made it difficult to manage dependencies and build projects. Deno has a built-in module cache and a simple build system, which makes it much easier to manage dependencies and build projects.

## Why Deno is Better than Node.js

There are several reasons why Deno is considered better than _Node.js_ by many developers:

1. Security: As mentioned earlier, Deno's security model is based on permissions, which makes it much safer than Node.js.

2. Module management: Deno uses ES6 modules natively, which makes it much easier to work with modern JavaScript. Node.js requires a transpiler to use ES6 modules.

3. TypeScript support: Deno has built-in TypeScript support, which makes it much easier to work with TypeScript than in Node.js.

4. Standard library: Deno has a standard library that includes many useful modules, such as HTTP, WebSocket, and testing. Node.js has a much smaller standard library.

5. Dependency management: Deno has a built-in module cache and a simple build system, which makes it much easier to manage dependencies and build projects than in Node.js.

6. Compatibility with web standards: Deno is designed to be compatible with web standards, which makes it much easier to port web code to Deno than to Node.js.

Overall, Deno is a promising runtime that addresses some of the issues that Node.js had. Its security model, module management,
**TypeScript** support, standard library, and dependency management make it a compelling alternative to Node.js for many developers.

### Example of a Deno code.

#### You may notice that Deno is not that different than Node.js.

- **Example:**

```js
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8080 });

console.log("Server running on http://localhost:8080/");

for await (const request of server) {
  request.respond({ body: "Hello, World!" });
}
```

In this example, we import the serve function from the std/http/server module, which is part of Deno's standard library.
We then create a server instance and start listening for incoming requests on _port 8080_.

When a request is received, we respond with a simple _"Hello, World!"_ message.
Note that the _for await_ loop is used to handle incoming requests **asynchronously**.

To run this server, simply save the code to a file (e.g. server.ts, or mod.ts) and run it with the deno command:

```js
deno run --allow-net server.ts
```

The **--allow-net** flag is required to grant network permissions to the script,
which allows it to listen for incoming connections on port 8080.
Once the server is running, you can visit [http://localhost:8080/](http://localhost:8080/) in your web browser to see the **"Hello, World!"** message.
