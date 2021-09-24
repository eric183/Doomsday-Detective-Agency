"use strict";(self.webpackChunkd42paas_frontend=self.webpackChunkd42paas_frontend||[]).push([[9400],{69400:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//'\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' }\r\n    ]\r\n};\r\nvar language = {\r\n    // Set defaultToken to invalid to see what you do not tokenize yet\r\n    keywords: [\r\n        'namespace',\r\n        'open',\r\n        'as',\r\n        'operation',\r\n        'function',\r\n        'body',\r\n        'adjoint',\r\n        'newtype',\r\n        'controlled',\r\n        'if',\r\n        'elif',\r\n        'else',\r\n        'repeat',\r\n        'until',\r\n        'fixup',\r\n        'for',\r\n        'in',\r\n        'while',\r\n        'return',\r\n        'fail',\r\n        'within',\r\n        'apply',\r\n        'Adjoint',\r\n        'Controlled',\r\n        'Adj',\r\n        'Ctl',\r\n        'is',\r\n        'self',\r\n        'auto',\r\n        'distribute',\r\n        'invert',\r\n        'intrinsic',\r\n        'let',\r\n        'set',\r\n        'w/',\r\n        'new',\r\n        'not',\r\n        'and',\r\n        'or',\r\n        'use',\r\n        'borrow',\r\n        'using',\r\n        'borrowing',\r\n        'mutable'\r\n    ],\r\n    typeKeywords: [\r\n        'Unit',\r\n        'Int',\r\n        'BigInt',\r\n        'Double',\r\n        'Bool',\r\n        'String',\r\n        'Qubit',\r\n        'Result',\r\n        'Pauli',\r\n        'Range'\r\n    ],\r\n    invalidKeywords: [\r\n        'abstract',\r\n        'base',\r\n        'bool',\r\n        'break',\r\n        'byte',\r\n        'case',\r\n        'catch',\r\n        'char',\r\n        'checked',\r\n        'class',\r\n        'const',\r\n        'continue',\r\n        'decimal',\r\n        'default',\r\n        'delegate',\r\n        'do',\r\n        'double',\r\n        'enum',\r\n        'event',\r\n        'explicit',\r\n        'extern',\r\n        'finally',\r\n        'fixed',\r\n        'float',\r\n        'foreach',\r\n        'goto',\r\n        'implicit',\r\n        'int',\r\n        'interface',\r\n        'lock',\r\n        'long',\r\n        'null',\r\n        'object',\r\n        'operator',\r\n        'out',\r\n        'override',\r\n        'params',\r\n        'private',\r\n        'protected',\r\n        'public',\r\n        'readonly',\r\n        'ref',\r\n        'sbyte',\r\n        'sealed',\r\n        'short',\r\n        'sizeof',\r\n        'stackalloc',\r\n        'static',\r\n        'string',\r\n        'struct',\r\n        'switch',\r\n        'this',\r\n        'throw',\r\n        'try',\r\n        'typeof',\r\n        'unit',\r\n        'ulong',\r\n        'unchecked',\r\n        'unsafe',\r\n        'ushort',\r\n        'virtual',\r\n        'void',\r\n        'volatile'\r\n    ],\r\n    constants: ['true', 'false', 'PauliI', 'PauliX', 'PauliY', 'PauliZ', 'One', 'Zero'],\r\n    builtin: [\r\n        'X',\r\n        'Y',\r\n        'Z',\r\n        'H',\r\n        'HY',\r\n        'S',\r\n        'T',\r\n        'SWAP',\r\n        'CNOT',\r\n        'CCNOT',\r\n        'MultiX',\r\n        'R',\r\n        'RFrac',\r\n        'Rx',\r\n        'Ry',\r\n        'Rz',\r\n        'R1',\r\n        'R1Frac',\r\n        'Exp',\r\n        'ExpFrac',\r\n        'Measure',\r\n        'M',\r\n        'MultiM',\r\n        'Message',\r\n        'Length',\r\n        'Assert',\r\n        'AssertProb',\r\n        'AssertEqual'\r\n    ],\r\n    operators: [\r\n        'and=',\r\n        '<-',\r\n        '->',\r\n        '*',\r\n        '*=',\r\n        '@',\r\n        '!',\r\n        '^',\r\n        '^=',\r\n        ':',\r\n        '::',\r\n        '..',\r\n        '==',\r\n        '...',\r\n        '=',\r\n        '=>',\r\n        '>',\r\n        '>=',\r\n        '<',\r\n        '<=',\r\n        '-',\r\n        '-=',\r\n        '!=',\r\n        'or=',\r\n        '%',\r\n        '%=',\r\n        '|',\r\n        '+',\r\n        '+=',\r\n        '?',\r\n        '/',\r\n        '/=',\r\n        '&&&',\r\n        '&&&=',\r\n        '^^^',\r\n        '^^^=',\r\n        '>>>',\r\n        '>>>=',\r\n        '<<<',\r\n        '<<<=',\r\n        '|||',\r\n        '|||=',\r\n        '~~~',\r\n        '_',\r\n        'w/',\r\n        'w/='\r\n    ],\r\n    namespaceFollows: ['namespace', 'open'],\r\n    symbols: /[=><!~?:&|+\\-*\\/\\^%@._]+/,\r\n    escapes: /\\\\[\\s\\S]/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // identifiers and keywords\r\n            [\r\n                /[a-zA-Z_$][\\w$]*/,\r\n                {\r\n                    cases: {\r\n                        '@namespaceFollows': {\r\n                            token: 'keyword.$0',\r\n                            next: '@namespace'\r\n                        },\r\n                        '@typeKeywords': 'type',\r\n                        '@keywords': 'keyword',\r\n                        '@constants': 'constant',\r\n                        '@builtin': 'keyword',\r\n                        '@invalidKeywords': 'invalid',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // whitespace\r\n            { include: '@whitespace' },\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],\r\n            // numbers\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/\\d+/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings\r\n            //[/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid' ],  // non-teminated string\r\n            [/\"/, { token: 'string.quote', bracket: '@open', next: '@string' }]\r\n        ],\r\n        string: [\r\n            [/[^\\\\\"]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]\r\n        ],\r\n        namespace: [\r\n            { include: '@whitespace' },\r\n            [/[A-Za-z]\\w*/, 'namespace'],\r\n            [/[\\.=]/, 'delimiter'],\r\n            ['', '', '@pop']\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, 'white'],\r\n            [/(\\/\\/).*/, 'comment']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://d42paas_frontend/./node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.js?")}}]);