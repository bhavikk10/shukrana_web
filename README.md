# Shukrana Web

A luxury ethnicwear e-commerce website built as a **real freelance client project** for Shukrana, a heritage-inspired Indian fashion brand.

The public version of this repository uses stock/demo product content and placeholder imagery for client privacy, while preserving the actual structure, UI direction, shopping flow, and technical implementation of the live project.

**Live Demo:** https://shukrana-web.vercel.app/

---

## Overview

Shukrana Web is a premium fashion storefront designed for a luxury Indian ethnicwear brand. The website focuses on handcrafted traditional wear, curated couture collections, exhibitions, brand storytelling, and an elegant shopping experience.

The project was built to feel closer to a high-end fashion house website than a generic e-commerce template. It uses editorial layouts, heritage-inspired visuals, animated transitions, responsive navigation, product filtering, and checkout flows for different product availability states.

---

## Project Context

This project was developed as a freelance website for a real brand.

For confidentiality and privacy reasons, the public demo version uses:

* Placeholder product data
* Demo pricing
* Stock/AI-generated visual content
* Sanitized brand and product content where required

The implementation still demonstrates the actual user experience, page structure, frontend architecture, responsive design approach, and commerce flow built for the project.

---

## Key Features

### Luxury E-commerce Interface

* Premium fashion storefront design
* Editorial landing page
* Heritage-inspired visual identity
* Burgundy, gold, ivory, and silk-texture design language
* Animated hero sections and page transitions
* Responsive desktop and mobile experience

### Collections Page

* Product listing grid
* Multi-category filtering
* Filters by:

  * Occasion
  * Silhouette
  * Fabric
  * Color palette
  * Craft / embroidery style
  * Price tier
  * Availability
* Responsive mobile filter panel
* Adjustable product grid layout

### Product Detail Pages

* Dynamic product pages using URL slugs
* Product image gallery
* Thumbnail-based image switching
* Size selection
* Product descriptions
* Expandable product information sections
* Different flows based on product availability:

  * In Stock
  * Pre-Book
  * Custom

### Checkout Flow

* Stripe Checkout integration
* Full payment flow for in-stock products
* 50% deposit flow for pre-booked products
* WhatsApp consultation flow for custom pieces

### Brand Storytelling

* Dedicated About page
* Editorial brand narrative
* Heritage, craftsmanship, artisanship, and diaspora-focused positioning
* Founder-style storytelling section

### Exhibitions and Showcases

* Dedicated exhibitions/trunk-show page
* Event-style luxury showcase layout
* Editorial visuals for upcoming showcases and archive-style sections

### Responsive Navigation

* Animated sticky header
* Scroll-aware navigation behavior
* Mobile bottom navigation
* Floating WhatsApp contact button
* Active route highlighting

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Motion
* Lucide React
* React Helmet Async

### Backend

* Node.js
* Express
* Stripe API
* CORS
* dotenv

### Tooling

* npm
* TypeScript
* Vite
* tsx

---

## Project Structure

```txt
shukrana_web/
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── GoldDust.tsx
│   │   ├── SmoothCarousel.tsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Collections.tsx
│   │   ├── Product.tsx
│   │   ├── Exhibitions.tsx
│   │   ├── About.tsx
│   │   ├── Success.tsx
│   │   └── DesignShowcase.tsx
│   │
│   ├── data/
│   │   └── products.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── public/
│   └── assets/
│
├── server.ts
├── package.json
└── README.md
```

---

## Pages

| Route                | Description                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| `/`                  | Landing page with hero sections, featured collections, testimonials, and editorial storytelling |
| `/collections`       | Product collection page with filtering and responsive catalog layout                            |
| `/collections/:slug` | Dynamic product detail page with image gallery, size selection, and checkout actions            |
| `/exhibitions`       | Exhibitions and trunk-show style showcase page                                                  |
| `/about`             | Brand story, craft philosophy, and founder-style storytelling                                   |
| `/success`           | Post-checkout success page                                                                      |
| `/design-showcase`   | Design showcase / visual reference page                                                         |

---

## Local Setup

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

---

### Installation

Clone the repository:

```bash
git clone https://github.com/bhavikk10/shukrana_web.git
cd shukrana_web
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
STRIPE_SECRET_KEY=your_stripe_secret_key
APP_URL=http://localhost:3000
```

### Required Variables

| Variable            | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `STRIPE_SECRET_KEY` | Stripe secret key used to create checkout sessions    |
| `APP_URL`           | Base URL used for Stripe success and cancel redirects |

---

## Running Locally

Start the development server:

```bash
npm run dev
```

The project runs on:

```txt
http://localhost:3000
```

---

## Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Starts the Express + Vite development server |
| `npm run build`   | Creates a production build                   |
| `npm run start`   | Runs the production server                   |
| `npm run preview` | Previews the Vite build                      |
| `npm run lint`    | Runs TypeScript checks                       |
| `npm run clean`   | Removes the production build folder          |

---

## API Routes

| Method | Route                          | Description                                  |
| ------ | ------------------------------ | -------------------------------------------- |
| `GET`  | `/api/health`                  | Health check endpoint                        |
| `POST` | `/api/create-checkout-session` | Creates a Stripe Checkout session            |
| `POST` | `/api/subscribe`               | Placeholder newsletter subscription endpoint |

---

## Stripe Checkout Flow

The product page sends selected product details to the backend, including name, price, image, quantity, and deposit status.

The Express backend creates a Stripe Checkout session and returns a hosted checkout URL. The frontend then redirects the customer to Stripe for payment.

Supported checkout flows:

* Full checkout for in-stock products
* 50% deposit checkout for pre-booked products
* WhatsApp consultation for custom products

---

## Product Data

The demo version uses a local TypeScript product data file.

Each product includes:

* Product ID
* Name
* Fabric
* Silhouette
* Occasion
* Price
* Availability status
* Product images
* Description
* Color
* Craft / embroidery type

This makes the project easy to demo publicly while keeping the real client catalog private.

---

## Design Direction

The visual system was designed around a luxury Indian couture aesthetic.

Key design elements include:

* Deep burgundy and antique gold palette
* Ivory/parchment backgrounds
* Mughal-inspired arches
* Jaali-style patterns
* Textile-inspired textures
* Editorial product sections
* Smooth motion effects
* Premium boutique-style spacing and typography

The goal was to create a storefront that feels premium, cultural, and story-driven while still supporting practical e-commerce flows.

---

## What I Worked On

* Frontend architecture
* Page routing
* Responsive UI design
* Product collection experience
* Product detail page flow
* Stripe checkout integration
* Express backend routes
* Visual design implementation
* Mobile navigation experience
* Demo-safe public version for portfolio use

---

## Future Improvements

* Connect real product catalog to a CMS or database
* Add admin dashboard for product management
* Add persistent cart
* Add customer authentication
* Add order history
* Add Stripe webhook handling
* Add real newsletter service integration
* Add search functionality
* Improve image optimization
* Add automated testing
* Add accessibility audit improvements
* Add deployment documentation for production hosting

---

## Screenshots

Add screenshots or GIFs here:

```md
![Home Page](./screenshots/home.png)
![Collections Page](./screenshots/collections.png)
![Product Page](./screenshots/product.png)
![Mobile View](./screenshots/mobile.png)
```

---

## Deployment

The public demo is deployed on Vercel:

https://shukrana-web.vercel.app/

Because the project includes backend routes for Stripe checkout, production deployment may require either:

* a Node-compatible hosting setup, or
* moving API logic to serverless functions depending on the deployment platform.

---

## Author

**Bhavik Malik**

* GitHub: [@bhavikk10](https://github.com/bhavikk10)
* Email: [bhavikmalik100706@gmail.com](mailto:bhavikmalik100706@gmail.com)

---

## Note

This repository is a public portfolio-safe version of a real freelance project. Demo assets and product content may differ from the final private/client version.
