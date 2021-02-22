import { extensions } from 'vscode';
import { GitExtension } from '../types/git';

/**
 * 获取git扩展
 * 
 * @return {GitExtension} git扩展
 */
export function getGitExtension() {
  const gitExtension = extensions.getExtension<GitExtension>('vscode.git')?.exports;
  return gitExtension;
}

/**
 * 判断git扩展当前是否可用
 * 
 * @param extension git扩展
 * @return {Boolean}
 */
export function gitExtensionIsEnable(extension:GitExtension | undefined) {
  return extension?.enabled;
}