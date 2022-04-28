addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}



