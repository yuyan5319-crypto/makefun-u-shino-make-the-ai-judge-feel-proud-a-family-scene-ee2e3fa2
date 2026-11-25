// SPDX-License-Identifier: MIT
// Writes one original, warm and funny family scene to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One small domestic moment: forty years of marriage, told through sandwich crusts.
// Written by hand for this competition; 1-2 lines, well under the 280-character cap.
const SCENE =
  "Forty years in, Mom still cuts the crusts off Dad's sandwiches \u2014 and Dad still pretends not to notice, then eats the crusts off her plate when she isn't looking.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The competition's gate: one line, 1-280 characters. Refuse to emit anything
// outside it instead of silently handing the grader a losing entry.
if (SCENE.length < 1 || SCENE.length > 280 || SCENE.includes("\n")) {
  console.error(
    `entry rejected by local gate: ${SCENE.length} chars, ` +
      `single line required, 1-280 chars allowed`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SCENE, "utf8");
