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

#### Headless Mode (Ideal for CI/CD)
```bash
$ npm run test
```
<img width="472" alt="image" src="https://github.com/user-attachments/assets/042c2c98-7e41-4004-991a-cbaee69084f7">

<img width="462" alt="image" src="https://github.com/user-attachments/assets/3497a233-c13d-4e4a-8500-001a8b4a4408">


#### Headed Mode - Browser or Electron 
```bash
$ npm run cy:open
```
![Uploading image.png…]()

<img width="548" alt="image" src="https://github.com/user-attachments/assets/4d95cb71-7c96-4660-84f0-809c4ebccfdf">


### :nut_and_bolt: Dependencies

| Name                                                                               | License                                                                                                                           | Description                                                                                                            
| -- | -- | -- |
| [`NEXTjs`](https://nextjs.org/)                                                 | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/vercel/next.js/blob/canary/license.md)                     | A React framework for building full-stack web applications
| [`Cypress`](https://cypress.io/)  | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/develop/LICENSE)                     | Easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds|
 | [`TailwindCSS`](https://tailwindcss.com/)  | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)                     | A utility-first CSS framework for rapid UI development.|
  | [`Shadcn-UI`](https://ui.shadcn.com/)  | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)                     | Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.|E_R7P1EVHdgsB4orHxWGAOR9U8yLdONVNe1eS--XV0V7wee2PMwjCdKgS5SqFP-PAVAnPRDX-ctB9lkS?key=EPICO1nsF2BfAVl4JouOjA)

