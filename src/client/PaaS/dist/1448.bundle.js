"use strict";(self.webpackChunkd42paas_frontend=self.webpackChunkd42paas_frontend||[]).push([[1448],{11448:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['(*', '*)']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')'],\r\n        ['<', '>']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '<', close: '>' },\r\n        { open: \"'\", close: \"'\" },\r\n        { open: \"\\\"\", close: \"\\\"\" },\r\n        { open: \"(*\", close: \"*)\" },\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '<', close: '>' },\r\n        { open: \"'\", close: \"'\" },\r\n        { open: \"\\\"\", close: \"\\\"\" },\r\n        { open: \"(*\", close: \"*)\" },\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.cameligo',\r\n    ignoreCase: true,\r\n    brackets: [\r\n        { open: '{', close: '}', token: 'delimiter.curly' },\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\r\n        { open: '<', close: '>', token: 'delimiter.angle' }\r\n    ],\r\n    keywords: [\r\n        'abs',\r\n        'assert',\r\n        'block',\r\n        'Bytes',\r\n        'case',\r\n        'Crypto',\r\n        'Current',\r\n        'else',\r\n        'failwith',\r\n        'false',\r\n        'for',\r\n        'fun',\r\n        'if',\r\n        'in',\r\n        'let',\r\n        'let%entry',\r\n        'let%init',\r\n        'List',\r\n        'list',\r\n        'Map',\r\n        'map',\r\n        'match',\r\n        'match%nat',\r\n        'mod',\r\n        'not',\r\n        'operation',\r\n        'Operation',\r\n        'of',\r\n        'record',\r\n        'Set',\r\n        'set',\r\n        'sender',\r\n        'skip',\r\n        'source',\r\n        'String',\r\n        'then',\r\n        'to',\r\n        'true',\r\n        'type',\r\n        'with',\r\n    ],\r\n    typeKeywords: ['int', 'unit', 'string', 'tz', 'nat', 'bool'],\r\n    operators: [\r\n        '=',\r\n        '>',\r\n        '<',\r\n        '<=',\r\n        '>=',\r\n        '<>',\r\n        ':',\r\n        ':=',\r\n        'and',\r\n        'mod',\r\n        'or',\r\n        '+',\r\n        '-',\r\n        '*',\r\n        '/',\r\n        '@',\r\n        '&',\r\n        '^',\r\n        '%',\r\n        '->',\r\n        '<-',\r\n        '&&',\r\n        '||',\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><:@\\^&|+\\-*\\/\\^%]+/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [\r\n                /[a-zA-Z_][\\w]*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/[<>](?!@symbols)/, '@brackets'],\r\n            [\r\n                /@symbols/,\r\n                {\r\n                    cases: {\r\n                        '@operators': 'delimiter',\r\n                        '@default': ''\r\n                    }\r\n                }\r\n            ],\r\n            // numbers\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/\\$[0-9a-fA-F]{1,16}/, 'number.hex'],\r\n            [/\\d+/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings\r\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\r\n            [/'/, 'string', '@string'],\r\n            // characters\r\n            [/'[^\\\\']'/, 'string'],\r\n            [/'/, 'string.invalid'],\r\n            [/\\#\\d+/, 'string']\r\n        ],\r\n        /* */\r\n        comment: [\r\n            [/[^\\(\\*]+/, 'comment'],\r\n            //[/\\(\\*/,    'comment', '@push' ],    // nested comment  not allowed :-(\r\n            [/\\*\\)/, 'comment', '@pop'],\r\n            [/\\(\\*/, 'comment']\r\n        ],\r\n        string: [\r\n            [/[^\\\\']+/, 'string'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, 'white'],\r\n            [/\\(\\*/, 'comment', '@comment'],\r\n            [/\\/\\/.*$/, 'comment']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://d42paas_frontend/./node_modules/monaco-editor/esm/vs/basic-languages/cameligo/cameligo.js?")}}]);