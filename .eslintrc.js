module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // References

    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],

    // Objects

    'no-new-object': ['error'],
    /* expects that the shorthand will be used whenever possible */
    'object-shorthand': ['error', 'always'],
    /* disallows quotes around object literal property names that are not strictly required */
    'quote-props': ['error', 'as-needed'],
    /* disallow use of Object.prototypes builtins directly */
    'no-prototype-builtins': ['error'],

    // Arrays

    'no-array-constructor': ['error'],

    // String
    quotes: ['error', 'single'],
    /* suggest using template literals instead of string concatenation */
    'prefer-template': ['error'],

    // Functions

    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'no-new-func': ['error'],
    /* require or disallow named function expressions */
    'func-names': ['error', 'always'],
    /* require a space before function parenthesis */
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    /* require Space Before Blocks */
    'space-before-blocks': ['error', 'always'],
    /* disallow Reassignment of Function Parameters */
    'no-param-reassign': ['error'],

    // Arrow Functions

    'prefer-arrow-callback': ['error'],
    /* require space before/after arrow function’s arrow */
    'arrow-spacing': ['error', { before: true, after: true }],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],

    // Modules

    'no-duplicate-imports': ['error', { includeExports: true }],

    // Iterators and Generators

    'generator-star-spacing': ['error', { before: false, after: true }],

    // Variables

    'no-multi-assign': ['error'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    /* require Variable Declarations to be at the top of their scope */
    'vars-on-top': ['error'],
    /* require initialization in variable declarations */
    'init-declarations': ['error', 'always'],

    // Comparison Operators & Equality

    /* use shortcuts for booleans, but explicit comparisons for strings and numbers */
    eqeqeq: ['error', 'always'],
    'no-nested-ternary': ['error'],
    'no-unneeded-ternary': ['error'],
    /* enclosing complex expressions by parentheses clarifies the developer’s intention, which makes the code more readable */
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],

    // Blocks

    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-else-return': ['error', { allowElseIf: false }],

    // Control Statements

    /* require Default Case in Switch Statements */
    'default-case': ['error'],

    // Comments

    /* enforce capitalization of the first letter of a comment */
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: 'pragma|ignored',
        ignoreInlineComments: true,
      },
    ],
    /* requires a whitespace (space or tab) beginning a comment */
    'spaced-comment': ['error', 'always'],
    /* enforce position of line comments */
    'line-comment-position': ['error', { position: 'above' }],
    /* enforce position of line comments */
    'multiline-comment-style': ['error', 'starred-block'],
    /* disallow inline comments after code */
    'no-inline-comments': ['error'],

    // Whitespace

    indent: ['error', 2],
    'space-before-blocks': ['error', 'always'],
    /* enforce consistent spacing before and after keywords */
    'keyword-spacing': ['error'],
    'space-infix-ops': ['error', { int32Hint: true }],
    'eol-last': ['error'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    /* disallow whitespace before properties */
    'no-whitespace-before-property': ['error'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    /* enforce a maximum line length */
    'max-len': [
      'error',
      {
        code: 80,
        comments: 80,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    /* disallow spaces inside of blocks after opening block and before closing block */
    'block-spacing': ['error', 'never'],
    /* enforces spacing around commas */
    'comma-spacing': ['error', { before: false, after: true }],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error', { beforeColon: false }],
    'no-trailing-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'rest-spread-spacing': ['error', 'never'],

    // Commas

    'comma-style': ['error', 'last'],
    /* disallows trailing commas */
    'comma-dangle': ['error', 'never'],

    // Semi

    semi: ['error', 'always'],

    // Naming Conventions

    camelcase: ['error'],
    /* require constructor names to begin with a capital letter */
    'new-cap': ['error'],

    'no-console': ['off'],
  },
};
