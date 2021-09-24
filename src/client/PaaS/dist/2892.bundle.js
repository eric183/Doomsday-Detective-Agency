"use strict";(self.webpackChunkd42paas_frontend=self.webpackChunkd42paas_frontend||[]).push([[2892],{22892:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//'\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\r\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\r\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\r\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\r\n        { open: '(', close: ')', notIn: ['string', 'comment'] }\r\n    ],\r\n    folding: {\r\n        offSide: true\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.pug',\r\n    ignoreCase: true,\r\n    brackets: [\r\n        { token: 'delimiter.curly', open: '{', close: '}' },\r\n        { token: 'delimiter.array', open: '[', close: ']' },\r\n        { token: 'delimiter.parenthesis', open: '(', close: ')' }\r\n    ],\r\n    keywords: [\r\n        'append',\r\n        'block',\r\n        'case',\r\n        'default',\r\n        'doctype',\r\n        'each',\r\n        'else',\r\n        'extends',\r\n        'for',\r\n        'if',\r\n        'in',\r\n        'include',\r\n        'mixin',\r\n        'typeof',\r\n        'unless',\r\n        'var',\r\n        'when'\r\n    ],\r\n    tags: [\r\n        'a',\r\n        'abbr',\r\n        'acronym',\r\n        'address',\r\n        'area',\r\n        'article',\r\n        'aside',\r\n        'audio',\r\n        'b',\r\n        'base',\r\n        'basefont',\r\n        'bdi',\r\n        'bdo',\r\n        'blockquote',\r\n        'body',\r\n        'br',\r\n        'button',\r\n        'canvas',\r\n        'caption',\r\n        'center',\r\n        'cite',\r\n        'code',\r\n        'col',\r\n        'colgroup',\r\n        'command',\r\n        'datalist',\r\n        'dd',\r\n        'del',\r\n        'details',\r\n        'dfn',\r\n        'div',\r\n        'dl',\r\n        'dt',\r\n        'em',\r\n        'embed',\r\n        'fieldset',\r\n        'figcaption',\r\n        'figure',\r\n        'font',\r\n        'footer',\r\n        'form',\r\n        'frame',\r\n        'frameset',\r\n        'h1',\r\n        'h2',\r\n        'h3',\r\n        'h4',\r\n        'h5',\r\n        'h6',\r\n        'head',\r\n        'header',\r\n        'hgroup',\r\n        'hr',\r\n        'html',\r\n        'i',\r\n        'iframe',\r\n        'img',\r\n        'input',\r\n        'ins',\r\n        'keygen',\r\n        'kbd',\r\n        'label',\r\n        'li',\r\n        'link',\r\n        'map',\r\n        'mark',\r\n        'menu',\r\n        'meta',\r\n        'meter',\r\n        'nav',\r\n        'noframes',\r\n        'noscript',\r\n        'object',\r\n        'ol',\r\n        'optgroup',\r\n        'option',\r\n        'output',\r\n        'p',\r\n        'param',\r\n        'pre',\r\n        'progress',\r\n        'q',\r\n        'rp',\r\n        'rt',\r\n        'ruby',\r\n        's',\r\n        'samp',\r\n        'script',\r\n        'section',\r\n        'select',\r\n        'small',\r\n        'source',\r\n        'span',\r\n        'strike',\r\n        'strong',\r\n        'style',\r\n        'sub',\r\n        'summary',\r\n        'sup',\r\n        'table',\r\n        'tbody',\r\n        'td',\r\n        'textarea',\r\n        'tfoot',\r\n        'th',\r\n        'thead',\r\n        'time',\r\n        'title',\r\n        'tr',\r\n        'tracks',\r\n        'tt',\r\n        'u',\r\n        'ul',\r\n        'video',\r\n        'wbr'\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[\\+\\-\\*\\%\\&\\|\\!\\=\\/\\.\\,\\:]+/,\r\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    tokenizer: {\r\n        root: [\r\n            // Tag or a keyword at start\r\n            [\r\n                /^(\\s*)([a-zA-Z_-][\\w-]*)/,\r\n                {\r\n                    cases: {\r\n                        '$2@tags': {\r\n                            cases: {\r\n                                '@eos': ['', 'tag'],\r\n                                '@default': ['', { token: 'tag', next: '@tag.$1' }]\r\n                            }\r\n                        },\r\n                        '$2@keywords': ['', { token: 'keyword.$2' }],\r\n                        '@default': ['', '']\r\n                    }\r\n                }\r\n            ],\r\n            // id\r\n            [\r\n                /^(\\s*)(#[a-zA-Z_-][\\w-]*)/,\r\n                {\r\n                    cases: {\r\n                        '@eos': ['', 'tag.id'],\r\n                        '@default': ['', { token: 'tag.id', next: '@tag.$1' }]\r\n                    }\r\n                }\r\n            ],\r\n            // class\r\n            [\r\n                /^(\\s*)(\\.[a-zA-Z_-][\\w-]*)/,\r\n                {\r\n                    cases: {\r\n                        '@eos': ['', 'tag.class'],\r\n                        '@default': ['', { token: 'tag.class', next: '@tag.$1' }]\r\n                    }\r\n                }\r\n            ],\r\n            // plain text with pipe\r\n            [/^(\\s*)(\\|.*)$/, ''],\r\n            { include: '@whitespace' },\r\n            // keywords\r\n            [\r\n                /[a-zA-Z_$][\\w$]*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': ''\r\n                    }\r\n                }\r\n            ],\r\n            // delimiters and operators\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/@symbols/, 'delimiter'],\r\n            // numbers\r\n            [/\\d+\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/\\d+/, 'number'],\r\n            // strings:\r\n            [/\"/, 'string', '@string.\"'],\r\n            [/'/, 'string', \"@string.'\"]\r\n        ],\r\n        tag: [\r\n            [/(\\.)(\\s*$)/, [{ token: 'delimiter', next: '@blockText.$S2.' }, '']],\r\n            [/\\s+/, { token: '', next: '@simpleText' }],\r\n            // id\r\n            [\r\n                /#[a-zA-Z_-][\\w-]*/,\r\n                {\r\n                    cases: {\r\n                        '@eos': { token: 'tag.id', next: '@pop' },\r\n                        '@default': 'tag.id'\r\n                    }\r\n                }\r\n            ],\r\n            // class\r\n            [\r\n                /\\.[a-zA-Z_-][\\w-]*/,\r\n                {\r\n                    cases: {\r\n                        '@eos': { token: 'tag.class', next: '@pop' },\r\n                        '@default': 'tag.class'\r\n                    }\r\n                }\r\n            ],\r\n            // attributes\r\n            [/\\(/, { token: 'delimiter.parenthesis', next: '@attributeList' }]\r\n        ],\r\n        simpleText: [\r\n            [/[^#]+$/, { token: '', next: '@popall' }],\r\n            [/[^#]+/, { token: '' }],\r\n            // interpolation\r\n            [\r\n                /(#{)([^}]*)(})/,\r\n                {\r\n                    cases: {\r\n                        '@eos': [\r\n                            'interpolation.delimiter',\r\n                            'interpolation',\r\n                            {\r\n                                token: 'interpolation.delimiter',\r\n                                next: '@popall'\r\n                            }\r\n                        ],\r\n                        '@default': [\r\n                            'interpolation.delimiter',\r\n                            'interpolation',\r\n                            'interpolation.delimiter'\r\n                        ]\r\n                    }\r\n                }\r\n            ],\r\n            [/#$/, { token: '', next: '@popall' }],\r\n            [/#/, '']\r\n        ],\r\n        attributeList: [\r\n            [/\\s+/, ''],\r\n            [\r\n                /(\\w+)(\\s*=\\s*)(\"|')/,\r\n                ['attribute.name', 'delimiter', { token: 'attribute.value', next: '@value.$3' }]\r\n            ],\r\n            [/\\w+/, 'attribute.name'],\r\n            [\r\n                /,/,\r\n                {\r\n                    cases: {\r\n                        '@eos': {\r\n                            token: 'attribute.delimiter',\r\n                            next: '@popall'\r\n                        },\r\n                        '@default': 'attribute.delimiter'\r\n                    }\r\n                }\r\n            ],\r\n            [/\\)$/, { token: 'delimiter.parenthesis', next: '@popall' }],\r\n            [/\\)/, { token: 'delimiter.parenthesis', next: '@pop' }]\r\n        ],\r\n        whitespace: [\r\n            [/^(\\s*)(\\/\\/.*)$/, { token: 'comment', next: '@blockText.$1.comment' }],\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            [/\x3c!--/, { token: 'comment', next: '@comment' }]\r\n        ],\r\n        blockText: [\r\n            [\r\n                /^\\s+.*$/,\r\n                {\r\n                    cases: {\r\n                        '($S2\\\\s+.*$)': { token: '$S3' },\r\n                        '@default': { token: '@rematch', next: '@popall' }\r\n                    }\r\n                }\r\n            ],\r\n            [/./, { token: '@rematch', next: '@popall' }]\r\n        ],\r\n        comment: [\r\n            [/[^<\\-]+/, 'comment.content'],\r\n            [/--\x3e/, { token: 'comment', next: '@pop' }],\r\n            [/\x3c!--/, 'comment.content.invalid'],\r\n            [/[<\\-]/, 'comment.content']\r\n        ],\r\n        string: [\r\n            [\r\n                /[^\\\\\"'#]+/,\r\n                {\r\n                    cases: {\r\n                        '@eos': { token: 'string', next: '@popall' },\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /@escapes/,\r\n                {\r\n                    cases: {\r\n                        '@eos': { token: 'string.escape', next: '@popall' },\r\n                        '@default': 'string.escape'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /\\\\./,\r\n                {\r\n                    cases: {\r\n                        '@eos': {\r\n                            token: 'string.escape.invalid',\r\n                            next: '@popall'\r\n                        },\r\n                        '@default': 'string.escape.invalid'\r\n                    }\r\n                }\r\n            ],\r\n            // interpolation\r\n            [\r\n                /(#{)([^}]*)(})/,\r\n                ['interpolation.delimiter', 'interpolation', 'interpolation.delimiter']\r\n            ],\r\n            [/#/, 'string'],\r\n            [\r\n                /[\"']/,\r\n                {\r\n                    cases: {\r\n                        '$#==$S2': { token: 'string', next: '@pop' },\r\n                        '@default': { token: 'string' }\r\n                    }\r\n                }\r\n            ]\r\n        ],\r\n        // Almost identical to above, except for escapes and the output token\r\n        value: [\r\n            [\r\n                /[^\\\\\"']+/,\r\n                {\r\n                    cases: {\r\n                        '@eos': { token: 'attribute.value', next: '@popall' },\r\n                        '@default': 'attribute.value'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /\\\\./,\r\n                {\r\n                    cases: {\r\n                        '@eos': { token: 'attribute.value', next: '@popall' },\r\n                        '@default': 'attribute.value'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /[\"']/,\r\n                {\r\n                    cases: {\r\n                        '$#==$S2': { token: 'attribute.value', next: '@pop' },\r\n                        '@default': { token: 'attribute.value' }\r\n                    }\r\n                }\r\n            ]\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://d42paas_frontend/./node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.js?")}}]);