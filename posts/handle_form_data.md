---
title: "Creating a handle form data with Deno."
subtitle: "Simple server example."
date: "28 April 2023"
---

# Creating a Simple Deno Server to Handle Form Data

In this tutorial, we will learn how to create a simple server using Deno that handles form data from the client-side using JavaScript.
We will be using Deno's built-in http module to handle incoming requests, and vanilla JavaScript on the client-side to submit form data.
Setting Up the Server

First, we need to create a simple Deno server that listens for incoming requests and handles them appropriately.
Let's start by creating a new file called **server.ts** and importing the http module:

```js
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });

console.log(`Server running on http://localhost:8000/`);
```

In this code, we use the serve function from the http module to create a new server instance and listen on **port 8000**.
We then log a message to the console to indicate that the server is running.

Next, we need to create a handler function that will handle incoming requests. We'll call this function handleRequest:

```js
async function handleRequest(request: Request): Promise<Response> {
  const { method, url } = request;

  if (method === "POST" && url === "/submit") {
    const formData = await request.formData();
    const name = formData.get("name");

    if (name) {
      return new Response(`Hello, ${name}!`);
    }
  }

  return new Response("Invalid request", { status: 400 });
}
```

In this code, we check if the incoming request is a _POST_ request to the _/submit_ URL.

If it is, we parse the form data using the **formData** method and get the value of the name field. If the name field has a value,
we return a response with a greeting message that includes the name. Otherwise, we return an error response with a status code of _400_.

Now, we need to modify the server instance to use the handleRequest function as the request handler:

```js
for await (const request of server) {
  const response = await handleRequest(request);
  request.respond(response);
}
```

In this code, we use a for await loop to listen for incoming requests, and call the handleRequest function for each request.
We then respond to the request with the response returned by the handleRequest function.

## Setting Up the Client

Now that we have our server set up to handle form data, we can create a simple HTML form that will submit data to the server.
Let's create a new file called index.html and add the following code:

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Submit Form</title>
  </head>
  <body>
    <h1>Submit Form</h1>
    <form id="submit-form" method="post" action="/submit">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <button type="submit">Submit</button>
    </form>
    <div id="response"></div>
    <script src="script.js"></script>
  </body>
</html>
```

In this code, we create an HTML form with a name input field and a submit button. We also include a "script"
element that will load our client-side JavaScript code from a file called **script.js**.

Now, let's create the script.js file and add the following code:

```js
const form = document.getElementById("submit-form");
const response = document.getElementById("response");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const response = await fetch("/submit", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    const text = await response.text();
    response.textContent = text;
  } else {
    response.textContent = "An error occurred";
  }
});
```

In this code, we use the addEventListener method to listen for the submit event on the form.
When the form is submitted, we prevent the default form submission behavior using **event.preventDefault()**.
We then create a **new FormData** instance using the form data, and use the fetch function to send a POST request to the _/submit_ URL with the form data as the request body.

Finally, we check the response status using response.ok. If the response is successful,
we get the response text using **response.text()** and set the textContent of the response element to the response text.
Otherwise, we set the textContent to an error message.

### Running the Server:

To run the server, we can use the following command:

```js
deno run --allow-net server.ts
```

This command tells Deno to run the **server.ts** file and allows network access.

## Conclusion

In this tutorial, we learned how to create a simple Deno server that handles form data using the http module,
and how to use vanilla JavaScript on the client-side to submit form data and display the server response.
With Deno's built-in modules and support for modern JavaScript features, it's easy to create powerful and scalable web applications.
