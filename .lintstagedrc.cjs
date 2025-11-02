const path = require('path');


// ✅ Builds the ESLint command dynamically for only staged files
const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

// ✅ Builds the Prettier command dynamically for only staged files
const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => `"${f}"`).join(' ')}`;

// ✅ Exports the lint-staged config
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
  '*.{md,json}': [buildPrettierCommand],
};
