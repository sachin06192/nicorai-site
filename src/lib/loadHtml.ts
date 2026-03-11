import fs from "fs";
import path from "path";

export function loadHtml(name: string): string {
  const filePath = path.join(process.cwd(), "src", "html", `${name}.html`);
  return fs.readFileSync(filePath, "utf8");
}
