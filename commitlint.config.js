const types = require('./config/commit-prompt.config').keys;


module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        "type-enum": [2, "always", types],
        "scope-case": [0],
        "header-max-length": [2, "always", 100]
    },
};

