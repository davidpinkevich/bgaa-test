import { FC, memo } from "react";
import { TCard } from "../../types";
import ItemHeader from "./ItemHeader/ItemHeader";
import ItemBody from "./ItemTable/ItemTable";
import "./Item.scss";

const Item: FC<TCard> = memo((props) => {
  return (
    <div className="cards__item card">
      <ItemHeader item={props} />
      <ItemBody item={props} />
    </div>
  );
});

export default Item;
