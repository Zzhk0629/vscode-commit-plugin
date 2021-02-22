import { window, commands, QuickPickOptions } from 'vscode';
import { Repository } from  '../types/git';
import { commitSelectType } from './commitSelectType';

export function inputBoxValidate(repo:Repository | undefined) {
  if (repo === void 0) {
    return false;
  }
  const inputValue = repo.inputBox.value;
  if (!inputValue) {
    window.showInformationMessage('请输入提交信息');
    return false;
  }
  const showQuickPickPlaceholder: QuickPickOptions = {
    placeHolder: '请选择commit的类型（Please select the type of commit）'
  };
  window.showQuickPick(commitSelectType, showQuickPickPlaceholder).then(selectType => {
    if (!selectType) {
      return false;
    }
    repo.inputBox.value = `${selectType.label}:${repo.inputBox.value}`;
    commands.executeCommand('git.commit');
  });
}