// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "sql-formatter" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "sql-formatter.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from sql-formatter2!");
    }
  );

  const f = vscode.commands.registerCommand(
    "sql-formatter.format",
    (...rest) => {
      // TODO: 获取用户输入
      // TODO: 将用户输入进行整理
      // TODO: 替换用户输入, 如果失败则不替换
      // TODO: 如果用户有选中的文本, 仅处理该选中文本
      vscode.window.showInformationMessage("read the file text");
    }
  );

  context.subscriptions.push(disposable, f);
}

// this method is called when your extension is deactivated
export function deactivate() {}
