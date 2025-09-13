import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { MoreVertical } from "lucide-react";

export function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  // klik di luar = close menu
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // calculate position
  useEffect(() => {
    if (open && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const menuHeight = 120; // approximate height
      const menuWidth = 160; // w-40 = 10rem = 160px
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      let top = buttonRect.bottom;
      let left = buttonRect.left;

      // Check if space below
      if (top + menuHeight > viewportHeight) {
        // Position above
        top = buttonRect.top - menuHeight;
      }

      // Adjust left to prevent overflow
      if (left + menuWidth > viewportWidth) {
        left = viewportWidth - menuWidth - 10; // 10px margin
      }
      if (left < 0) {
        left = 10;
      }

      setDropdownStyle({
        top: `${top}px`,
        left: `${left}px`,
        position: 'fixed',
        zIndex: 9999
      });
    }
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      {/* tombol titik 3 */}
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full text-gray-600 hover:bg-gray-100"
      >
        <MoreVertical className="text-xl" />
      </button>

      {/* dropdown */}
      {open && ReactDOM.createPortal(
        <div
          ref={dropdownRef}
          className="w-40 bg-white border rounded-lg shadow-lg max-w-xs break-words"
          style={dropdownStyle}
        >
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Delete
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Edit
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            View Detail
          </button>
        </div>,
        document.body
      )}
    </div>
  );
}
