# lib/request.js

The `lib/request.js` module extends Node's built-in `http.IncomingMessage` prototype with high-level helper methods that Express route handlers use to inspect and interact with incoming HTTP requests. It provides methods for reading headers, checking content types, parsing query strings, determining protocol and IP information, and validating request freshness based on ETags and Last-Modified headers. These methods are wired into the application so every request object automatically has access to convenient utilities like `req.accepts()`, `req.is()`, `req.ip`, `req.protocol`, and `req.fresh`.

Read during the last model call.
