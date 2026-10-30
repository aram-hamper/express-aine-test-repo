# PR384 — Opt-in request logging example

A small, self-contained example that logs one record per completed HTTP
response without ever capturing sensitive request data.

## Setup

```bash
git clone https://github.com/expressjs/express.git --depth 1 && cd express
npm install
node examples/pr384-request-logging/app.js
```

The example app listens on port 3000 only when run directly. When it is
`require()`d (for example from a test), it exports the Express app and does
**not** start a server.

## Configuration

`examples/pr384-request-logging/middleware.js` exports a factory:

```js
var requestLogger = require('./middleware');

app.use(requestLogger(function (record) {
  // record = { method, path, status, durationMs }
  console.log(record.method, record.path, record.status);
}));
```

The factory takes a single `callback` function. It throws a `TypeError` if the
argument is not a function. The returned middleware runs on every request and
invokes `callback` exactly once per completed response, using
[`on-finished`](https://www.npmjs.com/package/on-finished) to detect when the
response is done.

The record passed to the callback contains:

| Field        | Description                                             |
| ------------ | ------------------------------------------------------- |
| `method`     | HTTP method, e.g. `GET`                                 |
| `path`       | Request path **without** the query string              |
| `status`     | Response status code, e.g. `200` or `404`               |
| `durationMs` | Elapsed time from request start to response finish (ms) |

## Example structure

```
examples/pr384-request-logging/
  middleware.js   configurable request logger factory
  app.js          minimal demo app wiring the logger to a couple of routes
```

## Privacy limits

By design the log record is deliberately minimal. It **never** includes:

- request bodies
- the `Authorization` header
- cookies
- the query string (the path is derived from `parseurl().pathname`, so secrets
  passed as query parameters never enter the record)

If you need more detail, extend the record in your own callback — but be
deliberate about what you store, and keep secrets out of your logs.
