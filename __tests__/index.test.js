"use strict";

const fse = require("fs-extra");
const AddGitignorePlugin = require("../index.js");

describe("InstallPackagesPlugin", () => {
  let plugin;

  beforeEach(() => {
    plugin = new AddGitignorePlugin();
    fse.outputFile = jest.fn();
  });

  describe("run", () => {
    it("creates gitignore file with default packages", async () => {
      await plugin.run();
      expect(fse.outputFile).toHaveBeenCalledWith(
        ".gitignore",
        "node_modules\ncoverage\n"
      );
    });
  });

  describe("addItem", () => {
    it("adds new item to the patterns", async () => {
      plugin.addItem("tmp");
      await plugin.run();
      expect(fse.outputFile).toHaveBeenCalledWith(
        ".gitignore",
        "node_modules\ncoverage\ntmp\n"
      );
    });
  });

  describe("addItems", () => {
    it("adds new specified patterns", async () => {
      plugin.addItems(["tmp"]);
      await plugin.run();
      expect(fse.outputFile).toHaveBeenCalledWith(
        ".gitignore",
        "node_modules\ncoverage\ntmp\n"
      );
    });
  });

  describe("setItems", () => {
    it("overrides patterns with specified items", async () => {
      plugin.setItems(["tmp"]);
      await plugin.run();
      expect(fse.outputFile).toHaveBeenCalledWith(".gitignore", "tmp\n");
    });
  });
});
