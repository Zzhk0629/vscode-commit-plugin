import { window, commands, QuickPickOptions } from 'vscode';
import { Repository } from  '../types/git';
import { commitSelectType } from './commitSelectType';

export function inputBoxValidate(repo:Repository | undefined) {
  if (repo === void 0) {
    return false;
  }
  const inputValue = repo.inputBox.value;
  if (!inputValue) {
    window.showInformationMessage('请输入提交信息11111');
    return false;
  }
  const showQuickPickPlaceholder: QuickPickOptions = {
    placeHolder: '请选择commit的类型（Please select the type of commit）'
  };
  window.showQuickPick(commitSelectType, showQuickPickPlaceholder).then(selectType => {
    if (!selectType) {
      return false;
    }
    const reg = /^(.+?):\s/;
    const label = reg.test(inputValue) ? inputValue.match(reg)![1] : '';
    const arr = commitSelectType.flatMap((i) => i.label);
    repo.inputBox.value = arr.includes(label) ? inputValue.replace(reg, `${selectType.label}: `) : `${selectType.label}: ${inputValue}`;
    commands.executeCommand('git.commit');
  });
}