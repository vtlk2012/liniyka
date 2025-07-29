import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: ['node_modules/']
    },

    js.configs.recommended,

    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser
            }
        },
        rules: {
            'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
            'array-bracket-spacing': ['error', 'never'],
            'array-bracket-newline': [
                2,
                {
                    multiline: true,
                    minItems: 3
                }
            ],
            'array-callback-return': [
                'error', {
                    allowImplicit: false,
                    checkForEach: false
                }
            ],
            'arrow-parens': [2, 'always'],
            'arrow-spacing': ['error', { before: true, after: true }],
            'block-spacing': ['error', 'always'],
            'brace-style': [
                'error', 'stroustrup', { allowSingleLine: true }
            ],
            'camelcase': [
                'error', {
                    allow: ['^UNSAFE_'],
                    properties: 'never',
                    ignoreGlobals: true
                }
            ],
            'comma-dangle': ['error', 'never'],
            'comma-spacing': ['error', { before: false, after: true }],
            'comma-style': ['error', 'last'],
            'computed-property-spacing': [
                'error', 'never', { enforceForClassMembers: true }
            ],
            'curly': ['error', 'all'],
            'default-case-last': 'error',
            'dot-location': ['error', 'property'],
            'dot-notation': ['error', { allowKeywords: true }],
            'eol-last': 'error',
            'eqeqeq': [
                'error', 'always', { null: 'ignore' }
            ],
            'func-call-spacing': ['error', 'never'],
            'function-paren-newline': [2, 'multiline'],
            'func-style': [
                2,
                'declaration',
                {
                    allowArrowFunctions: true
                }
            ],
            'generator-star-spacing': ['error', { before: true, after: true }],
            'guard-for-in': 'off',
            'indent': [
                'error', 4, {
                    SwitchCase: 1,
                    VariableDeclarator: 1,
                    outerIIFEBody: 1,
                    MemberExpression: 1,
                    FunctionDeclaration: { parameters: 1, body: 1 },
                    FunctionExpression: { parameters: 1, body: 1 },
                    CallExpression: { arguments: 1 },
                    ArrayExpression: 1,
                    ObjectExpression: 1,
                    ImportDeclaration: 1,
                    flatTernaryExpressions: false,
                    ignoreComments: false,
                    ignoredNodes: [
                        'TemplateLiteral *',
                        'JSXElement',
                        'JSXElement > *',
                        'JSXAttribute',
                        'JSXIdentifier',
                        'JSXNamespacedName',
                        'JSXMemberExpression',
                        'JSXSpreadAttribute',
                        'JSXExpressionContainer',
                        'JSXOpeningElement',
                        'JSXClosingElement',
                        'JSXFragment',
                        'JSXOpeningFragment',
                        'JSXClosingFragment',
                        'JSXText',
                        'JSXEmptyExpression',
                        'JSXSpreadChild'
                    ],
                    offsetTernaryExpressions: true
                }
            ],
            'key-spacing': ['error', { beforeColon: false, afterColon: true }],
            'keyword-spacing': ['error', { before: true, after: true }],
            'lines-around-comment': [
                2,
                {
                    beforeBlockComment: true,
                    afterBlockComment: false,
                    beforeLineComment: false,
                    afterLineComment: false
                }
            ],
            'lines-between-class-members': [
                'error', 'always', { exceptAfterSingleLine: true }
            ],
            'max-depth': ['error', 5],
            'max-len': [
                1,
                {
                    code: 130
                }
            ],
            'max-params': ['error', 5],
            'multiline-ternary': ['error', 'always-multiline'],
            'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
            'new-parens': 'error',
            'no-array-constructor': 'error',
            'no-caller': 'error',
            'no-console': [
                1, {
                    allow: [
                        'info',
                        'warn',
                        'error'
                    ]
                }
            ],
            'no-constant-condition': ['error', { checkLoops: false }],
            'no-debugger': 'off',
            'no-empty': ['error', { allowEmptyCatch: true }],
            'no-eval': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-parens': ['error', 'functions'],
            'no-floating-decimal': 'error',
            'no-implied-eval': 'error',
            'no-iterator': 'error',
            'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
            'no-lone-blocks': 'error',
            'no-mixed-operators': [
                'error', {
                    groups: [
                        [
                            '==', '!=', '===', '!==', '>', '>=', '<', '<='
                        ],
                        ['in', 'instanceof']
                    ],
                    allowSamePrecedence: true
                }
            ],
            'no-mixed-spaces-and-tabs': 'error',
            'no-multi-spaces': 'error',
            'no-multi-str': 'error',
            'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
            'no-new': 'off',
            'no-new-func': 'error',
            'no-new-object': 'error',
            'no-new-symbol': 'error',
            'no-new-wrappers': 'error',
            'no-octal-escape': 'error',
            'no-proto': 'error',
            'no-redeclare': ['error', { builtinGlobals: false }],
            'no-return-assign': ['error', 'except-parens'],
            'no-self-assign': ['error', { props: true }],
            'no-self-compare': 'error',
            'no-sequences': 'error',
            'no-tabs': 'error',
            'no-template-curly-in-string': 'error',
            'no-throw-literal': 'error',
            'no-trailing-spaces': 'error',
            'no-undef-init': 'error',
            'no-underscore-dangle': [
                1,
                {
                    allowAfterThis: true,
                    allowAfterSuper: true
                }
            ],
            'no-unmodified-loop-condition': 'error',
            'no-unneeded-ternary': ['error', { defaultAssignment: false }],
            'no-unreachable-loop': 'error',
            'no-unused-expressions': [
                'error', {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true
                }
            ],
            'no-unused-vars': [
                'error', {
                    args: 'none',
                    caughtErrors: 'none',
                    ignoreRestSiblings: true,
                    vars: 'all'
                }
            ],
            'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
            'no-useless-call': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-constructor': 'off',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'warn',
            'no-void': 'error',
            'no-whitespace-before-property': 'error',
            'object-curly-newline': ['error', { consistent: true }],
            'object-curly-spacing': ['error', 'always'],
            'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
            'object-shorthand': ['warn', 'properties'],
            'one-var': ['error', { initialized: 'never' }],
            'operator-assignment': [1, 'always'],
            'operator-linebreak': [
                'error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }
            ],
            'padded-blocks': 'off',
            'prefer-const': [
                'error', {
                    destructuring: 'any',
                    ignoreReadBeforeAssign: false
                }
            ],
            'prefer-promise-reject-errors': [
                'error', {
                    allowEmptyReject: true
                }
            ],
            'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
            'promise/always-return': 'off',
            'promise/no-nesting': 'off',
            'quote-props': ['error', 'consistent-as-needed'],
            'quotes': [
                'error', 'single', { avoidEscape: true, allowTemplateLiterals: false }
            ],
            'rest-spread-spacing': ['error', 'never'],
            'semi': ['error', 'always'],
            'semi-spacing': ['error', { before: false, after: true }],
            'security/detect-object-injection': 'off',
            'security/detect-non-literal-regexp': 'off',
            'space-before-blocks': ['error', 'always'],
            'space-before-function-paren': ['error', 'never'],
            'space-in-parens': ['error', 'never'],
            'space-infix-ops': 'error',
            'space-unary-ops': ['error', { words: true, nonwords: false }],
            'spaced-comment': [
                'error', 'always', {
                    line: { markers: [
                        '*package', '!', '/', ',', '='
                    ] },
                    block: { balanced: true,
                        markers: [
                            '*package', '!', ',', ':', '::', 'flow-include'
                        ],
                        exceptions: ['*'] }
                }
            ],
            'symbol-description': 'error',
            'template-curly-spacing': ['error', 'never'],
            'template-tag-spacing': ['error', 'never'],
            'unicode-bom': ['error', 'never'],
            'use-isnan': [
                'error', {
                    enforceForSwitchCase: true,
                    enforceForIndexOf: true
                }
            ],
            'valid-typeof': ['error', { requireStringLiterals: true }],
            'vue/require-explicit-emits': 'off',
            'vue/no-v-html': 'off',
            'vue/require-v-for-key': 'off',
            'vue/valid-v-for': 'off',
            'wrap-iife': [
                'error', 'any', { functionPrototypeMethods: true }
            ],
            'yield-star-spacing': ['error', 'both'],
            'yoda': ['error', 'never']
        }
    }
    // {
    //   files: ["**/*.{js,mjs,cjs}"],
    //   plugins: { js },
    //    extends: ["js/recommended"],
    //    languageOptions:
    //    { globals: {...globals.browser, ...globals.node} }
    //   },
    // {
    //   files: ["**/*.js"],
    //    languageOptions: { sourceType: "commonjs" }
    // },
]);
