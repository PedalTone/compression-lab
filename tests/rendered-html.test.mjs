import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the Compression Lab learning journey", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Compression Lab/);
  assert.match(html, /Make loud and soft/);
  assert.match(html, /Shape the dynamics/);
  assert.match(html, /Gray dashed = no compression/);
  assert.match(html, /Orange solid = your output/);
  assert.match(html, /Beethoven’s Fifth/);
  assert.match(html, /Public domain recording/);
  assert.match(html, /Final knowledge check/);
  assert.doesNotMatch(html, /browser-synthesized|Vocal-like|Punchy drums/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});
