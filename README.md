# SHOPPER — React E-Commerce SPA

A single-page e-commerce storefront built with React and React Router. Browse
products by category, view product details, add items to a cart, and sign up
/ log in — all running entirely in the browser (no backend required).

**Live demo:** _add your Vercel URL here after deploying_

## Features

- **Home page** — hero banner, "Popular in Women" and "New Collections"
  product rails, promotional offer banner, newsletter sign-up
- **Category pages** (`/mens`, `/women`, `/kids`) — category banner, sort by
  price (low→high / high→low), "Explore More" pagination
- **Product detail page** (`/product/:id`) — breadcrumb navigation, image
  gallery, size selector, star rating, description/reviews tabs, related
  products
- **Cart** (`/cart`) — quantity controls, per-item and order subtotal, promo
  code field, empty-cart state
- **Login / Sign up** (`/login`) — toggled single-page form with validation,
  session persisted across reloads
- **Persistent state** — cart contents and the logged-in user are saved to
  `localStorage`, so they survive a page refresh
- Fully responsive layout (desktop, tablet, mobile) with a collapsible
  mobile navigation menu

## Tech stack

- React 19 + React Router 7 (`react-router-dom`)
- Create React App (`react-scripts`) for build tooling
- Plain CSS (no UI framework) organized per-component
- Browser `localStorage` for cart and auth state — **no backend/database**

## Project structure

```
src/
  Assets/            product images + product data (all_product.js, data.js, new_collections.js)
  Components/        Navbar, Hero, Item, Popular, NewCollections, Offers,
                      NewsLetter, Footer, Breadcrums, ProductDisplay,
                      DescriptionBox, RelatedProducts, CartItems
  Context/           ShopContext.jsx — global cart + auth state
  Pages/             Shop, ShopCategory, Product, Cart, LoginSignup
  App.js             routes
```

## Getting started

```bash
npm install
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

Outputs a static, deployable bundle to `build/`.

### Run tests

```bash
npm test
```

## Deploying to Vercel

1. Push this project to a GitHub repository (see below).
2. Go to [vercel.com](https://vercel.com), click **New Project**, and import
   the repository.
3. Vercel auto-detects the Create React App preset — leave the build command
   (`npm run build`) and output directory (`build`) as-is, then click
   **Deploy**.
4. A `vercel.json` is included so that direct links to routes like `/mens`
   or `/product/3` load correctly instead of 404ing.

## Pushing to GitHub

From inside this folder:

```bash
git add .
git commit -m "Complete e-commerce SPA: cart, auth, product/category pages"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(A git repository is already initialized in this folder from
`create-react-app`, so you only need to add a remote and push.)

## Notes & limitations

- **Authentication is a frontend-only demo.** Sign-up/login is implemented
  with `localStorage` for demonstration purposes — passwords are stored in
  plain text in the browser and there is no server-side verification. Do
  not reuse a real password when testing this, and don't use this auth
  approach for a project handling real user data.
- **Checkout is not wired to a payment provider.** "Proceed to Checkout" and
  the promo code field are present in the UI but are not connected to a
  backend — there is no order processing.
- Product data lives in static JS files (`src/Assets/*.js`) rather than a
  database, so adding real inventory means editing those files directly.

If you outgrow these limitations, the natural next step is to add a small
backend (e.g. Node/Express + MongoDB) for real accounts, persistent orders,
and a database-backed product catalog.
