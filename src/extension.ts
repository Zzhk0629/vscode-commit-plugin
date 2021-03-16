import * as vscode from 'vscode';
import { getGitExtension, gitExtensionIsEnable } from './core/gitExtension';
import { inputBoxValidate } from './core/inputBoxValidate';
import { Repository } from './types/git';

export function activate(context: vscode.ExtensionContext) {

	const gitContext = getGitExtension();
		if (!gitExtensionIsEnable(gitContext)) {
			vscode.window.showErrorMessage('git扩展当前不可用，请设置后重新尝试');
			return false;
		}
	let currentRepo: Repository | undefined = gitContext?.getAPI(1).repositories[0];

	let disposable = vscode.commands.registerCommand('landz.openGitCommitValidate', (uri) => {
		console.log(1111111, uri, gitContext, vscode.Uri);
		if (uri) {
			console.log(22222, gitContext);
			if (gitContext === void 0) {
				return false;
			} else {
				currentRepo = gitContext.getAPI(1).repositories.find(repo => {
					return repo.rootUri.path === uri._rootUri.path;
				});
				inputBoxValidate(currentRepo);
			}
		} else {
			inputBoxValidate(currentRepo);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
