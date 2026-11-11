# Updating the Website

## Design/Big Features

The website is designed using Typescript, React, and Tailwind CSS. Our build
system is Vite. In order to deploy your new changes, run `pnpm run deploy`.
Make sure your changes are pushed to GitHub *prior* to running this command.

## Content

All text content for the site is located in `public/data` in markdown files. If
you would like to update the site, just update these files and the rest will
work as expected. The only exception to this is recruitment; to update the
timeline go to `src/components/apply/page.tsx`. I may change this to a separate
markdown file later (in which I'll remove this disclaimer), but it's simple
enough that I don't think it warrants standalone files for each subsection

Everything under `public/` is published as a static file, including files that
are not currently loaded by a page. Treat `public/data` as intentionally public:
do not put secrets or private information there, and use direct public URLs when
sharing content such as coffee-chat bios or blog posts.
