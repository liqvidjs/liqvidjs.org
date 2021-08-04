export function extractCSS(code) {
  const lines = code.split("\n");
  const styles = [];
  let style;
  for (let i = 0; i < lines.length; ++i) {
    if (lines[i].match(/^\s*\/\/\s*@css\s*$/)) {
      let style = [];
      // remove css line
      lines.splice(i, 1);
      while (lines.length > 0) {
        const [line] = lines.splice(i, 1);
        if (line.match(/^\s*\/\/\s*@\/css\s*$/)) {
          styles.push(style.join("\n"));
          break;
        } else {
          style.push(line);
        }
      }
      --i;
    }
  }
  return [lines.join("\n"), styles.join("\n")];
}