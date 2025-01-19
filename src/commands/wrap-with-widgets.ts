import { CodeWrap } from "../extension";
import { wrapWith } from "../utils";

/// Widget関連コマンドを定義
export const widgetCommands: CodeWrap[] = [

    {
        commandId: "wrapWith.stack",
        title: "Wrap with Stack",
        command: () => wrapWith(selectedText => `Stack(\n  children: [\n    ${selectedText},\n  ],\n)`),
    },
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
    {
        commandId: "wrapWith.coloredBox",
        title: "Wrap with ColoredBox",
        command: () => wrapWith(selectedText => `ColoredBox(\n  color: Colors.blue,\n  child: ${selectedText},\n)`),
    },
    {
        commandId: "wrapWith.align",
        title: "Wrap with Align",
        command: () => wrapWith(selectedText => `Align(\n  alignment: Alignment.center,\n  child: ${selectedText},\n)`),
    },
    {
        commandId: "wrapWith.constrainedBox",
        title: "Wrap with ConstrainedBox",
        command: () => wrapWith(selectedText => `ConstrainedBox(\n  constraints: BoxConstraints(maxWidth: 100, maxHeight: 100),\n  child: ${selectedText},\n)`),
    },
];
