import { useAppSelector } from "../../hooks";
import ButtonSave from "../buttons/ButtonSave/ButtonSave";
import Item from "../Item/Item";
import "./Items.scss";

const Items = () => {
  const items = useAppSelector((state) => state.cardsReducer.cards);

  return (
    <div className="cards">
      {items.map((elem) => {
        return <Item key={elem.uniqueId} {...elem} />;
      })}
      <ButtonSave />
    </div>
  );
};

export default Items;
