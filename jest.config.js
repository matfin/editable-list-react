module.exports = {
  globals: {
    window: true
  },
  rootDir: '.',
  coverageDirectory: './coverage',
  setupFiles: ['./jestsetup.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^models/(.*)$': '<rootDir>/src/models/$1',
  },
  coveragePathIgnorePatterns: [
    'node_modules',
  ],
  moduleDirectories: ['node_modules', 'src']
};
