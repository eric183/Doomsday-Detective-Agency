"use strict";(self.webpackChunkd42paas_frontend=self.webpackChunkd42paas_frontend||[]).push([[9537],{79537:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['/*', '*/']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.objective-c',\r\n    keywords: [\r\n        '#import',\r\n        '#include',\r\n        '#define',\r\n        '#else',\r\n        '#endif',\r\n        '#if',\r\n        '#ifdef',\r\n        '#ifndef',\r\n        '#ident',\r\n        '#undef',\r\n        '@class',\r\n        '@defs',\r\n        '@dynamic',\r\n        '@encode',\r\n        '@end',\r\n        '@implementation',\r\n        '@interface',\r\n        '@package',\r\n        '@private',\r\n        '@protected',\r\n        '@property',\r\n        '@protocol',\r\n        '@public',\r\n        '@selector',\r\n        '@synthesize',\r\n        '__declspec',\r\n        'assign',\r\n        'auto',\r\n        'BOOL',\r\n        'break',\r\n        'bycopy',\r\n        'byref',\r\n        'case',\r\n        'char',\r\n        'Class',\r\n        'const',\r\n        'copy',\r\n        'continue',\r\n        'default',\r\n        'do',\r\n        'double',\r\n        'else',\r\n        'enum',\r\n        'extern',\r\n        'FALSE',\r\n        'false',\r\n        'float',\r\n        'for',\r\n        'goto',\r\n        'if',\r\n        'in',\r\n        'int',\r\n        'id',\r\n        'inout',\r\n        'IMP',\r\n        'long',\r\n        'nil',\r\n        'nonatomic',\r\n        'NULL',\r\n        'oneway',\r\n        'out',\r\n        'private',\r\n        'public',\r\n        'protected',\r\n        'readwrite',\r\n        'readonly',\r\n        'register',\r\n        'return',\r\n        'SEL',\r\n        'self',\r\n        'short',\r\n        'signed',\r\n        'sizeof',\r\n        'static',\r\n        'struct',\r\n        'super',\r\n        'switch',\r\n        'typedef',\r\n        'TRUE',\r\n        'true',\r\n        'union',\r\n        'unsigned',\r\n        'volatile',\r\n        'void',\r\n        'while'\r\n    ],\r\n    decpart: /\\d(_?\\d)*/,\r\n    decimal: /0|@decpart/,\r\n    tokenizer: {\r\n        root: [\r\n            { include: '@comments' },\r\n            { include: '@whitespace' },\r\n            { include: '@numbers' },\r\n            { include: '@strings' },\r\n            [/[,:;]/, 'delimiter'],\r\n            [/[{}\\[\\]()<>]/, '@brackets'],\r\n            [\r\n                /[a-zA-Z@#]\\w*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': 'keyword',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            [/[<>=\\\\+\\\\-\\\\*\\\\/\\\\^\\\\|\\\\~,]|and\\\\b|or\\\\b|not\\\\b]/, 'operator']\r\n        ],\r\n        whitespace: [[/\\s+/, 'white']],\r\n        comments: [\r\n            ['\\\\/\\\\*', 'comment', '@comment'],\r\n            ['\\\\/\\\\/+.*', 'comment']\r\n        ],\r\n        comment: [\r\n            ['\\\\*\\\\/', 'comment', '@pop'],\r\n            ['.', 'comment']\r\n        ],\r\n        numbers: [\r\n            [/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/, 'number.hex'],\r\n            [\r\n                /@decimal((\\.@decpart)?([eE][\\-+]?@decpart)?)[fF]*/,\r\n                {\r\n                    cases: {\r\n                        '(\\\\d)*': 'number',\r\n                        $0: 'number.float'\r\n                    }\r\n                }\r\n            ]\r\n        ],\r\n        // Recognize strings, including those broken across lines with \\ (but not without)\r\n        strings: [\r\n            [/'$/, 'string.escape', '@popall'],\r\n            [/'/, 'string.escape', '@stringBody'],\r\n            [/\"$/, 'string.escape', '@popall'],\r\n            [/\"/, 'string.escape', '@dblStringBody']\r\n        ],\r\n        stringBody: [\r\n            [/[^\\\\']+$/, 'string', '@popall'],\r\n            [/[^\\\\']+/, 'string'],\r\n            [/\\\\./, 'string'],\r\n            [/'/, 'string.escape', '@popall'],\r\n            [/\\\\$/, 'string']\r\n        ],\r\n        dblStringBody: [\r\n            [/[^\\\\\"]+$/, 'string', '@popall'],\r\n            [/[^\\\\\"]+/, 'string'],\r\n            [/\\\\./, 'string'],\r\n            [/\"/, 'string.escape', '@popall'],\r\n            [/\\\\$/, 'string']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://d42paas_frontend/./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js?")}}]);