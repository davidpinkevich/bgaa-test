import { useAppSelector } from "../../hooks";
import Item from "../Item/Item";
import "./Items.scss";

const Items = () => {
  const items = useAppSelector((state) => state.cardsReducer.cards);

  return (
    <div className="cards">
      {items.map((elem) => {
        return <Item key={elem.uniqueId} {...elem} />;
      })}
    </div>
  );
};

export default Items;
