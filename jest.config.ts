import type { Config } from 'jest';

const config: Config = {
  modulePaths: ['<rootDir>'],
  rootDir: '.',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  collectCoverageFrom: ['src/**/ts', '!main.ts'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/node_modules'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleDirectories: ['node_modules'],
};

export default config;
