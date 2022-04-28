addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const origins = CORS_ORIGINS.split(",");

/**
 * Respond with worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let url = new URL(request.url);

  if (!url.pathname.startsWith("/search")) {
      return new Response("Not Found", {status: 404})
  }
  const path = url.pathname.replace("/search", "");

  const resp = await fetch(
      `${API_URL}/link${path}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY
        }
      }
  );

  let cors = {};
  if (origins.includes(request.headers.origin)) {
    cors["Access-Control-Allow-Origin"] = request.headers.origin;
    cors["Access-Control-Allow-Methods"] = "GET, OPTIONS";
  } else if (origins.length === 1 && origins[0] === "*") {
      cors["Access-Control-Allow-Origin"] = "*";
      cors["Access-Control-Allow-Methods"] = "GET, OPTIONS";
  }

  return new Response(resp.body, {
    headers: {
      ...resp.headers,
      ...cors,
    }
  })
}



