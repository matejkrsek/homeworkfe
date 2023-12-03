import Uu5Elements from "uu5g05-elements";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <Uu5Elements.Modal open={isOpen} onClose={onClose} header="Delete Confirmation">
      <div>Are you sure you want to delete this list?</div>
      <div>
        <Uu5Elements.Button onClick={onConfirm}>Yes</Uu5Elements.Button>
        <Uu5Elements.Button onClick={onClose}>No</Uu5Elements.Button>
      </div>
    </Uu5Elements.Modal>
  );
}


export default DeleteConfirmationModal;