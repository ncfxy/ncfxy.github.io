# Build Helper

## How to generate ChangeLog

```bash
    npm install -g conventional-changelog-cli
    conventional-changelog -p angular -i CHANGELOG.md -s
```

## Angular commit message

```text
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

| type     | 意义                                              |
| -------- | ------------------------------------------------- |
| feat     | 新功能（feature）                                 |
| fix      | 修补 bug                                          |
| docs     | 文档（documentation）                             |
| style    | 格式（不影响代码运行的变动）                      |
| refactor | 重构（即不是新增功能，也不是修改 bug 的代码变动） |
| test     | 增加测试                                          |
| chore    | 构建过程或辅助工具的变动                          |
