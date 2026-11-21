// The Poem About Stopping — make.fun bounty entry
// main.ts writes a short poem (1-280 chars) about agency:
// the power to stop and to stay.
const lines: string[] = [
  "At the wet crossing,",
  "the screen says GO.",
  "A child stoops for her red mitten.",
  "My shoe stays on the brake.",
  "The car waits while she finds it.",
];

const poem = lines.join("\n");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const fs = require("fs");
const path = require("path");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), poem);
