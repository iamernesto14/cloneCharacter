export default {
    // Use a transformer to handle ES modules
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    // Tell Jest to handle ES modules
    moduleFileExtensions: ['js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/test/**/*.test.js'],
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    // Setup files to run before tests
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };