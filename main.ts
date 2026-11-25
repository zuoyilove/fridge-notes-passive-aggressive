import { mkdirSync, writeFileSync } from "node:fs";

const note =
  "My door sensor logged 14 openings tonight and you took nothing but my patience. I have started billing you in cold air.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note, "utf8");
console.log(note);
