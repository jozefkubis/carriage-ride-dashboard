import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-8 shadow-lg transition-all duration-500 dark:bg-gray-700">
        {/* Close Button */}
        <button
          className="absolute right-5 top-3 rounded-sm p-2 transition-all duration-200 hover:bg-gray-200"
          onClick={onClose}
        >
          <IoCloseOutline className="text-primary-200 h-6 w-6" />
        </button>
        <div>{children}</div>
      </div>
    </>,
    document.body,
  );
}
