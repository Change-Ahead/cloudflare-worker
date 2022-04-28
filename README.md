# Api Hook Worker

This is a lightweight serverless function hosted by cloudflare that interacts 
with the backend api.

## Getting setup

1. Ensure you have NodeJS v16+
2. Install wrangler via `npm install -g @cloudflare/wrangler`
3. Login to cloudflare using the `wrangler login` command. 
   To deploy to live you'll need to be logged into the Change Ahead Cloudflare account.

Once you've completed the above, you're now ready to start editing the worker!
Full documentation about how workers behave can be found at https://developers.cloudflare.com/workers/

### Testing changes
You can test any changes to the worker using the `wrangler dev` command which 
will emulate the worker environment for you, allowing you to test any functionality around
it.

### Deploying the worker
Once you're happy with your changes you can use the `wrangler publish --env production` command
to deploy the worker to Cloudflare.

This will expect a `API_KEY` environment variable to be configured in the Cloudflare dashboard.