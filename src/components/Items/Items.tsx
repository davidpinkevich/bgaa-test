import { useAppSelector } from "../../hooks";
import ButtonSave from "../buttons/ButtonSave/ButtonSave";
import Item from "../Item/Item";
import "./Items.scss";

const Items = () => {
  const state = useAppSelector((state) => state.cardsReducer);

  return (
    <div className="cards">
      {state.cards.map((elem) => {
        return <Item key={elem.uniqueId} {...elem} teachers={state.teachers} />;
      })}
      <ButtonSave />
    </div>
  );
};

export default Items;
