---
title: "Create a simple Oak server."
subtitle: "Discover Deno. "
date: "30 april 2023"
---

# Why learning **Deno** will change your life?

### What is Deno?

Deno is a JavaScript secure runtime. It was created by Ryan Dahl, the same man
who created Node.Js. He wanted a more secure way of doing things, and in a
conference, where he annonced the release of Deno, he explains what he regreted
about Node.Js, and why he created Deno. If you want to hear everything from him,
go check this video:
[Ryan Dahl, 10 things I regret about Node ](https://www.youtube.com/watch?v=M3BM9TB-8yA&ab_channel=JSConf)

### Where to start?

Well, first things first. You need to have **Deno** installed on your PC/Laptop.
[Go to this link to install Deno on your laptop.](https://deno.com/manual@v1.32.5/getting_started/installation)

##### Now let's create a simple server to get started.

##### Because one understand something better by doing thant just by reading some stuffs online.

Starting with Deno is actually quite simple. If we already know Node.Js, then
Deno will be quite easy for us.

Let's try it.

For this case, we will be using the "Oak" middleware framework for Deno. It will
help us create a nice application. It's also one of the best way to work with JS
Frameworks or Librairies, such as React or Vue.Js.

#### Where to start?

1. First we have to import a few things from "Oak":

```js
import { Application, Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
```

N.B: The @v12.1.0 indicates the version of the "Application" and "Router" you
are trying to import. If you do not specify it, Deno will automatically use the
latest one. It's good practice to specify it, though.

We will need the "Router" later on in the application, to _route_ through the
app and be able to make some **fetch()** request from the Frontend to grab some
datas or send them to the Backend.

2. We must now set the Application and the Router we imported, so that we can actually use
   them in the server:

```js
const app = new Application();
const router = new Router();
const PORT = 8000;
```

Note that this is very similar to the **Node** way of starting a server.

Now we can use **"app"**. That means we made a new instance of the "Application",
using the _"new"_ key-word. Later on, we will add some stuffs in it. We are
also setting a **PORT**, where our backend will run: [http://localhost:8000](http://localhost:8000).
