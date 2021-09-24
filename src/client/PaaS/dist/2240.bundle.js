"use strict";(self.webpackChunkd42paas_frontend=self.webpackChunkd42paas_frontend||[]).push([[2240],{92240:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '#'\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: \"'\", close: \"'\" },\r\n        { open: '\"', close: '\"' }\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\r\n        { open: '\"', close: '\"', notIn: ['comment'] },\r\n        { open: '\"\"\"', close: '\"\"\"' },\r\n        { open: '`', close: '`', notIn: ['string', 'comment'] },\r\n        { open: '(', close: ')' },\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '<<', close: '>>' }\r\n    ],\r\n    indentationRules: {\r\n        increaseIndentPattern: /^\\s*(after|else|catch|rescue|fn|[^#]*(do|<\\-|\\->|\\{|\\[|\\=))\\s*$/,\r\n        decreaseIndentPattern: /^\\s*((\\}|\\])\\s*$|(after|else|catch|rescue|end)\\b)/\r\n    }\r\n};\r\n/**\r\n * A Monarch lexer for the Elixir language.\r\n *\r\n * References:\r\n *\r\n * * Monarch documentation - https://microsoft.github.io/monaco-editor/monarch.html\r\n * * Elixir lexer - https://github.com/elixir-makeup/makeup_elixir/blob/master/lib/makeup/lexers/elixir_lexer.ex\r\n * * TextMate lexer (elixir-tmbundle) - https://github.com/elixir-editors/elixir-tmbundle/blob/master/Syntaxes/Elixir.tmLanguage\r\n * * TextMate lexer (vscode-elixir-ls) - https://github.com/elixir-lsp/vscode-elixir-ls/blob/master/syntaxes/elixir.json\r\n */\r\nvar language = {\r\n    defaultToken: 'source',\r\n    tokenPostfix: '.elixir',\r\n    brackets: [\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\r\n        { open: '{', close: '}', token: 'delimiter.curly' },\r\n        { open: '<<', close: '>>', token: 'delimiter.angle.special' }\r\n    ],\r\n    // Below are lists/regexps to which we reference later.\r\n    declarationKeywords: [\r\n        'def',\r\n        'defp',\r\n        'defn',\r\n        'defnp',\r\n        'defguard',\r\n        'defguardp',\r\n        'defmacro',\r\n        'defmacrop',\r\n        'defdelegate',\r\n        'defcallback',\r\n        'defmacrocallback',\r\n        'defmodule',\r\n        'defprotocol',\r\n        'defexception',\r\n        'defimpl',\r\n        'defstruct'\r\n    ],\r\n    operatorKeywords: ['and', 'in', 'not', 'or', 'when'],\r\n    namespaceKeywords: ['alias', 'import', 'require', 'use'],\r\n    otherKeywords: [\r\n        'after',\r\n        'case',\r\n        'catch',\r\n        'cond',\r\n        'do',\r\n        'else',\r\n        'end',\r\n        'fn',\r\n        'for',\r\n        'if',\r\n        'quote',\r\n        'raise',\r\n        'receive',\r\n        'rescue',\r\n        'super',\r\n        'throw',\r\n        'try',\r\n        'unless',\r\n        'unquote_splicing',\r\n        'unquote',\r\n        'with'\r\n    ],\r\n    constants: ['true', 'false', 'nil'],\r\n    nameBuiltin: ['__MODULE__', '__DIR__', '__ENV__', '__CALLER__', '__STACKTRACE__'],\r\n    // Matches any of the operator names:\r\n    // <<< >>> ||| &&& ^^^ ~~~ === !== ~>> <~> |~> <|> == != <= >= && || \\\\ <> ++ -- |> =~ -> <- ~> <~ :: .. = < > + - * / | . ^ & !\r\n    operator: /-[->]?|!={0,2}|\\*|\\/|\\\\\\\\|&{1,3}|\\.\\.?|\\^(?:\\^\\^)?|\\+\\+?|<(?:-|<<|=|>|\\|>|~>?)?|=~|={1,3}|>(?:=|>>)?|\\|~>|\\|>|\\|{1,3}|~>>?|~~~|::/,\r\n    // See https://hexdocs.pm/elixir/syntax-reference.html#variables\r\n    variableName: /[a-z_][a-zA-Z0-9_]*[?!]?/,\r\n    // See https://hexdocs.pm/elixir/syntax-reference.html#atoms\r\n    atomName: /[a-zA-Z_][a-zA-Z0-9_@]*[?!]?|@specialAtomName|@operator/,\r\n    specialAtomName: /\\.\\.\\.|<<>>|%\\{\\}|%|\\{\\}/,\r\n    aliasPart: /[A-Z][a-zA-Z0-9_]*/,\r\n    moduleName: /@aliasPart(?:\\.@aliasPart)*/,\r\n    // Sigil pairs are: \"\"\" \"\"\", ''' ''', \" \", ' ', / /, | |, < >, { }, [ ], ( )\r\n    sigilSymmetricDelimiter: /\"\"\"|'''|\"|'|\\/|\\|/,\r\n    sigilStartDelimiter: /@sigilSymmetricDelimiter|<|\\{|\\[|\\(/,\r\n    sigilEndDelimiter: /@sigilSymmetricDelimiter|>|\\}|\\]|\\)/,\r\n    decimal: /\\d(?:_?\\d)*/,\r\n    hex: /[0-9a-fA-F](_?[0-9a-fA-F])*/,\r\n    octal: /[0-7](_?[0-7])*/,\r\n    binary: /[01](_?[01])*/,\r\n    // See https://hexdocs.pm/elixir/master/String.html#module-escape-characters\r\n    escape: /\\\\u[0-9a-fA-F]{4}|\\\\x[0-9a-fA-F]{2}|\\\\./,\r\n    // The keys below correspond to tokenizer states.\r\n    // We start from the root state and match against its rules\r\n    // until we explicitly transition into another state.\r\n    // The `include` simply brings in all operations from the given state\r\n    // and is useful for improving readability.\r\n    tokenizer: {\r\n        root: [\r\n            { include: '@whitespace' },\r\n            { include: '@comments' },\r\n            // Keywords start as either an identifier or a string,\r\n            // but end with a : so it's important to match this first.\r\n            { include: '@keywordsShorthand' },\r\n            { include: '@numbers' },\r\n            { include: '@identifiers' },\r\n            { include: '@strings' },\r\n            { include: '@atoms' },\r\n            { include: '@sigils' },\r\n            { include: '@attributes' },\r\n            { include: '@symbols' }\r\n        ],\r\n        // Whitespace\r\n        whitespace: [[/\\s+/, 'white']],\r\n        // Comments\r\n        comments: [[/(#)(.*)/, ['comment.punctuation', 'comment']]],\r\n        // Keyword list shorthand\r\n        keywordsShorthand: [\r\n            [/(@atomName)(:)/, ['constant', 'constant.punctuation']],\r\n            // Use positive look-ahead to ensure the string is followed by :\r\n            // and should be considered a keyword.\r\n            [\r\n                /\"(?=([^\"]|#\\{.*?\\}|\\\\\")*\":)/,\r\n                { token: 'constant.delimiter', next: '@doubleQuotedStringKeyword' }\r\n            ],\r\n            [\r\n                /'(?=([^']|#\\{.*?\\}|\\\\')*':)/,\r\n                { token: 'constant.delimiter', next: '@singleQuotedStringKeyword' }\r\n            ]\r\n        ],\r\n        doubleQuotedStringKeyword: [\r\n            [/\":/, { token: 'constant.delimiter', next: '@pop' }],\r\n            { include: '@stringConstantContentInterpol' }\r\n        ],\r\n        singleQuotedStringKeyword: [\r\n            [/':/, { token: 'constant.delimiter', next: '@pop' }],\r\n            { include: '@stringConstantContentInterpol' }\r\n        ],\r\n        // Numbers\r\n        numbers: [\r\n            [/0b@binary/, 'number.binary'],\r\n            [/0o@octal/, 'number.octal'],\r\n            [/0x@hex/, 'number.hex'],\r\n            [/@decimal\\.@decimal([eE]-?@decimal)?/, 'number.float'],\r\n            [/@decimal/, 'number']\r\n        ],\r\n        // Identifiers\r\n        identifiers: [\r\n            // Tokenize identifier name in function-like definitions.\r\n            // Note: given `def a + b, do: nil`, `a` is not a function name,\r\n            // so we use negative look-ahead to ensure there's no operator.\r\n            [\r\n                /\\b(defp?|defnp?|defmacrop?|defguardp?|defdelegate)(\\s+)(@variableName)(?!\\s+@operator)/,\r\n                [\r\n                    'keyword.declaration',\r\n                    'white',\r\n                    {\r\n                        cases: {\r\n                            unquote: 'keyword',\r\n                            '@default': 'function'\r\n                        }\r\n                    }\r\n                ]\r\n            ],\r\n            // Tokenize function calls\r\n            [\r\n                // In-scope call - an identifier followed by ( or .(\r\n                /(@variableName)(?=\\s*\\.?\\s*\\()/,\r\n                {\r\n                    cases: {\r\n                        // Tokenize as keyword in cases like `if(..., do: ..., else: ...)`\r\n                        '@declarationKeywords': 'keyword.declaration',\r\n                        '@namespaceKeywords': 'keyword',\r\n                        '@otherKeywords': 'keyword',\r\n                        '@default': 'function.call'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                // Referencing function in a module\r\n                /(@moduleName)(\\s*)(\\.)(\\s*)(@variableName)/,\r\n                ['type.identifier', 'white', 'operator', 'white', 'function.call']\r\n            ],\r\n            [\r\n                // Referencing function in an Erlang module\r\n                /(:)(@atomName)(\\s*)(\\.)(\\s*)(@variableName)/,\r\n                ['constant.punctuation', 'constant', 'white', 'operator', 'white', 'function.call']\r\n            ],\r\n            [\r\n                // Piping into a function (tokenized separately as it may not have parentheses)\r\n                /(\\|>)(\\s*)(@variableName)/,\r\n                [\r\n                    'operator',\r\n                    'white',\r\n                    {\r\n                        cases: {\r\n                            '@otherKeywords': 'keyword',\r\n                            '@default': 'function.call'\r\n                        }\r\n                    }\r\n                ]\r\n            ],\r\n            [\r\n                // Function reference passed to another function\r\n                /(&)(\\s*)(@variableName)/,\r\n                ['operator', 'white', 'function.call']\r\n            ],\r\n            // Language keywords, builtins, constants and variables\r\n            [\r\n                /@variableName/,\r\n                {\r\n                    cases: {\r\n                        '@declarationKeywords': 'keyword.declaration',\r\n                        '@operatorKeywords': 'keyword.operator',\r\n                        '@namespaceKeywords': 'keyword',\r\n                        '@otherKeywords': 'keyword',\r\n                        '@constants': 'constant.language',\r\n                        '@nameBuiltin': 'variable.language',\r\n                        '_.*': 'comment.unused',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // Module names\r\n            [/@moduleName/, 'type.identifier']\r\n        ],\r\n        // Strings\r\n        strings: [\r\n            [/\"\"\"/, { token: 'string.delimiter', next: '@doubleQuotedHeredoc' }],\r\n            [/'''/, { token: 'string.delimiter', next: '@singleQuotedHeredoc' }],\r\n            [/\"/, { token: 'string.delimiter', next: '@doubleQuotedString' }],\r\n            [/'/, { token: 'string.delimiter', next: '@singleQuotedString' }]\r\n        ],\r\n        doubleQuotedHeredoc: [\r\n            [/\"\"\"/, { token: 'string.delimiter', next: '@pop' }],\r\n            { include: '@stringContentInterpol' }\r\n        ],\r\n        singleQuotedHeredoc: [\r\n            [/'''/, { token: 'string.delimiter', next: '@pop' }],\r\n            { include: '@stringContentInterpol' }\r\n        ],\r\n        doubleQuotedString: [\r\n            [/\"/, { token: 'string.delimiter', next: '@pop' }],\r\n            { include: '@stringContentInterpol' }\r\n        ],\r\n        singleQuotedString: [\r\n            [/'/, { token: 'string.delimiter', next: '@pop' }],\r\n            { include: '@stringContentInterpol' }\r\n        ],\r\n        // Atoms\r\n        atoms: [\r\n            [/(:)(@atomName)/, ['constant.punctuation', 'constant']],\r\n            [/:\"/, { token: 'constant.delimiter', next: '@doubleQuotedStringAtom' }],\r\n            [/:'/, { token: 'constant.delimiter', next: '@singleQuotedStringAtom' }]\r\n        ],\r\n        doubleQuotedStringAtom: [\r\n            [/\"/, { token: 'constant.delimiter', next: '@pop' }],\r\n            { include: '@stringConstantContentInterpol' }\r\n        ],\r\n        singleQuotedStringAtom: [\r\n            [/'/, { token: 'constant.delimiter', next: '@pop' }],\r\n            { include: '@stringConstantContentInterpol' }\r\n        ],\r\n        // Sigils\r\n        // See https://elixir-lang.org/getting-started/sigils.html\r\n        // Sigils allow for typing values using their textual representation.\r\n        // All sigils start with ~ followed by a letter indicating sigil type\r\n        // and then a delimiter pair enclosing the textual representation.\r\n        // Optional modifiers are allowed after the closing delimiter.\r\n        // For instance a regular expressions can be written as:\r\n        // ~r/foo|bar/ ~r{foo|bar} ~r/foo|bar/g\r\n        //\r\n        // In general lowercase sigils allow for interpolation\r\n        // and escaped characters, whereas uppercase sigils don't\r\n        //\r\n        // During tokenization we want to distinguish some\r\n        // specific sigil types, namely string and regexp,\r\n        // so that they cen be themed separately.\r\n        //\r\n        // To reasonably handle all those combinations we leverage\r\n        // dot-separated states, so if we transition to @sigilStart.interpol.s.{.}\r\n        // then \"sigilStart.interpol.s\" state will match and also all\r\n        // the individual dot-separated parameters can be accessed.\r\n        sigils: [\r\n            [/~[a-z]@sigilStartDelimiter/, { token: '@rematch', next: '@sigil.interpol' }],\r\n            [/~[A-Z]@sigilStartDelimiter/, { token: '@rematch', next: '@sigil.noInterpol' }]\r\n        ],\r\n        sigil: [\r\n            [/~([a-zA-Z])\\{/, { token: '@rematch', switchTo: '@sigilStart.$S2.$1.{.}' }],\r\n            [/~([a-zA-Z])\\[/, { token: '@rematch', switchTo: '@sigilStart.$S2.$1.[.]' }],\r\n            [/~([a-zA-Z])\\(/, { token: '@rematch', switchTo: '@sigilStart.$S2.$1.(.)' }],\r\n            [/~([a-zA-Z])\\</, { token: '@rematch', switchTo: '@sigilStart.$S2.$1.<.>' }],\r\n            [\r\n                /~([a-zA-Z])(@sigilSymmetricDelimiter)/,\r\n                { token: '@rematch', switchTo: '@sigilStart.$S2.$1.$2.$2' }\r\n            ]\r\n        ],\r\n        // The definitions below expect states to be of the form:\r\n        //\r\n        // sigilStart.<interpol-or-noInterpol>.<sigil-letter>.<start-delimiter>.<end-delimiter>\r\n        // sigilContinue.<interpol-or-noInterpol>.<sigil-letter>.<start-delimiter>.<end-delimiter>\r\n        //\r\n        // The sigilStart state is used only to properly classify the token (as string/regex/sigil)\r\n        // and immediately switches to the sigilContinue sate, which handles the actual content\r\n        // and waits for the corresponding end delimiter.\r\n        'sigilStart.interpol.s': [\r\n            [\r\n                /~s@sigilStartDelimiter/,\r\n                {\r\n                    token: 'string.delimiter',\r\n                    switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'\r\n                }\r\n            ]\r\n        ],\r\n        'sigilContinue.interpol.s': [\r\n            [\r\n                /(@sigilEndDelimiter)[a-zA-Z]*/,\r\n                {\r\n                    cases: {\r\n                        '$1==$S5': { token: 'string.delimiter', next: '@pop' },\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ],\r\n            { include: '@stringContentInterpol' }\r\n        ],\r\n        'sigilStart.noInterpol.S': [\r\n            [\r\n                /~S@sigilStartDelimiter/,\r\n                {\r\n                    token: 'string.delimiter',\r\n                    switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'\r\n                }\r\n            ]\r\n        ],\r\n        'sigilContinue.noInterpol.S': [\r\n            // Ignore escaped sigil end\r\n            [/(^|[^\\\\])\\\\@sigilEndDelimiter/, 'string'],\r\n            [\r\n                /(@sigilEndDelimiter)[a-zA-Z]*/,\r\n                {\r\n                    cases: {\r\n                        '$1==$S5': { token: 'string.delimiter', next: '@pop' },\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ],\r\n            { include: '@stringContent' }\r\n        ],\r\n        'sigilStart.interpol.r': [\r\n            [\r\n                /~r@sigilStartDelimiter/,\r\n                {\r\n                    token: 'regexp.delimiter',\r\n                    switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'\r\n                }\r\n            ]\r\n        ],\r\n        'sigilContinue.interpol.r': [\r\n            [\r\n                /(@sigilEndDelimiter)[a-zA-Z]*/,\r\n                {\r\n                    cases: {\r\n                        '$1==$S5': { token: 'regexp.delimiter', next: '@pop' },\r\n                        '@default': 'regexp'\r\n                    }\r\n                }\r\n            ],\r\n            { include: '@regexpContentInterpol' }\r\n        ],\r\n        'sigilStart.noInterpol.R': [\r\n            [\r\n                /~R@sigilStartDelimiter/,\r\n                {\r\n                    token: 'regexp.delimiter',\r\n                    switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'\r\n                }\r\n            ]\r\n        ],\r\n        'sigilContinue.noInterpol.R': [\r\n            // Ignore escaped sigil end\r\n            [/(^|[^\\\\])\\\\@sigilEndDelimiter/, 'regexp'],\r\n            [\r\n                /(@sigilEndDelimiter)[a-zA-Z]*/,\r\n                {\r\n                    cases: {\r\n                        '$1==$S5': { token: 'regexp.delimiter', next: '@pop' },\r\n                        '@default': 'regexp'\r\n                    }\r\n                }\r\n            ],\r\n            { include: '@regexpContent' }\r\n        ],\r\n        // Fallback to the generic sigil by default\r\n        'sigilStart.interpol': [\r\n            [\r\n                /~([a-zA-Z])@sigilStartDelimiter/,\r\n                {\r\n                    token: 'sigil.delimiter',\r\n                    switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'\r\n                }\r\n            ]\r\n        ],\r\n        'sigilContinue.interpol': [\r\n            [\r\n                /(@sigilEndDelimiter)[a-zA-Z]*/,\r\n                {\r\n                    cases: {\r\n                        '$1==$S5': { token: 'sigil.delimiter', next: '@pop' },\r\n                        '@default': 'sigil'\r\n                    }\r\n                }\r\n            ],\r\n            { include: '@sigilContentInterpol' }\r\n        ],\r\n        'sigilStart.noInterpol': [\r\n            [\r\n                /~([a-zA-Z])@sigilStartDelimiter/,\r\n                {\r\n                    token: 'sigil.delimiter',\r\n                    switchTo: '@sigilContinue.$S2.$S3.$S4.$S5'\r\n                }\r\n            ]\r\n        ],\r\n        'sigilContinue.noInterpol': [\r\n            // Ignore escaped sigil end\r\n            [/(^|[^\\\\])\\\\@sigilEndDelimiter/, 'sigil'],\r\n            [\r\n                /(@sigilEndDelimiter)[a-zA-Z]*/,\r\n                {\r\n                    cases: {\r\n                        '$1==$S5': { token: 'sigil.delimiter', next: '@pop' },\r\n                        '@default': 'sigil'\r\n                    }\r\n                }\r\n            ],\r\n            { include: '@sigilContent' }\r\n        ],\r\n        // Attributes\r\n        attributes: [\r\n            // Module @doc* attributes - tokenized as comments\r\n            [\r\n                /\\@(module|type)?doc (~[sS])?\"\"\"/,\r\n                {\r\n                    token: 'comment.block.documentation',\r\n                    next: '@doubleQuotedHeredocDocstring'\r\n                }\r\n            ],\r\n            [\r\n                /\\@(module|type)?doc (~[sS])?\"/,\r\n                {\r\n                    token: 'comment.block.documentation',\r\n                    next: '@doubleQuotedStringDocstring'\r\n                }\r\n            ],\r\n            [/\\@(module|type)?doc false/, 'comment.block.documentation'],\r\n            // Module attributes\r\n            [/\\@(@variableName)/, 'variable']\r\n        ],\r\n        doubleQuotedHeredocDocstring: [\r\n            [/\"\"\"/, { token: 'comment.block.documentation', next: '@pop' }],\r\n            { include: '@docstringContent' }\r\n        ],\r\n        doubleQuotedStringDocstring: [\r\n            [/\"/, { token: 'comment.block.documentation', next: '@pop' }],\r\n            { include: '@docstringContent' }\r\n        ],\r\n        // Operators, punctuation, brackets\r\n        symbols: [\r\n            // Code point operator (either with regular character ?a or an escaped one ?\\n)\r\n            [/\\?(\\\\.|[^\\\\\\s])/, 'number.constant'],\r\n            // Anonymous function arguments\r\n            [/&\\d+/, 'operator'],\r\n            // Bitshift operators (must go before delimiters, so that << >> don't match first)\r\n            [/<<<|>>>/, 'operator'],\r\n            // Delimiter pairs\r\n            [/[()\\[\\]\\{\\}]|<<|>>/, '@brackets'],\r\n            // Triple dot is a valid name (must go before operators, so that .. doesn't match instead)\r\n            [/\\.\\.\\./, 'identifier'],\r\n            // Punctuation => (must go before operators, so it's not tokenized as = then >)\r\n            [/=>/, 'punctuation'],\r\n            // Operators\r\n            [/@operator/, 'operator'],\r\n            // Punctuation\r\n            [/[:;,.%]/, 'punctuation']\r\n        ],\r\n        // Generic helpers\r\n        stringContentInterpol: [\r\n            { include: '@interpolation' },\r\n            { include: '@escapeChar' },\r\n            { include: '@stringContent' }\r\n        ],\r\n        stringContent: [[/./, 'string']],\r\n        stringConstantContentInterpol: [\r\n            { include: '@interpolation' },\r\n            { include: '@escapeChar' },\r\n            { include: '@stringConstantContent' }\r\n        ],\r\n        stringConstantContent: [[/./, 'constant']],\r\n        regexpContentInterpol: [\r\n            { include: '@interpolation' },\r\n            { include: '@escapeChar' },\r\n            { include: '@regexpContent' }\r\n        ],\r\n        regexpContent: [\r\n            // # may be a regular regexp char, so we use a heuristic\r\n            // assuming a # surrounded by whitespace is actually a comment.\r\n            [/(\\s)(#)(\\s.*)$/, ['white', 'comment.punctuation', 'comment']],\r\n            [/./, 'regexp']\r\n        ],\r\n        sigilContentInterpol: [\r\n            { include: '@interpolation' },\r\n            { include: '@escapeChar' },\r\n            { include: '@sigilContent' }\r\n        ],\r\n        sigilContent: [[/./, 'sigil']],\r\n        docstringContent: [[/./, 'comment.block.documentation']],\r\n        escapeChar: [[/@escape/, 'constant.character.escape']],\r\n        interpolation: [\r\n            [/#{/, { token: 'delimiter.bracket.embed', next: '@interpolationContinue' }]\r\n        ],\r\n        interpolationContinue: [\r\n            [/}/, { token: 'delimiter.bracket.embed', next: '@pop' }],\r\n            // Interpolation brackets may contain arbitrary code,\r\n            // so we simply match against all the root rules,\r\n            // until we reach interpolation end (the above matches).\r\n            { include: '@root' }\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://d42paas_frontend/./node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.js?")}}]);