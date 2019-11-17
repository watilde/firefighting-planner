module.exports = {
  hooks: {
    "pre-commit": "lint-staged",
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
    "pre-push": "npm run lint && npm run test:coverage"
  }
};
