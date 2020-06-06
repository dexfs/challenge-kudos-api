module.exports = {
  clearMocks: true,

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['/node_modules/'],

  // The root directory that Jest should scan for tests and modules within
  rootDir: './src',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  testPathIgnorePatterns: ['/node_modules/'],

  // A map from regular expressions to paths to transformers
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['/node_modules/'],
};
