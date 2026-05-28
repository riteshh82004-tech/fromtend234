# Agarwal Electropower Pvt. Ltd. — Frontend

Corporate website for a Jaipur-based power tools & electrical distribution company, with an on-site **Assistant Accountant** internship program and frontend-only certificate verification.

## Company (hardcoded)

See [`src/data/company.ts`](src/data/company.ts):

- **Agarwal Electropower Pvt. Ltd.**
- Director: Vijay Agarwal
- Address: G1-2333, Ramchandrapura Industrial Area, Sitapura Extension, Jaipur - 303905
- GSTIN: `08AALCA5492L1Z2`
- Website: https://agarwalelectropower.com

## Tech Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 + DaisyUI
- React Router DOM
- qrcode.react

## Getting Started

```bash
npm install
npm run dev
```

## Pages

| Route | Description |
| ----- | ----------- |
| `/` | Home |
| `/about` | About Company |
| `/products` | Power tools catalog |
| `/internship` | Internship Program |
| `/internship/apply` | Application form |
| `/verify` | Certificate Verification lookup |
| `/verify/:id` | Certificate detail (e.g. `SPT2026001`) |
| `/contact` | Contact |

## Certificate data

Intern records: [`src/data/interns.js`](src/data/interns.js)  
Assets: [`src/assets/interns/`](src/assets/interns/)
