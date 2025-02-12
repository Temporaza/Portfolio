export default function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose} // Close when clicking outside the modal
      className={` ${open ? "visible" : "invisible"}`}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content"> {children}</div>
      </div>
    </div>
  );
}
