# AI UI Showcase

A Next.js application designed to showcase generative UI components with full fidelity code, live previews, and dynamic management features.

## Features

-   **Dynamic Snippet Management**: Add and delete custom HTML/CSS snippets directly from the UI.
-   **Live Preview**: Real-time rendering of code snippets using an isolated iframe renderer.
-   **Responsive Design**: Fully responsive grid layout and modals using Tailwind CSS.
-   **Smooth Animations**: Powered by `framer-motion` for shared layout transitions and modal effects.
-   **Local Persistence**: Custom snippets are saved to your browser's local storage.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Adding a Snippet
1.  Click the **+** button in the header.
2.  Enter a title and category.
3.  Paste your HTML/CSS code.
4.  Observe the live preview and click **Save**.

### Deleting a Snippet
1.  Click on any snippet card to open the **Expanded View**.
2.  Click the **Trash** icon in the top right.
3.  Confirm the deletion in the modal.

## Walkthrough
For a visual guide of the features, see [WALKTHROUGH.md](WALKTHROUGH.md).

## Tech Stack
-   **Framework**: Next.js 14 (App Router)
-   **Styling**: Tailwind CSS
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
