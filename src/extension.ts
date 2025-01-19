import * as vscode from 'vscode';
import { CodeActionWrap } from './code-actions';
import { dartCodeExtensionIdentifier, flutterExtensionIdentifier } from './constants';
import { wrapWith } from './utils';

const DART_MODE = { language: "dart", scheme: "file" };

// 拡張機能のエントリーポイント
export async function activate(context: vscode.ExtensionContext): Promise<void> {
	// Dart拡張機能がインストールされているか確認
	const dartExt = vscode.extensions.getExtension(dartCodeExtensionIdentifier);
	if (!dartExt) {
		vscode.window.showErrorMessage("The Dart extension is not installed. This extension cannot be activated.");
		return;
	}
	await dartExt.activate();

	// Flutter拡張機能がインストールされているか確認
	const flutterExt = vscode.extensions.getExtension(flutterExtensionIdentifier);
	if (!flutterExt) {
		vscode.window.showErrorMessage("The Flutter extension is not installed. This extension cannot be activated.");
		return;
	}
	await flutterExt.activate();

	// 固定されたラップコマンドを登録
	registerWrappers(context);
}

// 固定されたラップコマンドを登録
function registerWrappers(context: vscode.ExtensionContext) {
	// 固定されたラップの定義
	const wraps: CodeWrap[] = [
		{
			commandId: "wrapWith.",
			title: "Wrap with Expanded",
			command: () => wrapWith(selectedText => `Expanded(\n  child: ${selectedText},\n)`),
		},
	];

	// コマンドを登録
	const subscriptions = wraps.map(wrap =>
		vscode.commands.registerCommand(wrap.commandId, wrap.command)
	);

	// CodeActionProviderとしても登録
	subscriptions.push(
		vscode.languages.registerCodeActionsProvider(DART_MODE, new CodeActionWrap(wraps))
	);

	// 拡張機能が無効化されたときにコマンドを解放
	context.subscriptions.push(...subscriptions);
}



export function deactivate() { }

// 拡張機能の型定義
export type CodeWrap = {
	commandId: string;
	title: string;
	command: () => void;
};
