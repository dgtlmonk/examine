# Examine Page Collection Management

## Goal
- Enable users to bookmark and save any page across the platform for quick access
- Provide intuitive collection management to organize saved pages into custom categories
- Improve user experience through personalized content organization

### 🗃️ Structure
    .
    ├── app                           # Next.js application code
    │   ├── components                # App Components
    │   │   ├── ui                    # Shared UI Components (shadcn-ui)
    │   ├── hooks                     # Custom React hooks
    │   └── theme                     # Theme Style configuration
    ├── cypress                       # E2E Testing
    │   ├── e2e                       # Test specifications
    │   └── support                   # Test support files
    │   └── screenshots               # Test screenshots

### :wrench: Setup

Clone this repository, then install dependencies

```bash
$ npm install
```

###  🧪  E2E Testing (Cypress)

Headless Mode (Ideal for CI/CD)
```bash
$ npm run test
```

Headed Mode - Browser or Electron (preferred)
```bash
$ npm run cy:open
```

### :nut_and_bolt: Dependencies

| Name                                                                               | License                                                                                                                           | Description                                                                                                            
| -- | -- | -- |
| [`NEXTjs`](https://nextjs.org/)                                                 | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/vercel/next.js/blob/canary/license.md)                     | A React framework for building full-stack web applications
| [`Cypress`](https://cypress.io/)  | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/develop/LICENSE)                     | Easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds|
 | [`TailwindCSS`](https://tailwindcss.com/)  | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)                     | A utility-first CSS framework for rapid UI development.|
  | [`Shadcn-UI`](https://ui.shadcn.com/)  | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)                     | Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.|E_R7P1EVHdgsB4orHxWGAOR9U8yLdONVNe1eS--XV0V7wee2PMwjCdKgS5SqFP-PAVAnPRDX-ctB9lkS?key=EPICO1nsF2BfAVl4JouOjA)

