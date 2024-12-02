// @ts-check
import angularEslintPlugin from '@angular-eslint/eslint-plugin'
import stylisticPlugin from '@stylistic/eslint-plugin'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import angular from 'angular-eslint'
// @ts-ignore
import importPlugin from 'eslint-plugin-import'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import preferArrowPlugin from 'eslint-plugin-prefer-arrow-functions'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import { config, parser } from 'typescript-eslint'

export default config(
    {
        ignores: ['**/node_modules', '**/dist', '**/docs', '**/.angular', '**/.yarn', 'packages/**/*']
    },
    {
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            '@angular-eslint': angularEslintPlugin,
            '@import': importPlugin,
            '@jsdoc': jsdocPlugin,
            '@prefer-arrow-functions': preferArrowPlugin,
            '@unused-imports': unusedImportsPlugin,
            '@stylistic': stylisticPlugin
        }
    },
    {
        files: ['**/*.ts', '**/*.js', '**/*.cjs'],
        languageOptions: {
            parser,
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.js', '*.cjs', 'packages/*/*.js', 'packages/*/*.cjs'],
                    maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 100
                },
                tsconfigRootDir: import.meta.dirname
            }
        }
    },
    {
        files: ['**/*.ts', '**/*.js', '**/*.cjs'],
        processor: angular.processInlineTemplates,
        rules: {
            '@typescript-eslint/interface-name-prefix': 'off',
            'sort-keys': 'off',
            '@angular-eslint/component-class-suffix': 'error',
            '@angular-eslint/component-selector': ['error', {
                type: 'element',
                prefix: 'app',
                style: 'kebab-case'
            }],
            '@angular-eslint/contextual-lifecycle': 'error',
            '@angular-eslint/directive-class-suffix': 'error',
            '@angular-eslint/directive-selector': ['error', {
                type: 'attribute',
                prefix: 'app',
                style: 'camelCase'
            }],
            '@angular-eslint/no-conflicting-lifecycle': 'error',
            '@angular-eslint/no-input-rename': 'error',
            '@angular-eslint/no-inputs-metadata-property': 'error',
            '@angular-eslint/no-output-on-prefix': 'error',
            '@angular-eslint/no-output-rename': 'error',
            '@angular-eslint/no-outputs-metadata-property': 'error',
            '@angular-eslint/use-lifecycle-interface': 'error',
            '@angular-eslint/use-pipe-transform-interface': 'error',
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            '@typescript-eslint/no-restricted-types': ['error', {
                types: {
                    Object: {
                        message: 'Avoid using the `Object` type. Did you mean `object`?'
                    },
                    Function: {
                        message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
                    },
                    Boolean: {
                        message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
                    },
                    Number: {
                        message: 'Avoid using the `Number` type. Did you mean `number`?'
                    },
                    String: {
                        message: 'Avoid using the `String` type. Did you mean `string`?'
                    },
                    Symbol: {
                        message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
                    }
                }
            }],
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-parameter-properties': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/prefer-namespace-keyword': 'error',
            '@typescript-eslint/triple-slash-reference': ['error', {
                path: 'always',
                types: 'prefer-import',
                lib: 'always'
            }],
            '@typescript-eslint/unified-signatures': 'error',
            'complexity': 'off',
            'constructor-super': 'error',
            'guard-for-in': 'error',
            '@import/no-deprecated': 'warn',
            '@jsdoc/tag-lines': ['error', 'never', {
                startLines: 1
            }],
            '@jsdoc/no-types': 'error',
            'max-classes-per-file': 'off',
            'no-caller': 'error',
            'no-cond-assign': 'error',
            'no-debugger': 'error',
            'no-empty': 'off',
            'no-eval': 'error',
            'no-invalid-this': 'off',
            'no-new-wrappers': 'error',
            'no-restricted-imports': ['error', {
                name: 'rxjs/Rx',
                message: "Please import directly from 'rxjs' instead"
            }],
            '@typescript-eslint/no-shadow': ['error', {
                hoist: 'all'
            }],
            'no-throw-literal': 'error',
            'no-undef-init': 'error',
            'no-unsafe-finally': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            'prefer-const': 'error',
            'radix': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'off',
            'arrow-body-style': 'error',
            'arrow-parens': 'off',
            'eol-last': 'error',
            '@jsdoc/check-alignment': 'error',
            'new-parens': 'error',
            'no-trailing-spaces': 'error',
            'quotes': 'off',
            '@stylistic/type-annotation-spacing': 'error',
            '@typescript-eslint/no-deprecated': 'error',
            '@typescript-eslint/member-ordering': ['error', {
                default: ['public-static-field', 'static-field', 'instance-field']
            }],
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-var-requires': 'error',
            '@import/no-extraneous-dependencies': ['error', {
                devDependencies: false
            }],
            '@import/no-internal-modules': 'off',
            'linebreak-style': 'off',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-extra-bind': 'error',
            'no-fallthrough': 'off',
            'no-new-func': 'error',
            'no-return-await': 'error',
            'no-sequences': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'prefer-object-spread': 'error',
            'space-in-parens': ['error', 'never'],
            '@typescript-eslint/consistent-type-assertions': 'off',
            'no-redeclare': 'off',
            '@typescript-eslint/no-redeclare': 'error',
            '@typescript-eslint/naming-convention': ['off'],
            '@stylistic/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'none',
                    requireLast: false
                },

                singleline: {
                    delimiter: 'comma',
                    requireLast: false
                }
            }],
            'space-before-function-paren': ['error', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }],
            '@prefer-arrow-functions/prefer-arrow-functions': ['error', {
                allowNamedFunctions: true,
                classPropertiesAllowed: false,
                disallowPrototype: true,
                singleReturnOnly: false
            }],
            '@typescript-eslint/array-type': ['error', {
                default: 'array-simple',
                readonly: 'generic'
            }],
            '@typescript-eslint/consistent-type-definitions': 'error',
            '@typescript-eslint/dot-notation': 'off',
            '@typescript-eslint/explicit-member-accessibility': ['off', {
                accessibility: 'explicit'
            }],
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@stylistic/quotes': ['error', 'single', {
                avoidEscape: true
            }],
            '@stylistic/semi': ['error', 'never'],
            'brace-style': ['error', '1tbs'],
            'comma-dangle': 'error',
            'curly': 'off',
            'eqeqeq': ['off', 'always'],
            'id-blacklist': 'off',
            'id-match': 'off',
            '@import/order': 'error',
            'max-len': 'off',
            'no-bitwise': 'off',
            'no-multiple-empty-lines': ['error', {
                max: 1,
                maxBOF: 0
            }],
            'no-underscore-dangle': 'off',
            'quote-props': ['error', 'consistent-as-needed'],
            '@typescript-eslint/no-namespace': 'off',
            'no-console': 'off',
            '@angular-eslint/no-output-native': 'off',
            '@angular-eslint/template/no-negated-async': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            'no-unused-labels': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@unused-imports/no-unused-imports': 'error',
            '@unused-imports/no-unused-vars': ['error', {
                args: 'after-used',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                vars: 'all',
                varsIgnorePattern: '^_'
            }]
        }
    },
    {
        files: ['**/*.spec.ts', '**/test.ts', '**/*.conf.js', '**/*.conf.cjs', '**/*.config.js', '**/*.config.cjs', '**/scripts/**/*.ts'],

        rules: {
            '@import/no-extraneous-dependencies': ['off', {
                devDependencies: false
            }],

            '@typescript-eslint/no-var-requires': 'off'
        }
    },
    {
        files: ['**/*.html'],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility
        ],
        rules: {
            '@angular-eslint/template/eqeqeq': 'off',
            '@angular-eslint/template/no-negated-async': 'off'
        }
    }
)
