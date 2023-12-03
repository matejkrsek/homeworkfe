import { useRoute } from "uu5g05";

//ZATÍM NEFUNKČNÍ KOMPONENTA
const DetailedList = () => {
  const { params } = useRoute();
  const { id, name, owner, items } = params;



  return (
    <div>
      <h1>List Details</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Owner: {owner}</p>
      <p>Items: {items}</p>
    </div>
  );
};


export default DetailedList;