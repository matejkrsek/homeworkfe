import { useState, Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import List from "./List";
import Config from "../config/config";

const INITIAL_SHOPPING_LISTS = [
  {
    id: Utils.String.generateId(),
    name: "Na pátek",
    owner: "Karel",
    items: [
      { name: "kečup", isResolved: false },
      { name: "chléb", isResolved: false },
      { name: "propiska", isResolved: false },
      { name: "pivo", isResolved: false },
    ],
  },

  {
    id: Utils.String.generateId(),
    name: "Sobotní oběd",
    owner: "Jan",
    items: [
      { name: "mouka", isResolved: false },
      { name: "pečivo", isResolved: false },
    ],
  },
  {
    id: Utils.String.generateId(),
    name: "Oslava narozenin tchána",
    owner: "Josef",
    items: [
      { name: "mouka", isResolved: false },
      { name: "čaj", isResolved: false },
    ],
  },
];

function ShoppingLists(props) {
  const [shoppingLists, setShoppingLists] = useState(INITIAL_SHOPPING_LISTS);

  function handleDelete(id) {
    const newShoppingLists = shoppingLists.filter((list) => list.id !== id);
    setShoppingLists(newShoppingLists);
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  function handleSubmit(e) {
    const data = e.data.value;
    const newItems = data.items.split(","); //rozdělí text input ITEMS na pole jednotlivých itemů

    const newList = { id: Utils.String.generateId(), name: data.name, owner: "User", items: [] };
    newItems.map((item) => newList.items.push({ name: item, isResolved: false }));

    // náhodný objev, kteýr dělá přesně to, co potřebuji. Ukládá nový seznam na stránku, tak jak potřebuji...
    const newShoppingLists = shoppingLists.push(newList);
    // setShoppingLists(newShoppingLists); NEFUNGUJE, NEVÍM PROČ
    setModalOpen(false);
  }

  // Pozor! onDelete ={ () => ...} musí se zapsat takto jako anymoní funkce, samotné handleDelete(list.id) nelze. (Proč?)
  return (
    <Uu5Elements.Block
      style={{ margin: 15 }}
      header="Shopping lists"
      headerType="title"
      actionList={[{ icon: "uugds-plus", onClick: () => setModalOpen(true) }]}
    >
      <Uu5Elements.Grid className={Config.Css.css({ width: 400, maxWidth: "100%" })}>
        {shoppingLists.map((list) => (
          <List key={list.id} {...list} onDelete={() => handleDelete(list.id)} />
        ))}
      </Uu5Elements.Grid>

      <Uu5Forms.Form.Provider key={modalOpen} onSubmit={handleSubmit}>
        <Uu5Elements.Modal
          // CREATE NEW LIST BUTTON
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          header="Create new list"
          footer={
            <div>
              <Uu5Forms.CancelButton />
              <Uu5Forms.SubmitButton />
            </div>
          }
        >
          <Uu5Forms.FormText name="name" label="Name" />
          <Uu5Forms.FormText name="items" label="Items" placeholder="item 1, item 2, item 3, ..." />
        </Uu5Elements.Modal>
      </Uu5Forms.Form.Provider>
    </Uu5Elements.Block>
  );
}

export default ShoppingLists;
