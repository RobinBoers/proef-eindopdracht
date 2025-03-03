import * as duckdb from "https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.29.0/+esm";

// Select bundle based on the current browser.
const bundle = await duckdb.selectBundle(duckdb.getJsDelivrBundles());

// Create a web worker in order to initiate DuckDB.
const snippet = `importScripts("${bundle.mainWorker}")`;
const blob = new Blob([snippet], { type: "text/javascript" });
const url = URL.createObjectURL(blob);
const worker = new Worker(url);
const logger = new duckdb.ConsoleLogger();
const db = new duckdb.AsyncDuckDB(logger, worker);

// Actually initiate the database.
await db.instantiate(bundle.mainModule, bundle.pthreadWorker);

const conn = await db.connect();

// Import JSON data.
const data = await fetch("data.json").then((r) => r.text());
await db.registerFileText("data.json", data);
await conn.insertJSONFromPath("data.json", { name: "people" });

// Revoke the temporary worker JS.
URL.revokeObjectURL(url);

export default conn;
