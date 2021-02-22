import { QuickPickItem } from 'vscode';

interface CommitSelectType extends QuickPickItem {}

export const commitSelectType: Array<CommitSelectType> = [
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
];