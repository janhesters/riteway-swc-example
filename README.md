# SWC RITEway Minimal Example

This is a minimal reproducable example for [this StackOverflow question](https://stackoverflow.com/questions/70899604/swc-with-javascript-how-to-handle-css-imports-and-how-to-absolute-imports).

## What Works

* `yarn test:identity` - Simple test of plain JavaScript.
* `yarn test:no-absolute-import-and-react` - This test shows relative imports work and that JSX works.
* `yarn dev` - You can see that the absolute imports work when compiled by Next.js which also [uses SWC by default](https://nextjs.org/docs/advanced-features/compiler#why-swc). (We have no idea which config they use though, and how you'd use it with [@swc-node/register](https://github.com/Brooooooklyn/swc-node/tree/master/packages/register).)

## What We Want to Make Work

* `yarn test` - This is the command that should ultimately work. It finds all files ending with `.test.js` within `src/` and runs them. It fails because using absolute imports and importing `.css` files crashes the compilation. (The ultimate test is `features/home/home-page-component.test.js`.)
* `yarn test:css` - Runs a test where `.css` is imported.
* `yarn test:absolute-import` - Runs a test with an absolute import.
* `yarn test:watch` - We added a watch script for your convenience, which runs whenever a `.js` file is saved. It fails because it runs `yarn test` but you can change that command :)

## Thanks

Thank you sooo much for your help! 🙏
