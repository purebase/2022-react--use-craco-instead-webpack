const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/")
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@src(.*)$": "<rootDir>/src$1",
        "^@components(.*)$": "<rootDir>/src/components$1"
      }
    }
  }
};