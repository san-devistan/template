# Rules ​
The progress of all rule implementations is tracked here .
- Total number of rules: 838
- Rules turned on by default: 113
- Rules with fixes available: 308
- 🛠️: an auto-fix is available for this rule
- 💡: a suggestion is available for this rule
- ⚠️🛠️: a dangerous auto-fix is available for this rule
- ⚠️💡: a dangerous suggestion is available for this rule
- 🚧: an auto-fix or suggestion is possible, but currently not implemented
| Rule name ▲ | Source | Category | Default | Fixable? | Version |
| --- | --- | --- | --- | --- | --- |
| accessor-pairs | eslint | pedantic |  |  | v1.33.0 |
| adjacent-overload-signatures | typescript | style |  |  | v0.0.7 |
| alt-text | jsx-a11y | correctness |  |  | v0.0.16 |
| always-return | promise | suspicious |  |  | v1.13.0 |
| anchor-ambiguous-text | jsx-a11y | restriction |  |  | v0.13.2 |
| anchor-has-content | jsx-a11y | correctness |  | 💡 | v0.0.18 |
| anchor-is-valid | jsx-a11y | correctness |  |  | v0.0.19 |
| approx-constant | oxc | suspicious |  | 💡 | v0.1.1 |
| aria-activedescendant-has-tabindex | jsx-a11y | correctness |  |  | v0.2.1 |
| aria-props | jsx-a11y | correctness |  | 🛠️ | v0.0.22 |
| aria-proptypes | jsx-a11y | correctness |  |  | v1.36.0 |
| aria-role | jsx-a11y | correctness |  |  | v0.1.1 |
| aria-unsupported-elements | jsx-a11y | correctness |  | 🛠️ | v0.1.1 |
| array-callback-return | eslint | pedantic |  | 🚧 | v0.0.3 |
| array-type | typescript | style |  | 🛠️ | v0.2.8 |
| arrow-body-style | eslint | style |  | 🛠️ | v1.4.0 |
| autocomplete-valid | jsx-a11y | correctness |  |  | v0.2.0 |
| avoid-new | promise | style |  |  | v0.6.1 |
| await-thenable 💭 | typescript | correctness | ✅ | 💡 | v1.12.0 |
| bad-array-method-on-arguments | oxc | correctness | ✅ |  | v0.0.3 |
| bad-bitwise-operator | oxc | restriction |  | 💡 | v0.0.3 |
| bad-char-at-comparison | oxc | correctness | ✅ |  | v0.0.22 |
| bad-comparison-sequence | oxc | correctness | ✅ |  | v0.0.3 |
| bad-min-max-func | oxc | correctness | ✅ |  | v0.0.3 |
| bad-object-literal-comparison | oxc | correctness | ✅ |  | v0.1.1 |
| bad-replace-all-arg | oxc | correctness | ✅ |  | v0.0.22 |
| ban-ts-comment | typescript | pedantic |  | 🛠️ | v0.0.8 |
| ban-tslint-comment | typescript | style |  | 🛠️ | v0.2.9 |
| ban-types | typescript | pedantic |  |  | v0.0.14 |
| block-scoped-var | eslint | suspicious |  |  | v0.16.9 |
| branches-sharing-code | oxc | pedantic |  | 💡 | v1.22.0 |
| button-has-type | react | restriction |  |  | v0.1.1 |
| callback-return | node | style |  |  | v1.67.0 |
| capitalized-comments | eslint | style |  | 🛠️ | v1.34.0 |
| catch-error-name | unicorn | style |  | 🛠️ | v0.0.14 |
| catch-or-return | promise | restriction |  |  | v0.9.2 |
| check-access | jsdoc | restriction |  |  | v0.2.16 |
| check-property-names | jsdoc | correctness |  | 🚧 | v0.2.18 |
| check-tag-names | jsdoc | correctness |  | 🚧 | v0.3.2 |
| checked-requires-onchange-or-readonly | react | pedantic |  |  | v0.2.15 |
| class-literal-property-style | typescript | style |  | 🚧 | v1.47.0 |
| class-methods-use-this | eslint | restriction |  |  | v1.16.0 |
| click-events-have-key-events | jsx-a11y | correctness |  |  | v0.2.1 |
| complexity | eslint | restriction |  |  | v1.37.0 |
| component-definition-name-casing | vue | style |  | 🛠️ | v1.68.0 |
| consistent-assert | unicorn | pedantic |  | 🛠️ | v0.16.9 |
| consistent-date-clone | unicorn | style |  | 🛠️ | v0.15.13 |
| consistent-each-for | vitest | style |  |  | v1.39.0 |
| consistent-empty-array-spread | unicorn | pedantic |  | 💡 | v0.10.1 |
| consistent-existence-index-check | unicorn | style |  | 🛠️ | v0.12.0 |
| consistent-function-scoping | unicorn | suspicious |  | 🚧 | v0.8.0 |
| consistent-generic-constructors | typescript | style |  | 🛠️ | v0.14.0 |
| consistent-indexed-object-style | typescript | style |  | 🛠️ | v0.4.2 |
| consistent-return 💭 | typescript | suspicious |  |  | v0.0.8 |
| consistent-template-literal-escape | unicorn | style |  | 🛠️ | v1.60.0 |
| consistent-test-filename | vitest | style |  |  | v1.36.0 |
| consistent-test-it | jest | style |  | 🛠️ | v0.5.3 |
| consistent-test-it | vitest | style |  | 🛠️ | v0.5.3 |
| consistent-type-assertions | typescript | style |  | 🛠️ 💡 | v1.44.0 |
| consistent-type-definitions | typescript | style |  | ⚠️ 🛠️ | v0.2.17 |
| consistent-type-exports 💭 | typescript | style |  |  | v0.0.8 |
| consistent-type-imports | typescript | style |  | 🛠️ | v0.5.2 |
| consistent-type-specifier-style | import | style |  | 🛠️ | v0.16.11 |
| consistent-vitest-vi | vitest | style |  | 🛠️ | v1.37.0 |
| const-comparisons | oxc | correctness | ✅ |  | v0.0.22 |
| constructor-super | eslint | correctness | ✅ |  | v0.0.3 |
| control-has-associated-label | jsx-a11y | correctness |  |  | v1.65.0 |
| curly | eslint | style |  | 🛠️ | v0.15.13 |
| custom-error-definition | unicorn | style |  | 🚧 | v1.57.0 |
| default | import | correctness |  |  | v0.0.13 |
| default-case | eslint | restriction |  |  | v0.4.0 |
| default-case-last | eslint | style |  |  | v0.0.16 |
| default-param-last | eslint | style |  |  | v0.2.15 |
| define-emits-declaration | vue | style |  | 🚧 | v1.15.0 |
| define-props-declaration | vue | style |  |  | v1.15.0 |
| define-props-destructuring | vue | style |  |  | v1.20.0 |
| display-name | react | pedantic |  |  | v1.42.0 |
| dot-notation 💭 | typescript | style |  |  | v1.49.0 |
| double-comparisons | oxc | correctness | ✅ | 💡 | v0.0.22 |
| empty-brace-spaces | unicorn | style |  | 🛠️ | v0.0.18 |
| empty-tags | jsdoc | restriction |  | 🚧 | v0.2.16 |
| eqeqeq | eslint | pedantic |  | ⚠️ 🛠️ | v0.0.3 |
| erasing-op | oxc | correctness | ✅ | ⚠️ 🛠️ | v0.1.1 |
| error-message | unicorn | style |  |  | v0.0.14 |
| escape-case | unicorn | pedantic |  | 🛠️ | v0.0.19 |
| exhaustive-deps | react | correctness |  | ⚠️ 🛠 💡 | v0.12.0 |
| expect-expect | jest | correctness |  |  | v0.0.12 |
| expect-expect | vitest | correctness |  |  | v0.0.12 |
| explicit-function-return-type | typescript | restriction |  |  | v0.4.4 |
| explicit-length-check | unicorn | pedantic |  | 🛠️ | v0.0.19 |
| explicit-member-accessibility | typescript | restriction |  | 🛠️ 💡 | v1.61.0 |
| explicit-module-boundary-types | typescript | restriction |  |  | v1.9.0 |
| export | import | nursery |  |  | v0.0.21 |
| exports-last | import | style |  |  | v0.15.14 |
| extensions | import | restriction |  |  | v1.2.0 |
| filename-case | unicorn | style |  |  | v0.0.14 |
| first | import | style |  | 🚧 | v0.11.1 |
| for-direction | eslint | correctness | ✅ | ⚠️ 🛠️ | v0.0.3 |
| forbid-component-props | react | restriction |  |  | v1.62.0 |
| forbid-dom-props | react | restriction |  |  | v1.24.0 |
| forbid-elements | react | restriction |  |  | v0.16.11 |
| forward-ref-uses-ref | react | correctness |  | 💡 | v0.16.9 |
| func-name-matching | eslint | style |  |  | v1.62.0 |
| func-names | eslint | style |  | 🛠️ 💡 | v0.7.0 |
| func-style | eslint | style |  | 🚧 | v0.15.11 |
| getter-return | eslint | correctness | ✅ |  | v0.0.3 |
| global-require | node | style |  |  | v1.36.0 |
| google-font-display | nextjs | correctness |  |  | v0.2.0 |
| google-font-preconnect | nextjs | correctness |  |  | v0.2.0 |
| group-exports | import | style |  |  | v0.16.6 |
| grouped-accessor-pairs | eslint | style |  | 🚧 | v0.15.12 |
| guard-for-in | eslint | style |  |  | v0.2.14 |
| handle-callback-err | node | restriction |  |  | v1.56.0 |
| heading-has-content | jsx-a11y | correctness |  |  | v0.0.19 |
| hoisted-apis-on-top | vitest | correctness |  | 💡 | v1.39.0 |
| hook-use-state | react | style |  | 🚧 | v1.59.0 |
| html-has-lang | jsx-a11y | correctness |  |  | v0.0.18 |
| id-length | eslint | style |  |  | v1.4.0 |
| id-match | eslint | style |  |  | v1.66.0 |
| iframe-has-title | jsx-a11y | correctness |  |  | v0.0.19 |
| iframe-missing-sandbox | react | suspicious |  | 🚧 | v0.10.0 |
| img-redundant-alt | jsx-a11y | correctness |  |  | v0.0.19 |
| implements-on-classes | jsdoc | correctness |  |  | v0.3.2 |
| import-style | unicorn | restriction |  |  | v1.67.0 |
| init-declarations | eslint | style |  |  | v0.15.11 |
| inline-script-id | nextjs | correctness |  |  | v0.2.0 |
| interactive-supports-focus | jsx-a11y | correctness |  | 💡 | v1.63.0 |
| jsx-boolean-value | react | style |  | 🛠️ | v0.7.0 |
| jsx-curly-brace-presence | react | style |  | 🛠️ | v0.7.0 |
| jsx-filename-extension | react | restriction |  | 🚧 | v0.15.14 |
| jsx-fragments | react | style |  | 🛠️ | v1.12.0 |
| jsx-handler-names | react | style |  |  | v1.13.0 |
| jsx-key | react | correctness |  |  | v0.0.14 |
| jsx-max-depth | react | style |  |  | v1.36.0 |
| jsx-no-comment-textnodes | react | suspicious |  |  | v0.0.14 |
| jsx-no-constructed-context-values | react | perf |  |  | v1.48.0 |
| jsx-no-duplicate-props | react | correctness |  |  | v0.0.14 |
| jsx-no-jsx-as-prop | react-perf | perf |  |  | v0.2.3 |
| jsx-no-literals | react | restriction |  |  | v1.70.0 |
| jsx-no-new-array-as-prop | react-perf | perf |  |  | v0.2.3 |
| jsx-no-new-function-as-prop | react-perf | perf |  |  | v0.2.3 |
| jsx-no-new-object-as-prop | react-perf | perf |  |  | v0.2.3 |
| jsx-no-script-url | react | suspicious |  | 🚧 | v0.13.2 |
| jsx-no-target-blank | react | pedantic |  | 🚧 | v0.2.5 |
| jsx-no-undef | react | correctness |  |  | v0.1.1 |
| jsx-no-useless-fragment | react | pedantic |  | 💡 | v0.0.14 |
| jsx-pascal-case | react | style |  |  | v1.19.0 |
| jsx-props-no-spread-multi | react | correctness |  | 🛠️ | v0.7.2 |
| jsx-props-no-spreading | react | style |  |  | v1.33.0 |
| label-has-associated-control | jsx-a11y | correctness |  |  | v0.9.1 |
| lang | jsx-a11y | correctness |  |  | v0.1.1 |
| logical-assignment-operators | eslint | style |  | 🚧 | v1.63.0 |
| max-classes-per-file | eslint | pedantic |  |  | v0.3.4 |
| max-dependencies | import | pedantic |  |  | v0.5.0 |
| max-depth | eslint | pedantic |  |  | v0.15.12 |
| max-expects | jest | style |  |  | v0.0.18 |
| max-expects | vitest | style |  |  | v0.0.18 |
| max-lines | eslint | pedantic |  |  | v0.2.14 |
| max-lines-per-function | eslint | pedantic |  |  | v0.15.12 |
| max-nested-callbacks | eslint | pedantic |  |  | v0.15.12 |
| max-nested-calls | unicorn | style |  |  | vnext |
| max-nested-describe | jest | style |  |  | v0.4.4 |
| max-nested-describe | vitest | style |  |  | v0.4.4 |
| max-params | eslint | style |  |  | v0.2.14 |
| max-props | vue | restriction |  |  | v1.19.0 |
| max-statements | eslint | style |  |  | v1.35.0 |
| media-has-caption | jsx-a11y | correctness |  |  | v0.1.1 |
| method-signature-style | typescript | style |  | 🚧 | v1.68.0 |
| misrefactored-assign-op | oxc | suspicious |  | 💡 | v0.1.1 |
| missing-throw | oxc | correctness | ✅ | 💡 | v0.0.3 |
| mouse-events-have-key-events | jsx-a11y | correctness |  |  | v0.1.1 |
| named | import | nursery |  |  | v0.0.13 |
| namespace | import | correctness |  |  | v0.2.11 |
| new-cap | eslint | style |  | 🚧 | v0.15.5 |
| new-for-builtins | unicorn | pedantic |  | 🚧 | v0.0.16 |
| newline-after-import | import | style |  | 🛠️ | v1.66.0 |
| next-script-for-ga | nextjs | correctness |  |  | v0.2.0 |
| next-tick-style | vue | style |  | 🛠️ | v1.69.0 |
| no-absolute-path | import | suspicious |  | 🚧 | v0.15.13 |
| no-abusive-eslint-disable | unicorn | restriction |  |  | v0.0.18 |
| no-access-key | jsx-a11y | correctness |  | 💡 | v0.0.21 |
| no-accessor-recursion | unicorn | suspicious |  |  | v0.16.5 |
| no-accumulating-spread | oxc | perf |  |  | v0.0.19 |
| no-alert | eslint | restriction |  |  | v0.9.3 |
| no-alias-methods | jest | style |  | 🛠️ | v0.0.12 |
| no-alias-methods | vitest | style |  | 🛠️ | v0.0.12 |
| no-amd | import | restriction |  |  | v0.0.16 |
| no-anonymous-default-export | import | style |  |  | v0.15.14 |
| no-anonymous-default-export | unicorn | restriction |  | 🚧 | v0.3.3 |
| no-aria-hidden-on-focusable | jsx-a11y | correctness |  | 🛠️ | v0.0.22 |
| no-array-callback-reference | unicorn | pedantic |  | 🚧 | v1.19.0 |
| no-array-constructor | eslint | pedantic |  | 🛠️ | v0.0.3 |
| no-array-delete 💭 | typescript | correctness | ✅ | 💡 | v1.12.0 |
| no-array-fill-with-reference-type | unicorn | suspicious |  |  | v1.70.0 |
| no-array-for-each | unicorn | restriction |  | 🚧 | v0.0.19 |
| no-array-index-key | react | perf |  |  | v0.13.0 |
| no-array-method-this-argument | unicorn | style |  | 🚧 | v0.16.12 |
| no-array-reduce | unicorn | restriction |  |  | v0.0.19 |
| no-array-reverse | unicorn | suspicious |  | 🛠️ | v1.15.0 |
| no-array-sort | unicorn | suspicious |  | 🛠️ | v1.15.0 |
| no-arrow-functions-in-watch | vue | correctness |  |  | v1.39.0 |
| no-assign-module-variable | nextjs | correctness |  |  | v0.2.0 |
| no-async-await | oxc | restriction |  |  | v0.4.2 |
| no-async-client-component | nextjs | correctness |  |  | v0.2.0 |
| no-async-endpoint-handlers | oxc | suspicious |  |  | v0.9.2 |
| no-async-in-computed-properties | vue | correctness |  |  | vnext |
| no-async-promise-executor | eslint | correctness | ✅ |  | v0.0.3 |
| no-autofocus | jsx-a11y | correctness |  | 💡 | v0.0.19 |
| no-await-expression-member | unicorn | style |  | ⚠️ 🛠️ | v0.0.19 |
| no-await-in-loop | eslint | perf |  |  | v0.3.2 |
| no-await-in-promise-methods | unicorn | correctness | ✅ | 💡 | v0.2.18 |
| no-barrel-file | oxc | restriction |  |  | v0.3.0 |
| no-base-to-string 💭 | typescript | correctness | ✅ |  | v1.12.0 |
| no-before-interactive-script-outside-document | nextjs | correctness |  |  | v0.2.7 |
| no-bitwise | eslint | restriction |  |  | v0.0.3 |
| no-callback-in-promise | promise | correctness |  |  | v0.10.0 |
| no-caller | eslint | correctness | ✅ |  | v0.0.3 |
| no-case-declarations | eslint | pedantic |  | 💡 | v0.0.4 |
| no-children-prop | react | correctness |  |  | v0.0.14 |
| no-class-assign | eslint | correctness | ✅ |  | v0.0.3 |
| no-clone-element | react | restriction |  |  | v1.53.0 |
| no-commented-out-tests | jest | suspicious |  |  | v0.0.8 |
| no-commented-out-tests | vitest | suspicious |  |  | v0.0.8 |
| no-commonjs | import | restriction |  |  | v0.11.0 |
| no-compare-neg-zero | eslint | correctness | ✅ | 🛠️ 💡 | v0.0.3 |
| no-computed-properties-in-data | vue | correctness |  |  | v1.67.0 |
| no-cond-assign | eslint | correctness | ✅ |  | v0.0.5 |
| no-conditional-expect | jest | correctness |  |  | v0.0.12 |
| no-conditional-expect | vitest | correctness |  |  | v0.0.12 |
| no-conditional-in-test | jest | pedantic |  |  | v0.8.0 |
| no-conditional-in-test | vitest | pedantic |  |  | v0.8.0 |
| no-conditional-tests | vitest | correctness |  |  | v0.8.0 |
| no-confusing-non-null-assertion | typescript | suspicious |  | 🚧 | v0.6.1 |
| no-confusing-set-timeout | jest | style |  |  | v0.0.14 |
| no-confusing-void-expression 💭 | typescript | pedantic |  | 🛠️ 💡 | v1.12.0 |
| no-console | eslint | restriction |  | 💡 | v0.0.13 |
| no-console-spaces | unicorn | style |  | 🛠️ | v0.0.14 |
| no-const-assign | eslint | correctness | ✅ |  | v0.0.3 |
| no-const-enum | oxc | restriction |  | 🛠️ | v0.4.2 |
| no-constant-binary-expression | eslint | correctness | ✅ |  | v0.0.3 |
| no-constant-condition | eslint | correctness | ✅ |  | v0.0.3 |
| no-constructor-return | eslint | pedantic |  |  | v0.4.3 |
| no-continue | eslint | style |  |  | v0.2.14 |
| no-control-regex | eslint | correctness | ✅ |  | v0.0.7 |
| no-css-tags | nextjs | correctness |  |  | v0.2.0 |
| no-cycle | import | restriction |  |  | v0.0.13 |
| no-danger | react | restriction |  |  | v0.0.14 |
| no-danger-with-children | react | correctness |  |  | v0.9.6 |
| no-debugger | eslint | correctness | ✅ | 💡 | v0.0.3 |
| no-default-export | import | restriction |  |  | v0.2.14 |
| no-defaults | jsdoc | correctness |  | 🚧 | v0.3.2 |
| no-delete-var | eslint | correctness | ✅ |  | v0.0.4 |
| no-deprecated 💭 | typescript | pedantic |  |  | v1.26.0 |
| no-deprecated-data-object-declaration | vue | correctness |  | 🚧 | v1.62.0 |
| no-deprecated-delete-set | vue | correctness |  |  | v1.62.0 |
| no-deprecated-destroyed-lifecycle | vue | correctness |  | 🛠️ | v1.35.0 |
| no-deprecated-events-api | vue | correctness |  |  | v1.62.0 |
| no-deprecated-functions | jest | style |  | 🛠️ | v0.0.18 |
| no-deprecated-model-definition | vue | correctness |  | 🚧 | v1.63.0 |
| no-deprecated-props-default-this | vue | correctness |  | 🚧 | v1.67.0 |
| no-deprecated-vue-config-keycodes | vue | correctness |  |  | v1.62.0 |
| no-did-mount-set-state | react | correctness |  |  | v1.36.0 |
| no-did-update-set-state | react | correctness |  |  | v1.62.0 |
| no-direct-mutation-state | react | correctness |  |  | v0.2.0 |
| no-disabled-tests | jest | correctness |  |  | v0.0.7 |
| no-disabled-tests | vitest | correctness |  |  | v0.0.7 |
| no-distracting-elements | jsx-a11y | correctness |  |  | v0.0.22 |
| no-div-regex | eslint | restriction |  | 🛠️ | v0.4.2 |
| no-document-cookie | unicorn | restriction |  |  | v0.0.18 |
| no-document-import-in-page | nextjs | correctness |  |  | v0.2.1 |
| no-done-callback | jest | style |  | 🚧 | v0.0.13 |
| no-dupe-class-members | eslint | correctness | ✅ |  | v0.0.3 |
| no-dupe-else-if | eslint | correctness | ✅ |  | v0.0.5 |
| no-dupe-keys | eslint | correctness | ✅ |  | v0.0.3 |
| no-dupe-keys | vue | correctness | ✅ |  | v1.70.0 |
| no-duplicate-case | eslint | correctness | ✅ |  | v0.0.3 |
| no-duplicate-enum-values | typescript | correctness | ✅ |  | v0.0.8 |
| no-duplicate-head | nextjs | correctness |  |  | v0.3.3 |
| no-duplicate-hooks | jest | style |  |  | v0.4.0 |
| no-duplicate-hooks | vitest | style |  |  | v0.4.0 |
| no-duplicate-imports | eslint | style |  | 🚧 | v0.13.2 |
| no-duplicate-type-constituents 💭 | typescript | correctness | ✅ | 🛠️ | v1.12.0 |
| no-duplicates | import | style |  |  | v0.2.11 |
| no-dynamic-delete | typescript | restriction |  |  | v0.5.2 |
| no-dynamic-require | import | restriction |  |  | v0.9.3 |
| no-else-return | eslint | pedantic |  | 🛠️ | v0.9.10 |
| no-empty | eslint | restriction |  | 💡 | v0.0.3 |
| no-empty-character-class | eslint | correctness | ✅ |  | v0.0.7 |
| no-empty-file | unicorn | correctness | ✅ |  | v0.0.15 |
| no-empty-function | eslint | restriction |  | 💡 | v0.3.3 |
| no-empty-interface | typescript | style |  | 🚧 | v0.0.6 |
| no-empty-named-blocks | import | suspicious |  | 🛠️ | v0.16.1 |
| no-empty-object-type | typescript | restriction |  | 🚧 | v0.12.0 |
| no-empty-pattern | eslint | correctness | ✅ |  | v0.0.3 |
| no-empty-static-block | eslint | correctness | ✅ | 💡 | v0.0.19 |
| no-eq-null | eslint | restriction |  | ⚠️ 🛠️ | v0.2.14 |
| no-eval | eslint | correctness | ✅ |  | v0.0.3 |
| no-ex-assign | eslint | correctness | ✅ |  | v0.0.4 |
| no-explicit-any | typescript | restriction |  | 🛠️ | v0.0.13 |
| no-export | jest | correctness |  |  | v0.0.13 |
| no-export-in-script-setup | vue | correctness |  |  | v1.20.0 |
| no-exports-assign | node | style |  | 🛠️ | v0.9.3 |
| no-expose-after-await | vue | correctness |  |  | v1.67.0 |
| no-extend-native | eslint | suspicious |  |  | v0.9.7 |
| no-extra-bind | eslint | suspicious |  | 🚧 | v1.1.0 |
| no-extra-boolean-cast | eslint | correctness | ✅ | 🛠️ 💡 | v0.0.8 |
| no-extra-label | eslint | style |  | 🛠️ | v0.15.4 |
| no-extra-non-null-assertion | typescript | correctness | ✅ | 🛠️ | v0.0.6 |
| no-extraneous-class | typescript | suspicious |  | ⚠️ 💡 | v0.7.0 |
| no-fallthrough | eslint | pedantic |  | 🚧 | v0.0.14 |
| no-find-dom-node | react | correctness |  |  | v0.0.15 |
| no-floating-promises 💭 | typescript | correctness | ✅ | 💡 | v1.11.0 |
| no-focused-tests | jest | correctness |  | 💡 | v0.0.8 |
| no-focused-tests | vitest | correctness |  | 💡 | v0.0.8 |
| no-for-in-array 💭 | typescript | correctness | ✅ |  | v1.12.0 |
| no-func-assign | eslint | correctness | ✅ |  | v0.0.3 |
| no-global-assign | eslint | correctness | ✅ |  | v0.0.7 |
| no-head-element | nextjs | correctness |  |  | v0.2.1 |
| no-head-import-in-document | nextjs | correctness |  |  | v0.2.0 |
| no-hex-escape | unicorn | pedantic |  | 🛠️ | v0.0.18 |
| no-hooks | jest | style |  |  | v0.0.16 |
| no-hooks | vitest | style |  |  | v0.0.16 |
| no-html-link-for-pages | nextjs | correctness |  |  | v1.7.0 |
| no-identical-title | jest | style |  |  | v0.0.14 |
| no-identical-title | vitest | style |  |  | v0.0.14 |
| no-img-element | nextjs | correctness |  | 🚧 | v0.2.0 |
| no-immediate-mutation | unicorn | pedantic |  | 🚧 | v1.35.0 |
| no-implicit-coercion | eslint | style |  | 🛠️ | v1.33.0 |
| no-implicit-globals | eslint | restriction |  |  | v1.65.0 |
| no-implied-eval | eslint | suspicious | ✅ |  | v1.66.0 |
| no-implied-eval 💭 | typescript | correctness | ✅ |  | v1.12.0 |
| no-import-assign | eslint | correctness | ✅ |  | v0.0.5 |
| no-import-compiler-macros | vue | restriction |  | ⚠️ 🛠️ | v1.21.0 |
| no-import-node-test | vitest | style |  | 💡 | v0.7.0 |
| no-import-type-side-effects | typescript | restriction |  | 🛠️ | v0.5.0 |
| no-importing-vitest-globals | vitest | style |  | 🛠️ | v1.49.0 |
| no-inferrable-types | typescript | style |  | 💡 | v0.14.0 |
| no-inline-comments | eslint | pedantic |  |  | v1.34.0 |
| no-inner-declarations | eslint | pedantic |  |  | v0.0.5 |
| no-instanceof-array | unicorn | pedantic |  | 🛠️ | v0.0.8 |
| no-instanceof-builtins | unicorn | suspicious |  | 💡 | v0.16.12 |
| no-interactive-element-to-noninteractive-role | jsx-a11y | correctness |  |  | v1.65.0 |
| no-interpolation-in-snapshots | jest | style |  |  | v0.0.13 |
| no-interpolation-in-snapshots | vitest | style |  |  | v0.0.13 |
| no-invalid-fetch-options | unicorn | correctness | ✅ |  | v0.15.12 |
| no-invalid-regexp | eslint | correctness | ✅ |  | v0.9.4 |
| no-invalid-remove-event-listener | unicorn | correctness | ✅ |  | v0.0.16 |
| no-invalid-void-type | typescript | restriction |  |  | v1.47.0 |
| no-irregular-whitespace | eslint | correctness | ✅ |  | v0.1.1 |
| no-is-mounted | react | correctness |  |  | v0.0.19 |
| no-iterator | eslint | correctness | ✅ | 💡 | v0.2.15 |
| no-jasmine-globals | jest | style |  | 🛠️ | v0.0.13 |
| no-label-var | eslint | style |  |  | v0.6.0 |
| no-labels | eslint | style |  |  | v0.15.4 |
| no-large-snapshots | jest | style |  |  | v0.4.3 |
| no-large-snapshots | vitest | style |  |  | v0.4.3 |
| no-length-as-slice-end | unicorn | restriction |  | 🛠️ | v0.7.0 |
| no-lifecycle-after-await | vue | correctness |  |  | v1.39.0 |
| no-lone-blocks | eslint | style |  |  | v0.15.6 |
| no-lonely-if | eslint | pedantic |  | 🚧 | v0.16.0 |
| no-lonely-if | unicorn | pedantic |  | 🚧 | v0.0.18 |
| no-loop-func | eslint | pedantic |  |  | v1.33.0 |
| no-loss-of-precision | eslint | correctness | ✅ |  | v0.0.7 |
| no-magic-array-flat-depth | unicorn | restriction |  |  | v0.4.2 |
| no-magic-numbers | eslint | style |  | 🚧 | v0.9.3 |
| no-map-spread | oxc | perf |  | 💡 | v0.11.0 |
| no-meaningless-void-operator 💭 | typescript | correctness | ✅ | 🛠️ 💡 | v1.12.0 |
| no-misleading-character-class | eslint | correctness | ✅ | 💡 | v1.17.0 |
| no-misused-new | typescript | correctness | ✅ |  | v0.0.7 |
| no-misused-promises 💭 | typescript | pedantic |  |  | v1.11.0 |
| no-misused-spread 💭 | typescript | correctness | ✅ | 💡 | v1.12.0 |
| no-mixed-enums 💭 | typescript | pedantic |  |  | v1.12.0 |
| no-mixed-requires | node | style |  |  | vnext |
| no-mocks-import | jest | style |  |  | v0.0.13 |
| no-mocks-import | vitest | style |  |  | v0.0.13 |
| no-multi-assign | eslint | style |  |  | v0.15.4 |
| no-multi-comp | react | restriction |  |  | v1.43.0 |
| no-multi-str | eslint | style |  |  | v0.5.3 |
| no-multiple-resolved | promise | suspicious |  |  | v1.19.0 |
| no-multiple-slot-args | vue | restriction |  | 🚧 | v1.15.0 |
| no-mutable-exports | import | style |  |  | v0.15.13 |
| no-named-as-default | import | suspicious |  |  | v0.2.3 |
| no-named-as-default-member | import | suspicious |  |  | v0.2.1 |
| no-named-default | import | style |  |  | v0.15.3 |
| no-named-export | import | style |  |  | v1.19.0 |
| no-namespace | import | style |  | 🚧 | v0.12.0 |
| no-namespace | react | suspicious |  |  | v0.15.13 |
| no-namespace | typescript | restriction |  |  | v0.0.8 |
| no-negated-condition | eslint | pedantic |  | 🚧 | v0.0.18 |
| no-negated-condition | unicorn | pedantic |  | 🚧 | v0.0.18 |
| no-negation-in-equality-check | unicorn | pedantic |  | 💡 | v0.5.3 |
| no-nested-ternary | eslint | style |  |  | v0.15.4 |
| no-nested-ternary | unicorn | style |  | 🛠️ | v0.0.18 |
| no-nesting | promise | style |  | 🚧 | v0.15.13 |
| no-new | eslint | suspicious |  |  | v0.4.0 |
| no-new-array | unicorn | correctness | ✅ | ⚠️ 💡 | v0.0.16 |
| no-new-buffer | unicorn | pedantic |  | 💡 | v0.0.16 |
| no-new-func | eslint | style |  |  | v0.9.2 |
| no-new-native-nonconstructor | eslint | correctness | ✅ |  | v0.3.3 |
| no-new-require | node | restriction |  |  | v0.10.0 |
| no-new-statics | promise | correctness |  | 🛠️ | v0.6.1 |
| no-new-wrappers | eslint | pedantic |  | 🛠️ | v0.2.10 |
| no-nodejs-modules | import | style |  |  | v1.43.0 |
| no-non-null-asserted-nullish-coalescing | typescript | restriction |  | 💡 | v0.5.0 |
| no-non-null-asserted-optional-chain | typescript | correctness | ✅ | 💡 | v0.0.6 |
| no-non-null-assertion | typescript | restriction |  | 🚧 | v0.5.0 |
| no-noninteractive-element-interactions | jsx-a11y | correctness |  |  | v1.65.0 |
| no-noninteractive-element-to-interactive-role | jsx-a11y | correctness |  |  | v1.64.0 |
| no-noninteractive-tabindex | jsx-a11y | correctness |  |  | v0.15.4 |
| no-nonoctal-decimal-escape | eslint | correctness | ✅ | 💡 | v0.2.10 |
| no-null | unicorn | style |  | ⚠️ 🛠️ | v0.0.21 |
| no-obj-calls | eslint | correctness | ✅ |  | v0.0.7 |
| no-object-as-default-parameter | unicorn | pedantic |  |  | v0.0.16 |
| no-object-constructor | eslint | pedantic |  | 🚧 | v0.13.2 |
| no-object-type-as-default-prop | react | perf |  |  | v1.66.0 |
| no-optional-chaining | oxc | restriction |  |  | v0.5.0 |
| no-page-custom-font | nextjs | correctness |  |  | v0.3.3 |
| no-param-reassign | eslint | restriction |  |  | v1.20.0 |
| no-path-concat | node | restriction |  |  | v1.49.0 |
| no-plusplus | eslint | restriction |  | 💡 | v0.9.5 |
| no-process-env | node | restriction |  |  | v1.23.0 |
| no-process-exit | unicorn | restriction |  | 🚧 | v0.2.9 |
| no-promise-executor-return | eslint | pedantic |  | 🚧 | v1.33.0 |
| no-promise-in-callback | promise | suspicious |  |  | v0.13.1 |
| no-proto | eslint | restriction |  | 🚧 | v0.2.14 |
| no-prototype-builtins | eslint | pedantic |  | 🚧 | v0.0.5 |
| no-react-children | react | restriction |  |  | v1.53.0 |
| no-redeclare | eslint | pedantic |  |  | v0.0.13 |
| no-redundant-roles | jsx-a11y | correctness |  | 🛠️ | v0.2.1 |
| no-redundant-should-component-update | react | style |  |  | v1.33.0 |
| no-redundant-type-constituents 💭 | typescript | correctness | ✅ |  | v1.12.0 |
| no-regex-spaces | eslint | restriction |  | 🛠️ | v0.0.18 |
| no-relative-parent-imports | import | restriction |  |  | v1.43.0 |
| no-render-return-value | react | correctness |  |  | v0.0.15 |
| no-require-imports | typescript | restriction |  | 🚧 | v0.13.0 |
| no-required-prop-with-default | vue | suspicious |  | 💡 | v1.17.0 |
| no-reserved-component-names | vue | correctness |  |  | v1.68.0 |
| no-reserved-keys | vue | correctness |  |  | v1.69.0 |
| no-reserved-props | vue | correctness |  |  | v1.69.0 |
| no-rest-spread-properties | oxc | restriction |  |  | v0.4.2 |
| no-restricted-exports | eslint | nursery |  |  | v1.59.0 |
| no-restricted-globals | eslint | restriction |  |  | v0.4.0 |
| no-restricted-imports | eslint | restriction |  |  | v0.15.0 |
| no-restricted-jest-methods | jest | style |  |  | v0.2.3 |
| no-restricted-matchers | jest | style |  |  | v0.2.3 |
| no-restricted-matchers | vitest | style |  |  | v0.2.3 |
| no-restricted-properties | eslint | restriction |  |  | v1.63.0 |
| no-restricted-types | typescript | restriction |  | 🛠️ 💡 | v1.31.0 |
| no-restricted-vi-methods | vitest | style |  |  | v0.2.3 |
| no-return-assign | eslint | style |  |  | v0.9.10 |
| no-return-in-finally | promise | nursery |  |  | v0.7.1 |
| no-return-wrap | promise | style |  | 🚧 | v0.15.14 |
| no-script-component-in-head | nextjs | correctness |  |  | v0.2.0 |
| no-script-url | eslint | style |  |  | v0.2.15 |
| no-self-assign | eslint | correctness | ✅ |  | v0.0.5 |
| no-self-compare | eslint | pedantic |  |  | v0.0.3 |
| no-self-import | import | suspicious |  |  | v0.0.13 |
| no-sequences | eslint | restriction |  |  | v1.33.0 |
| no-set-state | react | style |  |  | v0.5.2 |
| no-setter-return | eslint | correctness | ✅ |  | v0.0.3 |
| no-shadow | eslint | suspicious |  |  | v1.48.0 |
| no-shadow-restricted-names | eslint | correctness | ✅ |  | v0.0.3 |
| no-shared-component-data | vue | correctness |  | 🚧 | v1.67.0 |
| no-side-effects-in-computed-properties | vue | correctness |  |  | v1.70.0 |
| no-single-promise-in-promise-methods | unicorn | correctness | ✅ | 🛠️ | v0.2.18 |
| no-sparse-arrays | eslint | correctness | ✅ |  | v0.0.4 |
| no-standalone-expect | jest | correctness |  |  | v0.0.13 |
| no-standalone-expect | vitest | correctness |  |  | v0.0.13 |
| no-static-element-interactions | jsx-a11y | correctness |  |  | v1.37.0 |
| no-static-only-class | unicorn | pedantic |  | ⚠️ 🛠️ | v0.0.16 |
| no-string-refs | react | correctness |  |  | v0.0.15 |
| no-styled-jsx-in-document | nextjs | correctness |  |  | v0.3.3 |
| no-sync | node | style |  |  | vnext |
| no-sync-scripts | nextjs | correctness |  |  | v0.2.0 |
| no-template-curly-in-string | eslint | style |  |  | v0.2.14 |
| no-ternary | eslint | style |  |  | v0.2.14 |
| no-test-prefixes | jest | style |  | 🛠️ | v0.0.7 |
| no-test-prefixes | vitest | style |  | 🛠️ | v0.0.7 |
| no-test-return-statement | jest | style |  |  | v0.2.0 |
| no-test-return-statement | vitest | style |  |  | v0.2.0 |
| no-thenable | unicorn | correctness | ✅ |  | v0.0.13 |
| no-this-alias | typescript | correctness | ✅ |  | v0.0.7 |
| no-this-assignment | unicorn | pedantic |  |  | v0.0.18 |
| no-this-before-super | eslint | correctness | ✅ |  | v0.2.6 |
| no-this-in-before-route-enter | vue | correctness |  |  | v1.37.0 |
| no-this-in-exported-function | oxc | suspicious |  |  | v1.33.0 |
| no-this-in-sfc | react | correctness |  |  | v1.37.0 |
| no-throw-literal | eslint | pedantic |  | 💡 | v0.9.10 |
| no-title-in-document-head | nextjs | correctness |  |  | v0.2.0 |
| no-typeof-undefined | unicorn | pedantic |  | 🛠️ 💡 | v0.0.18 |
| no-typos | nextjs | correctness |  | 🚧 | v0.2.1 |
| no-unassigned-import | import | suspicious |  |  | v0.16.11 |
| no-unassigned-vars | eslint | correctness | ✅ |  | v1.10.0 |
| no-undef | eslint | nursery |  |  | v0.0.8 |
| no-undefined | eslint | restriction |  |  | v0.5.3 |
| no-underscore-dangle | eslint | suspicious |  |  | v1.62.0 |
| no-unescaped-entities | react | pedantic |  | 🚧 | v0.0.15 |
| no-unexpected-multiline | eslint | suspicious |  | ⚠️ 🛠️ | v0.9.7 |
| no-unknown-property | react | restriction |  | 🚧 | v0.2.0 |
| no-unmodified-loop-condition | eslint | suspicious |  |  | v1.48.0 |
| no-unnecessary-array-flat-depth | unicorn | pedantic |  | 💡 | v0.16.12 |
| no-unnecessary-array-splice-count | unicorn | pedantic |  | 🛠️ | v1.20.0 |
| no-unnecessary-await | unicorn | correctness | ✅ | 🛠️ | v0.0.12 |
| no-unnecessary-boolean-literal-compare 💭 | typescript | suspicious |  | 🚧 | v1.12.0 |
| no-unnecessary-condition 💭 | typescript | nursery |  |  | v1.48.0 |
| no-unnecessary-parameter-property-assignment | typescript | correctness | ✅ | 💡 | v0.15.13 |
| no-unnecessary-qualifier 💭 | typescript | style |  |  | v1.49.0 |
| no-unnecessary-slice-end | unicorn | pedantic |  | 🛠️ | v0.16.10 |
| no-unnecessary-template-expression 💭 | typescript | suspicious |  | 🛠️ | v1.12.0 |
| no-unnecessary-type-arguments 💭 | typescript | suspicious |  | 🛠️ | v1.12.0 |
| no-unnecessary-type-assertion 💭 | typescript | suspicious |  | 🛠️ | v1.12.0 |
| no-unnecessary-type-constraint | typescript | suspicious |  | 💡 | v0.0.6 |
| no-unnecessary-type-conversion 💭 | typescript | suspicious |  |  | v1.49.0 |
| no-unnecessary-type-parameters 💭 | typescript | suspicious |  |  | v1.49.0 |
| no-unneeded-async-expect-function | jest | style |  | 🛠️ | v1.39.0 |
| no-unneeded-async-expect-function | vitest | style |  | 🛠️ | v1.39.0 |
| no-unneeded-ternary | eslint | suspicious |  | ⚠️ 🛠️ | v0.15.12 |
| no-unreachable | eslint | correctness | ✅ |  | v0.4.4 |
| no-unreadable-array-destructuring | unicorn | style |  | 🚧 | v0.0.19 |
| no-unreadable-iife | unicorn | pedantic |  |  | v0.0.19 |
| no-unsafe | react | correctness |  |  | v1.35.0 |
| no-unsafe-argument 💭 | typescript | pedantic |  |  | v1.12.0 |
| no-unsafe-assignment 💭 | typescript | pedantic |  |  | v1.12.0 |
| no-unsafe-call 💭 | typescript | pedantic |  |  | v1.12.0 |
| no-unsafe-declaration-merging | typescript | correctness | ✅ |  | v0.0.11 |
| no-unsafe-enum-comparison 💭 | typescript | suspicious |  | 💡 | v1.12.0 |
| no-unsafe-finally | eslint | correctness | ✅ |  | v0.0.5 |
| no-unsafe-function-type | typescript | pedantic |  |  | v0.11.1 |
| no-unsafe-member-access 💭 | typescript | pedantic |  |  | v1.12.0 |
| no-unsafe-negation | eslint | correctness | ✅ | 🛠️ | v0.0.3 |
| no-unsafe-optional-chaining | eslint | correctness | ✅ |  | v0.0.5 |
| no-unsafe-return 💭 | typescript | pedantic |  |  | v1.12.0 |
| no-unsafe-type-assertion 💭 | typescript | suspicious |  |  | v1.12.0 |
| no-unsafe-unary-minus 💭 | typescript | correctness | ✅ |  | v1.12.0 |
| no-unstable-nested-components | react | suspicious |  |  | v1.66.0 |
| no-untyped-mock-factory | jest | style |  | 🛠️ | v0.2.15 |
| no-unused-expressions | eslint | correctness | ✅ |  | v0.14.0 |
| no-unused-labels | eslint | correctness | ✅ | 🛠️ | v0.0.3 |
| no-unused-private-class-members | eslint | correctness | ✅ |  | v0.1.1 |
| no-unused-vars | eslint | correctness | ✅ | ⚠️ 🛠 💡 | v0.7.0 |
| no-unwanted-polyfillio | nextjs | correctness |  |  | v0.2.7 |
| no-use-before-define | eslint | restriction |  |  | v1.49.0 |
| no-useless-assignment | eslint | nursery |  |  | v1.59.0 |
| no-useless-backreference | eslint | correctness | ✅ |  | v0.16.10 |
| no-useless-call | eslint | perf |  |  | v0.15.9 |
| no-useless-catch | eslint | correctness | ✅ |  | v0.0.5 |
| no-useless-collection-argument | unicorn | style |  | 💡 | v1.28.0 |
| no-useless-computed-key | eslint | style |  | 🛠️ | v1.16.0 |
| no-useless-concat | eslint | suspicious |  | 🚧 | v0.4.2 |
| no-useless-constructor | eslint | suspicious |  | 💡 | v0.4.4 |
| no-useless-default-assignment 💭 | typescript | correctness | ✅ |  | v1.49.0 |
| no-useless-empty-export | typescript | correctness | ✅ | 🛠️ | v0.4.4 |
| no-useless-error-capture-stack-trace | unicorn | restriction |  | 💡 | v1.20.0 |
| no-useless-escape | eslint | correctness | ✅ | 🛠️ | v0.0.5 |
| no-useless-fallback-in-spread | unicorn | correctness | ✅ | 🛠️ | v0.0.16 |
| no-useless-iterator-to-array | unicorn | nursery |  | 🛠️ 💡 | v1.59.0 |
| no-useless-length-check | unicorn | correctness | ✅ | 🚧 | v0.0.19 |
| no-useless-promise-resolve-reject | unicorn | pedantic |  | 🛠️ | v0.0.18 |
| no-useless-rename | eslint | correctness | ✅ | 🛠️ | v0.2.14 |
| no-useless-return | eslint | pedantic |  | 🚧 | v1.32.0 |
| no-useless-spread | unicorn | correctness | ✅ | ⚠️ 🛠️ | v0.0.19 |
| no-useless-switch-case | unicorn | pedantic |  | 🚧 | v0.0.18 |
| no-useless-undefined | unicorn | pedantic |  | 🛠️ | v0.6.1 |
| no-var | eslint | restriction |  | 🛠️ | v0.1.1 |
| no-var-requires | typescript | restriction |  |  | v0.0.7 |
| no-void | eslint | restriction |  | 💡 | v0.2.5 |
| no-warning-comments | eslint | pedantic |  |  | v1.24.0 |
| no-watch-after-await | vue | correctness |  |  | v1.67.0 |
| no-webpack-loader-syntax | import | restriction |  |  | v0.7.0 |
| no-will-update-set-state | react | correctness |  |  | v1.37.0 |
| no-with | eslint | correctness | ✅ |  | v0.2.14 |
| no-wrapper-object-types | typescript | correctness | ✅ | 🛠️ | v0.8.0 |
| no-zero-fractions | unicorn | style |  | 🛠️ | v0.0.18 |
| non-nullable-type-assertion-style 💭 | typescript | restriction |  | 💡 | v1.12.0 |
| number-arg-out-of-range | oxc | correctness | ✅ |  | v0.0.3 |
| number-literal-case | unicorn | style |  | 🛠️ | v0.0.18 |
| numeric-separators-style | unicorn | style |  | 🛠️ | v0.0.19 |
| object-shorthand | eslint | style |  | 🛠️ | v1.59.0 |
| only-export-components | react | restriction |  |  | v1.23.0 |
| only-throw-error 💭 | typescript | pedantic |  |  | v1.12.0 |
| only-used-in-recursion | oxc | correctness | ✅ | ⚠️ 🛠️ | v0.1.1 |
| operator-assignment | eslint | style |  | ⚠️ 🛠️ | v0.15.13 |
| padding-around-after-all-blocks | jest | style |  | 🛠️ | v1.59.0 |
| padding-around-after-all-blocks | vitest | style |  | 🛠️ | v1.66.0 |
| padding-around-test-blocks | jest | style |  | 🛠️ | v1.13.0 |
| param-names | promise | style |  |  | v0.6.1 |
| parameter-properties | typescript | style |  |  | v1.48.0 |
| prefer-add-event-listener | unicorn | suspicious |  | 🚧 | v0.0.16 |
| prefer-array-find | unicorn | perf |  | 🚧 | v0.16.12 |
| prefer-array-flat | unicorn | pedantic |  | ⚠️ 🛠️ | v0.0.20 |
| prefer-array-flat-map | unicorn | perf |  | 🛠️ | v0.0.14 |
| prefer-array-index-of | unicorn | style |  | 🚧 | v0.16.12 |
| prefer-array-some | unicorn | pedantic |  | 💡 | v0.0.18 |
| prefer-arrow-callback | eslint | style |  | 🛠️ | v1.65.0 |
| prefer-as-const | typescript | correctness | ✅ | 🛠️ | v0.0.8 |
| prefer-at | unicorn | pedantic |  | ⚠️ 🛠️ | v1.20.0 |
| prefer-await-to-callbacks | promise | style |  |  | v0.9.10 |
| prefer-await-to-then | promise | style |  |  | v0.7.1 |
| prefer-bigint-literals | unicorn | style |  | 🛠️ | v1.30.0 |
| prefer-blob-reading-methods | unicorn | pedantic |  | 🚧 | v0.0.16 |
| prefer-called-exactly-once-with | vitest | style |  | ⚠️ 🛠️ | v1.58.0 |
| prefer-called-once | vitest | style |  | 🛠️ | v1.39.0 |
| prefer-called-times | vitest | style |  | 🛠️ | v1.35.0 |
| prefer-called-with | jest | style |  | 🛠️ | v0.2.5 |
| prefer-called-with | vitest | style |  | 🛠️ | v0.2.5 |
| prefer-catch | promise | style |  | 🚧 | v0.15.14 |
| prefer-class-fields | unicorn | style |  | 🛠️ 💡 | v1.20.0 |
| prefer-classlist-toggle | unicorn | style |  | 🛠️ | v1.20.0 |
| prefer-code-point | unicorn | pedantic |  | 🛠️ | v0.0.16 |
| prefer-comparison-matcher | jest | style |  | 🛠️ | v0.2.15 |
| prefer-comparison-matcher | vitest | style |  | 🛠️ | v0.2.15 |
| prefer-const | eslint | style |  | 🛠️ | v1.43.0 |
| prefer-date-now | unicorn | pedantic |  | 🛠️ | v0.0.16 |
| prefer-default-export | import | style |  |  | v1.4.0 |
| prefer-default-parameters | unicorn | style |  | 🛠️ | v1.33.0 |
| prefer-describe-function-title | vitest | style |  | 🛠️ | v1.39.0 |
| prefer-destructuring | eslint | style |  | 🛠️ | v1.10.0 |
| prefer-dom-node-append | unicorn | pedantic |  | 🛠️ | v0.0.18 |
| prefer-dom-node-dataset | unicorn | pedantic |  | 🛠️ | v0.0.18 |
| prefer-dom-node-remove | unicorn | pedantic |  | 🚧 | v0.0.18 |
| prefer-dom-node-text-content | unicorn | style |  | 🛠️ | v0.0.21 |
| prefer-each | jest | style |  |  | v0.9.0 |
| prefer-each | vitest | style |  |  | v0.9.0 |
| prefer-ending-with-an-expect | jest | style |  |  | v1.60.0 |
| prefer-enum-initializers | typescript | pedantic |  | 💡 | v0.3.2 |
| prefer-equality-matcher | jest | style |  | 💡 | v0.2.9 |
| prefer-equality-matcher | vitest | style |  | 💡 | v0.2.9 |
| prefer-es6-class | react | style |  |  | v0.5.0 |
| prefer-event-target | unicorn | pedantic |  |  | v0.0.18 |
| prefer-expect-assertions | jest | style |  | 💡 | v1.62.0 |
| prefer-expect-assertions | vitest | style |  | 💡 | v1.62.0 |
| prefer-expect-resolves | jest | style |  | 🛠️ | v0.2.14 |
| prefer-expect-resolves | vitest | style |  | 🛠️ | v0.2.14 |
| prefer-expect-type-of | vitest | style |  | 🛠️ | v1.44.0 |
| prefer-exponentiation-operator | eslint | style |  | 🛠️ | v0.4.0 |
| prefer-export-from | unicorn | style |  | 💡 | v1.70.0 |
| prefer-find 💭 | typescript | style |  |  | v1.49.0 |
| prefer-for-of | typescript | style |  | 🚧 | v0.2.16 |
| prefer-function-component | react | restriction |  |  | v1.59.0 |
| prefer-function-type | typescript | style |  | 🛠️ | v0.2.11 |
| prefer-global-this | unicorn | style |  | 💡 | v0.16.12 |
| prefer-hooks-in-order | jest | style |  |  | v0.6.0 |
| prefer-hooks-in-order | vitest | style |  |  | v0.6.0 |
| prefer-hooks-on-top | jest | style |  |  | v0.4.2 |
| prefer-hooks-on-top | vitest | style |  |  | v0.4.2 |
| prefer-import-from-vue | vue | correctness |  | 🛠️ | v1.20.0 |
| prefer-import-in-mock | vitest | style |  | 🛠️ | v1.49.0 |
| prefer-import-meta-properties | unicorn | pedantic |  | 🛠️ | v1.59.0 |
| prefer-importing-jest-globals | jest | style |  | 🛠️ | v1.60.0 |
| prefer-importing-vitest-globals | vitest | style |  | 🛠️ | v1.59.0 |
| prefer-includes 💭 | typescript | pedantic |  | 🛠️ | v1.29.0 |
| prefer-includes | unicorn | style |  | 💡 | v0.0.18 |
| prefer-jest-mocked | jest | style |  | 🛠️ | v0.5.0 |
| prefer-keyboard-event-key | unicorn | style |  | 🛠️ | v1.33.0 |
| prefer-literal-enum-member | typescript | restriction |  |  | v0.3.2 |
| prefer-logical-operator-over-ternary | unicorn | style |  | 💡 | v0.0.15 |
| prefer-lowercase-title | jest | style |  | 🛠️ | v0.15.9 |
| prefer-lowercase-title | vitest | style |  | 🛠️ | v0.15.9 |
| prefer-math-min-max | unicorn | pedantic |  | 🛠️ | v0.10.1 |
| prefer-math-trunc | unicorn | pedantic |  | 💡 | v0.0.18 |
| prefer-mock-promise-shorthand | jest | style |  | 🛠️ | v0.2.16 |
| prefer-mock-promise-shorthand | vitest | style |  | 🛠️ | v0.2.16 |
| prefer-mock-return-shorthand | jest | style |  | 🛠️ | v1.49.0 |
| prefer-mock-return-shorthand | vitest | style |  | 🛠️ | v1.49.0 |
| prefer-modern-dom-apis | unicorn | style |  | 💡 | v0.0.20 |
| prefer-modern-math-apis | unicorn | restriction |  | 🚧 | v0.1.1 |
| prefer-module | unicorn | restriction |  | 🚧 | v1.50.0 |
| prefer-named-capture-group | eslint | style |  |  | v1.68.0 |
| prefer-namespace-keyword | typescript | correctness | ✅ | 🛠️ | v0.7.0 |
| prefer-native-coercion-functions | unicorn | pedantic |  | 🚧 | v0.0.19 |
| prefer-negative-index | unicorn | style |  | 🛠️ | v0.13.2 |
| prefer-node-protocol | unicorn | restriction |  | 🛠️ | v0.0.19 |
| prefer-nullish-coalescing 💭 | typescript | pedantic |  | 🛠️ | v1.33.0 |
| prefer-number-coercion | unicorn | pedantic |  | 💡 | vnext |
| prefer-number-properties | unicorn | restriction |  | ⚠️ 🛠️ | v0.0.19 |
| prefer-numeric-literals | eslint | style |  | 🛠️ | v0.7.0 |
| prefer-object-from-entries | unicorn | style |  | 🚧 | v0.16.12 |
| prefer-object-has-own | eslint | style |  | 🛠️ | v0.11.0 |
| prefer-object-spread | eslint | style |  | 🛠️ | v0.15.9 |
| prefer-optional-catch-binding | unicorn | style |  | 🛠️ | v0.0.17 |
| prefer-optional-chain 💭 | typescript | nursery |  | ⚠️ 🛠 💡 | v1.39.0 |
| prefer-promise-reject-errors | eslint | style |  |  | v0.15.7 |
| prefer-promise-reject-errors 💭 | typescript | pedantic |  |  | v1.12.0 |
| prefer-prototype-methods | unicorn | pedantic |  | 🛠️ | v0.0.21 |
| prefer-query-selector | unicorn | pedantic |  | 🛠️ | v0.0.15 |
| prefer-readonly 💭 | typescript | style |  |  | v0.0.8 |
| prefer-readonly-parameter-types 💭 | typescript | pedantic |  |  | v1.49.0 |
| prefer-reduce-type-parameter 💭 | typescript | style |  | 🛠️ | v1.12.0 |
| prefer-reflect-apply | unicorn | style |  | 💡 | v0.0.19 |
| prefer-regex-literals | eslint | style |  | 🚧 | v1.64.0 |
| prefer-regexp-exec 💭 | typescript | style |  |  | v1.49.0 |
| prefer-regexp-test | unicorn | pedantic |  | 🛠️ | v0.0.16 |
| prefer-response-static-json | unicorn | style |  | 💡 | v1.29.0 |
| prefer-rest-params | eslint | style |  |  | v0.15.4 |
| prefer-return-this-type 💭 | typescript | style |  | 🛠️ | v1.12.0 |
| prefer-set-has | unicorn | perf |  | ⚠️ 🛠️ | v0.13.2 |
| prefer-set-size | unicorn | correctness | ✅ | 🛠️ | v0.0.19 |
| prefer-single-call | unicorn | pedantic |  | 🛠️ | v1.70.0 |
| prefer-snapshot-hint | jest | correctness |  |  | v1.59.0 |
| prefer-snapshot-hint | vitest | correctness |  |  | v1.59.0 |
| prefer-spread | eslint | style |  |  | v0.0.17 |
| prefer-spread | unicorn | style |  | 🛠️ | v0.0.17 |
| prefer-spy-on | jest | style |  | 💡 | v0.2.14 |
| prefer-spy-on | vitest | style |  | 💡 | v0.2.14 |
| prefer-strict-boolean-matchers | vitest | style |  | 🛠️ | v1.57.0 |
| prefer-strict-equal | jest | style |  | 🛠️ | v0.2.13 |
| prefer-strict-equal | vitest | style |  | 🛠️ | v0.2.13 |
| prefer-string-raw | unicorn | style |  | 🛠️ | v0.12.0 |
| prefer-string-replace-all | unicorn | pedantic |  | 🛠️ | v0.0.18 |
| prefer-string-slice | unicorn | pedantic |  | 🛠️ | v0.0.18 |
| prefer-string-starts-ends-with 💭 | typescript | style | ✅ |  | v0.0.8 |
| prefer-string-starts-ends-with | unicorn | correctness | ✅ | 🛠️ | v0.0.18 |
| prefer-string-trim-start-end | unicorn | style |  | 🛠️ | v0.0.16 |
| prefer-structured-clone | unicorn | style |  | 💡 | v0.9.0 |
| prefer-tag-over-role | jsx-a11y | correctness |  |  | v0.1.1 |
| prefer-template | eslint | style |  | 🛠️ | v1.12.0 |
| prefer-ternary | unicorn | style |  | 🚧 | v1.50.0 |
| prefer-to-be | jest | style |  | 🛠️ | v0.2.14 |
| prefer-to-be | vitest | style |  | 🛠️ | v0.2.14 |
| prefer-to-be-falsy | vitest | style |  | 🛠️ | v0.7.1 |
| prefer-to-be-object | vitest | style |  | 🛠️ | v0.9.2 |
| prefer-to-be-truthy | vitest | style |  | 🛠️ | v0.7.1 |
| prefer-to-contain | jest | style |  | 🛠️ | v0.2.14 |
| prefer-to-contain | vitest | style |  | 🛠️ | v0.2.14 |
| prefer-to-have-been-called | jest | style |  | 🛠️ | v1.34.0 |
| prefer-to-have-been-called-times | jest | style |  | 🛠️ | v1.34.0 |
| prefer-to-have-been-called-times | vitest | style |  | 🛠️ | v1.34.0 |
| prefer-to-have-length | jest | style |  | 🛠️ | v0.2.13 |
| prefer-to-have-length | vitest | style |  | 🛠️ | v0.2.13 |
| prefer-todo | jest | style |  | 🛠️ | v0.0.16 |
| prefer-todo | vitest | style |  | 🛠️ | v0.0.16 |
| prefer-top-level-await | unicorn | pedantic |  | 🚧 | v1.20.0 |
| prefer-ts-expect-error | typescript | pedantic |  | 🛠️ | v0.2.11 |
| prefer-type-error | unicorn | pedantic |  | 🛠️ | v0.0.16 |
| preserve-caught-error | eslint | suspicious |  | 🛠️ | v1.16.0 |
| promise-function-async 💭 | typescript | restriction |  | 🛠️ | v1.12.0 |
| prop-name-casing | vue | style |  |  | v1.69.0 |
| radix | eslint | pedantic |  | ⚠️ 🛠️ | v0.3.3 |
| react-compiler | react | nursery |  |  | v1.70.0 |
| react-in-jsx-scope | react | suspicious |  |  | v0.0.20 |
| related-getter-setter-pairs 💭 | typescript | pedantic |  |  | v1.12.0 |
| relative-url-style | unicorn | style |  | 🛠️ 💡 | v1.44.0 |
| require-array-join-separator | unicorn | style |  | 🛠️ | v0.0.19 |
| require-array-sort-compare 💭 | typescript | correctness | ✅ |  | v1.12.0 |
| require-await | eslint | pedantic |  | ⚠️ 🛠️ | v0.4.2 |
| require-await 💭 | typescript | pedantic |  | 💡 | v1.12.0 |
| require-awaited-expect-poll | vitest | correctness |  |  | v1.58.0 |
| require-default-export | vue | suspicious |  |  | v1.21.0 |
| require-default-prop | vue | style |  |  | v1.70.0 |
| require-direct-export | vue | style |  |  | v1.69.0 |
| require-hook | jest | style |  |  | v0.3.2 |
| require-hook | vitest | style |  |  | v0.3.2 |
| require-local-test-context-for-concurrent-snapshots | vitest | correctness |  |  | v0.8.0 |
| require-mock-type-parameters | vitest | correctness |  |  | v1.58.0 |
| require-module-attributes | unicorn | style |  | 💡 | v1.35.0 |
| require-module-specifiers | unicorn | suspicious |  | 🛠️ | v1.20.0 |
| require-number-to-fixed-digits-argument | unicorn | pedantic |  | 🛠️ | v0.0.15 |
| require-param | jsdoc | pedantic |  | 🚧 | v0.4.3 |
| require-param-description | jsdoc | pedantic |  | 🚧 | v0.4.4 |
| require-param-name | jsdoc | pedantic |  |  | v0.4.3 |
| require-param-type | jsdoc | pedantic |  | 🛠️ | v0.4.4 |
| require-post-message-target-origin | unicorn | suspicious |  | 💡 | v0.15.15 |
| require-prop-type-constructor | vue | correctness |  | 🛠️ | v1.68.0 |
| require-prop-types | vue | style |  |  | v1.69.0 |
| require-property | jsdoc | correctness |  | 🚧 | v0.2.18 |
| require-property-description | jsdoc | correctness |  |  | v0.2.18 |
| require-property-name | jsdoc | correctness |  |  | v0.2.18 |
| require-property-type | jsdoc | correctness |  |  | v0.2.18 |
| require-render-return | react | nursery |  |  | v0.2.0 |
| require-render-return | vue | correctness |  |  | v1.67.0 |
| require-returns | jsdoc | pedantic |  | 🚧 | v0.4.0 |
| require-returns-description | jsdoc | pedantic |  |  | v0.4.0 |
| require-returns-type | jsdoc | pedantic |  |  | v0.4.3 |
| require-slots-as-functions | vue | correctness |  |  | v1.67.0 |
| require-test-timeout | vitest | restriction |  |  | v1.58.0 |
| require-throws-description | jsdoc | style |  |  | v1.65.0 |
| require-throws-type | jsdoc | pedantic |  |  | v1.65.0 |
| require-to-throw-message | jest | correctness |  |  | v0.2.9 |
| require-to-throw-message | vitest | correctness |  |  | v0.2.9 |
| require-top-level-describe | jest | style |  |  | v0.4.2 |
| require-top-level-describe | vitest | style |  |  | v0.4.2 |
| require-typed-ref | vue | style |  |  | v1.17.0 |
| require-unicode-regexp | eslint | pedantic |  | 🚧 | v1.63.0 |
| require-yield | eslint | correctness | ✅ |  | v0.0.4 |
| require-yields | jsdoc | correctness |  |  | v0.3.2 |
| require-yields-description | jsdoc | style |  |  | v1.68.0 |
| require-yields-type | jsdoc | pedantic |  |  | v1.65.0 |
| restrict-plus-operands 💭 | typescript | pedantic |  |  | v1.12.0 |
| restrict-template-expressions 💭 | typescript | correctness | ✅ |  | v1.12.0 |
| return-await 💭 | typescript | pedantic |  | 🛠️ 💡 | v1.12.0 |
| return-in-computed-property | vue | correctness |  |  | v1.63.0 |
| return-in-emits-validator | vue | correctness |  |  | v1.67.0 |
| role-has-required-aria-props | jsx-a11y | correctness |  |  | v0.2.0 |
| role-supports-aria-props | jsx-a11y | correctness |  |  | v0.2.0 |
| rules-of-hooks | react | pedantic |  |  | v0.3.3 |
| scope | jsx-a11y | correctness |  | 🛠️ | v0.0.19 |
| self-closing-comp | react | style |  | 🛠️ | v0.9.3 |
| sort-imports | eslint | style |  | 🛠️ | v0.4.4 |
| sort-keys | eslint | style |  | 🛠️ | v0.9.4 |
| sort-vars | eslint | pedantic |  | 🛠️ | v0.9.3 |
| spec-only | promise | restriction |  |  | v0.9.2 |
| state-in-constructor | react | style |  |  | v1.26.0 |
| strict-boolean-expressions 💭 | typescript | pedantic |  | 🚧 | v1.25.0 |
| strict-void-return 💭 | typescript | pedantic |  |  | v0.0.8 |
| style-prop-object | react | suspicious |  |  | v0.11.0 |
| switch-case-braces | unicorn | style |  | 🛠️ | v0.0.15 |
| switch-case-break-position | unicorn | style |  | 🚧 | v1.59.0 |
| switch-exhaustiveness-check 💭 | typescript | pedantic |  | 💡 | v1.12.0 |
| symbol-description | eslint | pedantic |  |  | v0.4.0 |
| tabindex-no-positive | jsx-a11y | correctness |  | ⚠️ 💡 | v0.0.21 |
| text-encoding-identifier-case | unicorn | style |  | 🛠️ | v0.0.15 |
| throw-new-error | unicorn | style |  | 🛠️ | v0.0.14 |
| triple-slash-reference | typescript | correctness | ✅ |  | v0.2.0 |
| unambiguous | import | restriction |  |  | v0.11.1 |
| unbound-method 💭 | typescript | correctness | ✅ |  | v1.12.0 |
| unicode-bom | eslint | restriction |  | 🛠️ | v0.3.3 |
| unified-signatures | typescript | style |  |  | v1.48.0 |
| uninvoked-array-callback | oxc | correctness | ✅ |  | v0.0.3 |
| use-isnan | eslint | correctness | ✅ | 🛠️ | v0.0.3 |
| use-unknown-in-catch-callback-variable 💭 | typescript | restriction |  | 💡 | v1.12.0 |
| valid-define-emits | vue | correctness |  | 🚧 | v1.14.0 |
| valid-define-options | vue | correctness |  |  | v1.67.0 |
| valid-define-props | vue | correctness |  | 🚧 | v1.15.0 |
| valid-describe-callback | jest | correctness |  |  | v0.0.8 |
| valid-describe-callback | vitest | correctness |  |  | v0.0.8 |
| valid-expect | jest | correctness |  | 💡 | v0.0.14 |
| valid-expect | vitest | correctness |  | 💡 | v0.0.14 |
| valid-expect-in-promise | jest | correctness |  |  | v1.60.0 |
| valid-expect-in-promise | vitest | correctness |  |  | v1.60.0 |
| valid-next-tick | vue | correctness |  | 🛠️ | v1.67.0 |
| valid-params | promise | correctness |  |  | v0.7.1 |
| valid-title | jest | correctness |  | 🛠️ | v0.0.14 |
| valid-title | vitest | correctness |  | 🛠️ | v0.0.14 |
| valid-typeof | eslint | correctness | ✅ | 🛠️ | v0.0.3 |
| vars-on-top | eslint | style |  |  | v0.15.4 |
| void-dom-elements-no-children | react | correctness |  |  | v0.2.11 |
| warn-todo | vitest | correctness |  |  | v1.37.0 |
| yoda | eslint | style |  | 🛠️ | v0.14.1 |