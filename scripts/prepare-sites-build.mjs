import { rmSync } from "node:fs";

// vinext duplicates public assets into both client and server output. The
// browser-facing copy is sufficient; removing the server duplicate keeps the
// public-domain recording outside the Worker bundle size limit.
rmSync(new URL("../dist/server/audio", import.meta.url), { recursive: true, force: true });
