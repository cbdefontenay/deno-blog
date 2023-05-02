---
title: "Create a SQLite database using Deno"
subtitle: "Database in Deno "
date: "01 Mai 2023"
---

# How to make a SQLite database in Deno ?

Creating a simple database for a small application has never been easier with Deno.
Here are some steps you may follow to create a simple SQLite database to store a _user_
and an _email_ inside of it. Of course this is just **a way** of doing it, you may
do things differently and adapt you code to the needs of your application, like to only allow
registered users to access your website or a special content. Feel free to change it.

1. Import the necessary modules from the **deno-land**:

```js
import { DB, SqliteError } from "https://deno.land/x/sqlite@v3.7.0/mod.ts";
```

And then: Open the SQLite database

```js
const db = new DB("database.db");
```

2.  Then create the users table if it doesn't exist like so:

```js
await db.query("
    CREATE TABLE IF NOT EXISTS users (
    email TEXT PRIMARY KEY,
    password TEXT"
    )
);
```

N.B: The email and password are just examples, it could be anything else, like "name" for example.

3. Then create a POST route to "/register" for example, wich the Frontend will fetch in the Component, like so:

```js
    router.post("/register", async (ctx) => {
    //something here later
    }
```

Then we could make a **"try"** and **"catch"** method to catch the error if the _"try"_ didn't work:

```js
router.post("/register", async (ctx) => {
try {
const { email, password } = (await ctx.request.body().value)

    //see point 4...

    }
}
```

We are now making an async function, that waits untill the user's datas have been writen _(= value from the body)_.

4. Then we have to insert the user's datas inside the database:

```js
await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [
  email,
  password,
]);
```

Then it could be a great idea to redirect the user to an other page once the "button" has been clicked:

```js
ctx.response.redirect("/newsletters");
```

5. Finally, we have to catch the error after trying to fetch the datas from the user and store them in our SQLite database:

```js
   catch (error) {
        if (
        error instanceof SqliteError &&
        error.message.includes("UNIQUE constraint failed: users.email")
   ) {
        ctx.response.status = 409; // Conflict
        ctx.response.body = "Email already exists.";
   } else {
        console.error(error);
        ctx.response.status = 500; // Internal Server Error
        ctx.response.body = "Something went wrong.";
   }
}
```

Remember our SqliteError import ? Yeah, that's the one we are seeing right now in the **if** statement.
The above code is handling errors that might occur when the user attempts to register with an email that already exists in the database.

The catch block receives the error thrown by the code that registers the user,
and first checks if the error is an instance of the SqliteError class,
which is thrown by the _"db.query()"_ method if there is an error in the SQLite database.

If the error is an instance of SqliteError and the error message includes the text "UNIQUE constraint failed: users.email",
it means that the email the user attempted to register with already exists in the database, violating the UNIQUE constraint on the email column.

In this case, the catch block sets the response **status to 409** (Conflict), indicating that there was a conflict with the request,
and sets the response body to **"Email already exists."** to inform the user.

6. **You may want to "hash" the password, for security reasons. In order to do that, we may want to import the "bcrypt" module from "deno-land":**

```js
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
```

We then may want to generate a hash of the user's password inside of the "POST" request and then declare it in the database, instead of the _"password"_ alone (note that this is really similar to the way you would do it in a
**Node** server):

```js
router.post("/register", async (ctx) => {
try {
const { email, password } = (await ctx.request.body().value) as User;

    // Generate a hash of the user's password

    const hashedPassword = await bcrypt.hash(password);

    // Insert the user into the database with the hashed password

    await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [
      email,
      hashedPassword,
    ]);
```

N.B: Deno command with database:

```js
deno run --allow-net --allow-read --allow-write <File Name> (mod.ts).
```

#### When creating a database, it is important to allow _Deno_ to _write_ (--allow-write) the datas in the database.

If you do not give your permission, Deno will not create the database.
