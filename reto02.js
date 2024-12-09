function createFrame(names) {
  const maxLength = Math.max(...names.map((name) => name.length));
  const frame = "*".repeat(maxLength + 4);
  const mid = names
    .map((name) => `* ${name.padEnd(maxLength, " ")} *`)
    .join("\n");
  return `${frame}\n${mid}\n${frame}`;
}

const frame = createFrame(["midu", "madeval", "educalvolpz"]);
console.log(frame);
// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************
