import fs from 'fs/promises';
import crypto from 'crypto';

function getHash(data, encoding = 'base64', encryption = 'sha256') {
  return crypto.createHash(encryption).update(JSON.stringify(data)).digest(encoding);
}

async function readFile(path) {
  try {
    const buf = await fs.readFile(path);
    return JSON.parse(buf.toString());
  } catch {
    return null;
  }
}

export default {
  readFile,
  getHash,
};
