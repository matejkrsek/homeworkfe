import Uu5Elements from "uu5g05-elements";
import { useState, useRoute } from "uu5g05";

import DeleteConfirmationModal from "./DeleteConfirmationModal";

function List(props) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [, setRoute] = useRoute();

  const handleDetail = (event) => {
    const isDeleteButton =
      event.target.tagName === "svg" &&
      (event.target.classList.contains("uu5-tile-action") ||
        event.target.parentNode.classList.contains("uu5-tile-action"));

    // když jsem nanpsal podmínku, docházelo k redirectu i při otevření delete modalu...
    if (!isDeleteButton && !deleteModalOpen) {
      setRoute(`/home/${props.id}`);
    }
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };
  const handleArchiveClick = () => {
    alert("Shopping list " +props.name+" byl archivován")
  };

  const handleDeleteConfirmation = () => {
    props.onDelete();
    setDeleteModalOpen(false);
  };

  
  return (
    <Uu5Elements.Tile
      style={{ padding: 5 }}
      onClick={handleDetail}
      actionList={[{ icon: "uugds-close", onClick: handleDeleteClick },{ icon: "uugds-favorites", onClick: handleArchiveClick }]}
    >
      <div style={{ color: "red", fontSize: "20px", textAlign: "center" }}>{props.name}</div>
      <div style={{ fontStyle: "italic", }}>
        Owner: {props.owner},<br></br> Items: {props.items.map((item) => item.name + ", ")}
        <br></br>
        Members: *users*
        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleDeleteConfirmation}
        />
      </div>
    </Uu5Elements.Tile>
  );
}

export default List;
