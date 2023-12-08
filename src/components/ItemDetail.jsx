
import { ItemCounter } from "./ItemCounter";


export const ItemDetail = ({ item }) => {
   
    const add =() => {
       onAdd(item);
    }
  return (
    <>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} width={400}/>
      <ItemCounter onAdd={add}/>
    </>
  );
};
