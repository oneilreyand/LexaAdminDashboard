# TODO for Global OffCanvas with Redux

- [x] Create Redux action creators for OffCanvas open, close, toggle (src/store/action/offcanvas.js)
- [x] Create Redux reducer for OffCanvas state (src/store/reducer/offcanvas_reducer.js)
- [x] Add OffCanvas reducer to Redux store (src/store/index.js)
- [x] Update layout component to:
  - Use Redux state for OffCanvas open/close
  - Dispatch closeOffCanvas on OffCanvas close
  - Add OffCanvas component globally with position "right" and size "normal" (src/router/layout.jsx)
- [ ] Test global OffCanvas toggle functionality
- [x] Add UI controls to open/close OffCanvas (added toggle button in Header)
- [ ] Verify no ESLint errors remain
