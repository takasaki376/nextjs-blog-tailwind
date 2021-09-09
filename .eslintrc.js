module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["."],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: ["tsconfig.json"],
  }, 
  plugins: ["simple-import-sort", "tailwindcss"],
  rules: {
    "no-restricted-imports": [
      "error",
      { paths: [{ name: "react", importNames: ["default"] }] },
    ],
    "no-restricted-syntax": [
      "error",
      { selector: "TSEnumDeclaration", message: "Don't declare enums" },
      {
        selector: "TSInterfaceDeclaration",
        message: "Don't declare Interface",
      },
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "ForOfStatement",
        message:
          "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "prefer-template": "error",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "react/destructuring-assignment": ["error", "never"],
    "react/jsx-pascal-case":["error" , {allowNamespace : true}],
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/no-var-requires": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/consistent-type-imports": ["warn",{ prefer: "type-imports" },],
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      // { selector: "variable",modifiers: "const",format: ["PascalCase", "camelCase"] },
      { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
      { selector: ["property", "parameterProperty", "method"],format: ["camelCase"] },
      { 
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "has", "should"],
        filter: { regex: "^_", match: false }, 
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    // "jsx-a11y/alt-text": "OFF",
    // "tailwindcss/classnames-order": "warn",
    // "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "error",
  },
  overrides: [
    {
      files: ["src/pages/**/*.page.tsx", "src/pages/**/**/*.page.tsx","src/pages/**/**/*.page.ts"],
      rules: { "import/no-default-export": "off" },
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
};
