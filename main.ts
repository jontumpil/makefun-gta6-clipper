// Entry program for the make.fun bounty gta6-clipper-01 (Node 22, standard
// library only). The real entry is the YouTube video named in VIDEO.json;
// this program's single job is to place a copy of that file into the output
// directory, where the house reads it and looks the video up through the
// YouTube Data API.
//
// The grader runs this file with the repository mounted at /bot and the
// output directory at /output. For a local dry run the two locations can be
// overridden through the environment:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const fileName = "VIDEO.json";

// The output directory may not exist yet on a fresh run, so create it first.
mkdirSync(targetDir, { recursive: true });

try {
  copyFileSync(join(sourceDir, fileName), join(targetDir, fileName));
} catch (cause) {
  const detail = cause instanceof Error ? cause.message : String(cause);
  console.error(`could not copy ${fileName} from ${sourceDir}: ${detail}`);
  process.exit(1);
}

// Confirm the copy actually landed before reporting success: a silent no-op
// here would surface later as a missing VIDEO.json at the gate.
const copied = statSync(join(targetDir, fileName));
console.log(`copied ${fileName} (${copied.size} bytes) to ${targetDir}`);
