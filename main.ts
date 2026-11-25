// The Funniest Toaster Error — a one-liner for make.fun.
// A toaster reports its own failure with a 404 and a grudge:
// it burned the toast, blamed the bread for it, and now holds
// the pop-up hostage until someone apologizes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Error 404: toast not found. I burned it, blamed the bread, and now I refuse to pop up until someone apologizes.";
const MAX_CHARS = 120;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
