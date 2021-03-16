# landz-vscode-commitValidate 使用规范

- 下载插件 Landz - Git Commit Validate

- 启动插件 cmd + shift + p 输入openGitCommitValidate

- 在源代码控制界面就能看到提交按钮旁边多了个icon，后续commit操作都通过该按钮控制

## 提交信息的类型

```javascript
const commitSelectType: Array<CommitSelectType> = [
  {
    label: 'feat',
    detail: '新功能（feature）'
  },
  {
    label: 'fix',
    detail: '修复bug'
  },
  {
    label: 'build',
    detail: '构建工具或者外部依赖的改动，例如webpack、npm等'
  },
  {
    label: 'style',
    detail: '代码格式化（但不影响代码运行的变动）'
  },
  {
    label: 'test',
    detail: '增加测试'
  },
  {
    label: 'docs',
    detail: '修改文档'
  },
  {
    label: 'refactor',
    detail: '重构(既不增加新功能，也不是修复bug)'
  },
  {
    label: 'perf',
    detail: '性能优化'
  },
  {
    label: 'revert',
    detail: '回退'
  },
]
```
**tip：** 后续提交类型有需求可通过vscode配置项的形式注入

## 快捷键

**window：** alt + enter
**mac：** option + enter