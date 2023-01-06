const fse = require("fs-extra");

class AddGitignorePlugin {
  constructor() {
    this.patterns = ["node_modules", "coverage"];
  }

  addItem(item) {
    this.patterns = [...this.patterns, item];
  }

  addItems(items) {
    this.patterns = [...this.patterns, ...items];
  }

  setItems(newItems) {
    this.patterns = newItems;
  }

  async run() {
    await fse.outputFile(".gitignore", `${this.patterns.join("\n")}\n`);
  }
}

module.exports = AddGitignorePlugin;
