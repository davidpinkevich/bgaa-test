import { FC } from "react";
import { TCard } from "../../types";
import ItemHeader from "./ItemHeader/ItemHeader";
import ItemBody from "./ItemTable/ItemTable";
import "./Item.scss";

const Item: FC<TCard> = (props) => {
  return (
    <div className="cards__item card">
      <ItemHeader id={props.uniqueId} />
      <ItemBody id={props.uniqueId} />
    </div>
  );
};

export default Item;
