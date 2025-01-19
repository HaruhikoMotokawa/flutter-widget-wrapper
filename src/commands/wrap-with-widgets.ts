import { CodeWrap } from "../extension";
import { wrapWith } from "../utils";

// Widget関連コマンドを定義
export const widgetCommands: CodeWrap[] = [
    {
        commandId: "wrapWith.expanded",
        title: "Wrap with Expanded",
        command: () => wrapWith(selectedText => `Expanded(\n  child: ${selectedText},\n)`),
    },

    {
        commandId: "wrapWith.flexible",
        title: "Wrap with Flexible",
        command: () => wrapWith(selectedText => `Flexible(\n  child: ${selectedText},\n)`),
    },

    // FittedBox
    {
        commandId: "wrapWith.fittedBox",
        title: "Wrap with FittedBox",
        command: () => wrapWith(selectedText => `FittedBox(\n  child: ${selectedText},\n)`),
    },
    // Stack
    {
        commandId: "wrapWith.stack",
        title: "Wrap with Stack",
        command: () => wrapWith(selectedText => `Stack(\n  children: [\n    ${selectedText},\n  ],\n)`),
    },


];
