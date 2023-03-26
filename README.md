# Neo4j Browser

## Customized version of neo4j-browser For ByteCodeDL/Satic Analysis.

![buttons](./.github/neo4j-bytecodedl-buttons.jpg)

### Chinese

1. 增加了删除节点的按钮
   1. 通过从**数据库**中删除节点排除一些路径，便于遍历其他新的路径
2. 增加了扩展前置节点和后继节点的单独按钮
   1. 后继节点按钮：可以查看该节点指向了哪些节点 -->
   2. 前置节点按钮：可以查看哪些节点指向改节点 <--

致谢：

1. 感谢苗姐对上述功能的实现
2. 感谢wh1t3pig提供了第二个需求
3. 感谢ChatGPT生成了两个箭头的SVG和将中文翻译成了英文

### English

1. Added a delete node button
   1. Exclude certain paths by deleting nodes from **database**, facilitating traversal of new paths
2. Added separate buttons to expand predecessor and successor nodes
   1. Successor node button: displays which nodes the selected node points to -->
   2. Predecessor node button: displays which nodes point to the selected node <--

Special thanks to:

1. Thanks to miao for implementing the above features
2. Thanks to wh1t3pig for providing the second requirement
3. Thanks to ChatGPT for generating the SVG of two arrows and translating the Chinese into English.
---

Neo4j Browser is the general purpose graphical user interface for Neo4j. Query, visualize, administer and monitor the database with modern and easy-to-use tools.

![neo4j browser screenshot](./.github/neo4j-browser-screenshot.png)

## Demo

You can try out the latest (unreleased) version of Neo4j Browser at [http://browser-canary.graphapp.io/](http://browser-canary.graphapp.io/).

Keep in mind that you will need to connect to an instance of Neo4j (the database) for most operations in Neo4j Browser. A simple way to get started is through [Neo4j Desktop](https://neo4j.com/download/). Once you've started a database it's by default available for Neo4j Browser to connect to on **localhost:7687**.

## Feedback & Contributing

Found a bug or some other problem with Neo4j Browser? Please [**open an issue**](https://github.com/neo4j/neo4j-browser/issues).

Have an idea for a new feature? You're welcome to leave suggestions and ideas [here](https://neo4j-browser.canny.io/feature-requests).

Contributions welcome! More information in our [CONTRIBUTING.md](CONTRIBUTING.md).

## Project structure

Browser has a subproject of re-usable components bundled together and exposed as `neo4j-arc`. Rather than set up mono-repo tooling the we've set up eslint to isolate `neo4j-arc` and given it a seperate build step. Code in browser can only to import code from `neo4j-arc` through `neo4j-arc` aliases (as if it was a seperate project) and `neo4j-arc` is not allowed to import any code from outside it's own folder.

## Development

Running Neo4j Browser locally requires Node.js (^12.4.0) and for dependencies we use yarn (`npm install -g yarn`).
To install dependencies and then start the development server at `http://localhost:8080`:

```shell
yarn install
yarn start
```

Or to run in production mode:

```shell
yarn start-prod
```

### Testing overview

Neo4j Browser has both unit and end to end tests running automatically on every pull request. To run the tests locally:

`yarn test-unit` runs a linter and then our unit tests.

`yarn test-e2e` runs our Cypress end to end tests in the easiest, slowest way. Running them with this command requires docker installed and that nothing else runs on ports 7687 and 8080.

#### Cypress e2e test suite in depth

`yarn e2e-open` to open the Cypress test runner (requires a **fresh** installation of Neo4j to run against, expects neo4j 3.5 by default). See details below on how to configure database version.

`yarn e2e-local-open` to run against an existing server (with a password already set). We use `newpassword` as the default password here, make sure to pass your password:
`yarn e2e-local-open --env browser-password=<your-password-here>`

To avoid opening the Cypress test runner and just run the tests in the terminal, remove the "-open" suffix from the previous two commands (so `yarn e2e` and `yarn e2e-local` respectively).

So to run tests on your existing 4.2 database with the password "hunter2" without opening the Cypress visual test runner:
`yarn e2e-local --env browser-password=hunter2,server=4.2`

All the available options for `--env` are:

```
server=3.5|4.0|4.1|4.2|4.3 (default 4.3)
edition=enterprise|community|aura (default enterprise)
browser-password=<your-pw> (default 'newpassword')
include-import-tests=true|false (default false)
bolt-url=<bolt url excluding the protocol> (default localhost:7687)
```

There are some additional options that can only be set as system environmental variables (meaning they cannot be set using the `--env` flag as the ones above).
These needs to be set before the test command is run.

```
CYPRESS_E2E_TEST_ENV=local|null (if the initial set of pw should run or not) (default undefined)
CYPRESS_BASE_URL=<url to reach the browser to test> (default http://localhost:8080)
```

Example: `CYPRESS_E2E_TEST_ENV="local" CYPRESS_BASE_URL=http://localhost:30000 cypress open --env server=4.2`
