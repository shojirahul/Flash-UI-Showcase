# Flash UI Showcase Walkthrough

This document outlines the key features and workflows of the AI UI Showcase application.

## 1. Add Snippet Feature

Users can dynamically add new UI snippets to the grid.

-   **Click the "+ Button"**: A floating action button in the header opens the "Add Snippet" modal.
-   **Live Preview**: As you type HTML in the code editor, the preview pane updates in real-time.
-   **Save**: Clicking save adds the new component to your local session.

![Add Snippet Modal](docs/assets/add_modal.png)
*Figure 1: The Add Snippet Modal with Live Preview.*

![Live Preview](docs/assets/live_preview.png)
*Figure 2: Real-time rendering of user input.*

## 2. Delete Snippet Feature

Snippets can be removed from the gallery.

-   **Open Detailed View**: Click any card to expand it.
-   **Click Trash Icon**: Located in the top-right corner of the expanded view.
-   **Confirmation**: A custom modal appears to prevent accidental deletions.

![Delete Confirmation](docs/assets/confirm_modal.png)
*Figure 3: Custom confirmation modal before deletion.*

## 3. Persistence

-   **Local Storage**: All added snippets are saved to your browser's `localStorage`.
-   **Reload Safe**: You can refresh the page, and your custom snippets will remain.
