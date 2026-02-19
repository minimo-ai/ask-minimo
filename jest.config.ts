import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ["node_modules/(?!(uuid)/)"],
  collectCoverageFrom: ["lib/**/*.ts", "app/api/**/*.ts", "!**/*.d.ts"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
    },
  },
};

export default config;
