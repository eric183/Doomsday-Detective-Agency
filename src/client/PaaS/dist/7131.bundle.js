"use strict";(self.webpackChunkd42paas_frontend=self.webpackChunkd42paas_frontend||[]).push([[7131],{47131:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n// Copyright (c) Microsoft Corporation.\r\n// Licensed under the MIT License.\r\nvar bounded = function (text) { return \"\\\\b\" + text + \"\\\\b\"; };\r\nvar identifierStart = '[_a-zA-Z]';\r\nvar identifierContinue = '[_a-zA-Z0-9]';\r\nvar identifier = bounded(\"\" + identifierStart + identifierContinue + \"*\");\r\nvar keywords = [\r\n    'targetScope',\r\n    'resource',\r\n    'module',\r\n    'param',\r\n    'var',\r\n    'output',\r\n    'for',\r\n    'in',\r\n    'if',\r\n    'existing'\r\n];\r\nvar namedLiterals = ['true', 'false', 'null'];\r\nvar nonCommentWs = \"[ \\\\t\\\\r\\\\n]\";\r\nvar numericLiteral = \"[0-9]+\";\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['/*', '*/']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: \"'\", close: \"'\" },\r\n        { open: \"'''\", close: \"'''\" }\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\r\n        { open: \"'''\", close: \"'''\", notIn: ['string', 'comment'] }\r\n    ],\r\n    autoCloseBefore: \":.,=}])' \\n\\t\",\r\n    indentationRules: {\r\n        increaseIndentPattern: new RegExp('^((?!\\\\/\\\\/).)*(\\\\{[^}\"\\'`]*|\\\\([^)\"\\'`]*|\\\\[[^\\\\]\"\\'`]*)$'),\r\n        decreaseIndentPattern: new RegExp('^((?!.*?\\\\/\\\\*).*\\\\*/)?\\\\s*[\\\\}\\\\]].*$')\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.bicep',\r\n    brackets: [\r\n        { open: '{', close: '}', token: 'delimiter.curly' },\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\r\n    ],\r\n    symbols: /[=><!~?:&|+\\-*/^%]+/,\r\n    keywords: keywords,\r\n    namedLiterals: namedLiterals,\r\n    escapes: \"\\\\\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\\\\\|'|\\\\${)\",\r\n    tokenizer: {\r\n        root: [{ include: '@expression' }, { include: '@whitespace' }],\r\n        stringVerbatim: [\r\n            { regex: \"(|'|'')[^']\", action: { token: 'string' } },\r\n            { regex: \"'''\", action: { token: 'string.quote', next: '@pop' } }\r\n        ],\r\n        stringLiteral: [\r\n            { regex: \"\\\\${\", action: { token: 'delimiter.bracket', next: '@bracketCounting' } },\r\n            { regex: \"[^\\\\\\\\'$]+\", action: { token: 'string' } },\r\n            { regex: '@escapes', action: { token: 'string.escape' } },\r\n            { regex: \"\\\\\\\\.\", action: { token: 'string.escape.invalid' } },\r\n            { regex: \"'\", action: { token: 'string', next: '@pop' } }\r\n        ],\r\n        bracketCounting: [\r\n            { regex: \"{\", action: { token: 'delimiter.bracket', next: '@bracketCounting' } },\r\n            { regex: \"}\", action: { token: 'delimiter.bracket', next: '@pop' } },\r\n            { include: 'expression' }\r\n        ],\r\n        comment: [\r\n            { regex: \"[^\\\\*]+\", action: { token: 'comment' } },\r\n            { regex: \"\\\\*\\\\/\", action: { token: 'comment', next: '@pop' } },\r\n            { regex: \"[\\\\/*]\", action: { token: 'comment' } }\r\n        ],\r\n        whitespace: [\r\n            { regex: nonCommentWs },\r\n            { regex: \"\\\\/\\\\*\", action: { token: 'comment', next: '@comment' } },\r\n            { regex: \"\\\\/\\\\/.*$\", action: { token: 'comment' } }\r\n        ],\r\n        expression: [\r\n            { regex: \"'''\", action: { token: 'string.quote', next: '@stringVerbatim' } },\r\n            { regex: \"'\", action: { token: 'string.quote', next: '@stringLiteral' } },\r\n            { regex: numericLiteral, action: { token: 'number' } },\r\n            {\r\n                regex: identifier,\r\n                action: {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword' },\r\n                        '@namedLiterals': { token: 'keyword' },\r\n                        '@default': { token: 'identifier' }\r\n                    }\r\n                }\r\n            }\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://d42paas_frontend/./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.js?")}}]);