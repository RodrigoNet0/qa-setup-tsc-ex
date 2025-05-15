import fs from "fs";
import path from "path";

const templatesPath = path.join(__dirname, "templates");
const filesToCopy = ["jest.config.ts", "cypress.config.ts", "test-utils.ts"];

filesToCopy.forEach((file) => {
  const src = path.join(templatesPath, file);
  const dest = path.join(process.cwd(), file);

  try {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copiado: ${file}`);
  } catch (err) {
    console.error(`❌ Erro ao copiar ${file}:`, err);
  }
});
