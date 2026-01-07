# Implement Code View & Copy

## Goal
Allow users to view the raw HTML/CSS/JS code of the selected snippet and copy it to their clipboard.

## Proposed Changes

### Components

#### [MODIFY] [ExpandedView.tsx](file:///c:/Users/shoji/.gemini/antigravity/playground/volatile-disk/src/components/ExpandedView.tsx)
-   **State**: Add `viewMode` state ('preview' | 'code').
-   **UI**:
    -   Add a toggle switch (Preview / Code) in the header.
    -   When in 'code' mode:
        -   Render a text area or styled `pre` block containing `snippet.html`.
        -   Add a "Copy Code" button with a success feedback state.
    -   Keep existing `IframeRenderer` for 'preview' mode.
-   **Icons**: Import `Code`, `Eye`, `Copy`, `Check` from `lucide-react`.

## Verification Plan

### Manual Verification
-   Open a snippet.
-   Click "Code" toggle.
-   Verify code is displayed and readable.
-   Click "Copy Code".
-   Verify "Copied!" feedback appears.
-   Paste into a text editor to verify clipboard content.
-   Switch back to "Preview" to verify iframe is restored.
