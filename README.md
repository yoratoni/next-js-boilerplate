# Next.js Boilerplate
A Next.js & EsLint boilerplate entirely configured to suit my standards.

Summary
-------
You can find here a list of the main features of this boilerplate:
- [Next.js](https://nextjs.org/) v14.
- [TypeScript](https://www.typescriptlang.org/) support.
- [TailwindCSS](https://tailwindcss.com/) support.
- [Iconify](https://iconify.design/) support.
- [EsLint](https://eslint.org/) support (already configured).
- Roboto Mono as a preset font so you don't have to configure Next.js with Tailwind CSS,
  just to change the font in `./renderer/lib/fonts/index.ts` if needed.
- Hooks:
    - `useInterval` - A custom hook for setting a loop with an interval in the frontend.
    - `useMousePosition` - A custom hook for tracking the mouse position in the frontend.

Here's the list of the main EsLint rules:
- **[ERROR]** UNIX linebreaks.
- **[ERROR]** Required semi-colons.
- **[WARN]** Recommended double quotes.
- **[WARN]** Two new lines after imports.
- **[WARN]** No unused variables.
- **[WARN]** EsLint sorted imports (auto-sorted with VSCode).
