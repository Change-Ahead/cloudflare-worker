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
  const resp = await fetch(
      `${API_URL}/link${url.pathname}`,
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
  }

  console.log(resp.body, cors);

  return new Response(resp.body, {
    headers: {
      ...resp.headers,
      ...cors,
    }
  })
}



