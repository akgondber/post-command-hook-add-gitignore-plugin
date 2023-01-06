# post-command-hook-add-gitignore-plugin [![NPM version][npm-image]][npm-url]

> Add Gitignore plugin for post-command-hook.

Add Gitignore plugin for [post-command-hook](https://www.npmjs.com/package/post-command-hook) automatically creates .gitignore file (with predefined items as a content by default) after some command have been executed.

## Installation

```sh
$ npm install --save-dev post-command-hook post-command-hook-add-gitignore-plugin
```

## Usage

```js
const PostCommandHook = require("post-command-hook");
const AddGitignorePlugin = require("post-command-hook-add-gitignore-plugin");

const postCommandHook = new PostCommandHook({
  command: "echo",
  args: ["Setup"],
});
postCommandHook.use(new AddGitignorePlugin());

(async () => {
  await postCommandHook.run();
})();
```

## API

### new AddGitignorePlugin()

Constructs an instance of AddGitignorePlugin class.

### .addItem(item)

Adds specified item to include it to the .gitignore file.

#### item

Type: `string`

### .addItems(items)

Adds specified items to the patterns so they are going to be included in the generated .gitignore file.

#### items

Type: `array`

Array of strings to be appended to the patterns.

### .setItems(items)

Overrides patterns array with specified items.

#### items

Type: `array`

Array of strings to override patterns array with.

## License

MIT © [Rushan Alyautdinov](https://github.com/akgondber)

[npm-image]: https://img.shields.io/npm/v/post-command-hook-add-gitignore-plugin.svg?style=flat
[npm-url]: https://npmjs.org/package/post-command-hook-add-gitignore-plugin
