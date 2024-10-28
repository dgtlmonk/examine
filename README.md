# Examine Page Collection Management

## Goal
- Enable users to bookmark and save any page across the platform for quick access
- Provide intuitive collection management to organize saved pages into custom categories
- Improve user experience through personalized content organization

### :wrench: Setup

Clone this repository, then install dependencies

```bash
$ npm install
```

### 🗃️ Structure
    .
    ├── app                           # Next.js application code
    │   ├── components                # App Components
    │   │   ├── ui                    # Shared UI Components (shadcn-ui)
    │   ├── hooks                     # Custom React hooks
    │   └── theme                     # Theme Style configuration
    ├── cypress                       # E2E Testing
    │   ├── e2e                       # Test specifications
    │   └── support                  
    │   │   ├── commands.ts           # Cypress Custom Commands
    │   └── screenshots               # Test screenshots

## :boom: Key Features

### Mobile-first Design
<img width="181" alt="image" src="https://github.com/user-attachments/assets/7cfe1de4-b597-4ce7-ad13-03870121031f">
<img width="181" alt="image" src="https://github.com/user-attachments/assets/4be8bc34-f187-4743-914c-94dc1ee4f2d0">
<img width="181" alt="image" src="https://github.com/user-attachments/assets/f37ac1af-5271-474f-b7c7-008b9addfd8c">
<img width="181" alt="image" src="https://github.com/user-attachments/assets/709d9fa1-e56e-47df-b52f-b2c2b3c577f9">
<img width="181" alt="image" src="https://github.com/user-attachments/assets/11ee5708-47ce-4c59-a6e7-f85bdd4b0326">



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
<img width="548" alt="image" src="https://github.com/user-attachments/assets/4d95cb71-7c96-4660-84f0-809c4ebccfdf">

#### Test Screenshots (Ideal for regression tests)
Run tests to generate screenshot inside `/cypress/screenshots` folder

<img width="253" alt="image" src="https://github.com/user-attachments/assets/9551b3d2-3982-4db0-a907-2df49dc3df2a">

### :art: Bonus Feature (PR)
Branch `feat/save-to-new-collection`

[Create New Collection and Save Page in One Step](https://github.com/dgtlmonk/examine/pull/1)



---

### :nut_and_bolt: Dependencies

| Name                                                                               | License                                                                                                                           | Description                                                                                                            
| -- | -- | -- |
| [`NEXTjs`](https://nextjs.org/)                                                 | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/vercel/next.js/blob/canary/license.md)                     | A React framework for building full-stack web applications
| [`Cypress`](https://cypress.io/)  | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/develop/LICENSE)                     | Easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds|
 | [`TailwindCSS`](https://tailwindcss.com/)  | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)                     | A utility-first CSS framework for rapid UI development.|
  | [`Shadcn-UI`](https://ui.shadcn.com/)  | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)                     | Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.|E_R7P1EVHdgsB4orHxWGAOR9U8yLdONVNe1eS--XV0V7wee2PMwjCdKgS5SqFP-PAVAnPRDX-ctB9lkS?key=EPICO1nsF2BfAVl4JouOjA)

