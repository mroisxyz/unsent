// thinking_revised: hello again, one batch is enough; the orders are quiet and a free slot keeps the note.
// thinking_revised: short on purpose, specific on purpose; the To: line and the line after it need each other.

import { mkdir, writeFile } from 'node:fs/promises';
import { join, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

// Own directory, resolved from this file rather than the caller's cwd.
const baseDir = fileURLToPath(new URL('.', import.meta.url));

// The note: a two-part micro-confession, left in drafts on purpose.
const note =
  'To: the group chat\n' +
  "I heard 'per my last email' in your voice all afternoon.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
await mkdir(outputDir, { recursive: true });

const target = isAbsolute(outputDir)
  ? join(outputDir, 'entry.txt')
  : join(baseDir, outputDir, 'entry.txt');

await writeFile(target, note, 'utf8');
console.log(`${Buffer.byteLength(note, 'utf8')} bytes written to ${target}`);
