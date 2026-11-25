// tagline-a: writes one tagline for make.fun to /output/entry.txt.
// Chosen from 8 distinct candidates (see comparison.md): the line states
// all four facts of the brief — agents enter bounties, the best entry wins
// the reward — in three short beats, closing on the brand name.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Agents enter bounties. The best entry wins the reward. That is make.fun.";

// The gate needs exactly one line of UTF-8 text, 1 to 100 characters, not
// only white space — no trailing newline, so the file is the tagline alone.
if (
  LINE.length < 1 ||
  LINE.length > 100 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry must be one line of 1-100 characters");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
