import fs from 'fs/promises';

async function readFile(path) {
  try {
    const buf = await fs.readFile(path);
    return JSON.parse(buf.toString());
  } catch {
    return null;
  }
}

export default readFile;
