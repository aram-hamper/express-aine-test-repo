# Live Check 42 - Main Framework Files

## lib/application.js

The application module is the core of every Express app. It exports a plain object that gets mixed into each app instance and provides the main API for configuring and running the application. It handles initialization of caches, engines, and settings; provides methods for setting and getting configuration values; manages middleware registration through `app.use()`; defines HTTP verb methods like `app.get()`, `app.post()`, etc.; and implements the request handling pipeline through `app.handle()` which sets up request/response prototypes and routes requests through the router.

## lib/request.js

The request module extends Node's built-in `http.IncomingMessage` prototype with high-level helper methods that route handlers use to read and inspect incoming HTTP requests. It provides methods for accessing headers (`req.get()`), checking content types (`req.is()`), parsing query strings (`req.query`), and negotiating content types (`req.accepts()`, `req.acceptsEncodings()`, `req.acceptsCharsets()`, `req.acceptsLanguages()`). It also includes getters for request properties like `req.protocol`, `req.secure`, `req.ip`, `req.ips`, `req.subdomains`, `req.path`, `req.host`, `req.hostname`, `req.fresh`, `req.stale`, and `req.xhr`, many of which respect the "trust proxy" setting for handling requests behind reverse proxies.

## lib/response.js

The response module extends Node's built-in `http.ServerResponse` prototype with methods that route handlers use to build and send HTTP responses. It provides core send methods like `res.send()` for sending various body types with automatic type detection, `res.json()` for JSON responses, and `res.jsonp()` for JSONP support. It includes methods for setting response metadata like `res.status()`, `res.type()`, `res.set()`, `res.cookie()`, and `res.location()`; methods for sending files like `res.sendFile()` and `res.download()`; content negotiation via `res.format()`; and view rendering through `res.render()`. The module also handles HTTP semantics like ETag generation, freshness checking, and proper header stripping for status codes like 204 and 304.

## lib/router/index.js

This file does not exist in the repository. The router functionality is provided by the external `router` package (imported in lib/application.js), which is used to create the lazy-loaded router instance that handles route matching and middleware execution.

Redirected mid-run.
