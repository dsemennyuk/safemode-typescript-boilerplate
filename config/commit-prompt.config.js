const types = {
    wip: {
        description: "Work in progress (commit in the middle of the process)",
        emoji: "🚧",
        value: "wip"
    },
    feat: {
        description: "A new feature",
        emoji: "✨",
        value: "feat"
    },
    fix: {
        description: "A bug fix",
        emoji: "🐛",
        value: "fix"
    },
    design: {
        description: "Any visual change of the product, that is not a feature by it's own",
        emoji: "💄",
        value: "design"
    },
    perf: {
        description: "A code change that improves performance",
        emoji: "⚡️",
        value: "perf"
    },
    refactor: {
        description: "A code change that neither fixes a bug or adds a feature",
        emoji: "♻️",
        value: "refactor"
    },
    chore: {
        description: "Any other change in the product",
        emoji: "🤖",
        value: "chore"
    },
    test: {
        description: "Adding missing tests",
        emoji: "💍",
        value: "test"
    },
    docs: {
        description: "Documentation only changes",
        emoji: "📝",
        value: "docs"
    },
    release: {
        description: "Create a release commit",
        emoji: "🏹",
        value: "release"
    },
};

module.exports = {
    list: types.keys,
    maxMessageLength: 100,
    minMessageLength: 3,
    questions: [
        "type",
        "scope",
        "subject",
        "body",
        "breaking"
    ],
    types: types,
};

module.exports.keys = Object.keys(types);