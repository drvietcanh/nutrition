Clinical Nutrition Education & Tools is a public-facing, educational web application built with [Next.js](https://nextjs.org) (App Router) and deployed on Vercel. It is designed to explain clinical nutrition concepts clearly and host interactive tools that **support** (but do not replace) clinical reasoning.

> **Medical use disclaimer:** This site is for education only. It does **not** provide medical advice, diagnosis, or treatment, does not create a clinician–patient relationship, and must not be used for clinical decision-making or emergency care.

## Target Users

- Clinicians
- Nurses
- Medical and health-professions students
- Educated public seeking to understand clinical nutrition (with appropriate disclaimers)

## Design Principles

1. **Education first, tools second** – core purpose is to teach clinical nutrition concepts clearly; tools exist to reinforce learning and reasoning.
2. **Session-based inputs only** – user inputs are handled per session with no patient or case data stored server-side by default.
3. **Serverless-first** – features are designed to run on Vercel’s serverless/edge runtime without long-running stateful services.
4. **Fast load, low complexity** – prioritize lightweight pages, minimal dependencies, and simple interaction patterns.
5. **Advisory language only** – all content and outputs are framed as educational and advisory, never as directives or prescriptions.
6. **Clear safety disclaimers everywhere** – visible disclaimers on all tools and educational content clarifying limits and appropriate use.

## Getting Started (Local Development)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the main landing page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Goals

- Provide structured clinical nutrition learning modules for trainees and clinicians.
- Offer interactive, serverless-friendly tools (e.g., nutrient calculators, diet recall helpers) with safe, non-identifying inputs.
- Follow best practices for public medical education sites (privacy, safety language, and clear scope limits).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
