import { ChangeEvent, FC } from "react";
import { changeInput } from "../../../redux/slices";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import "./ItemInput.scss";

const ItemInput: FC<{ id: string; value: string; numberGroup: number }> = ({
  id,
  value,
  numberGroup,
}) => {
  const peks = useAppSelector((state) => state.cardsReducer.cards).find(
    (e) => e.uniqueId === id
  )?.podgroups;
  console.log("card", peks);
  const dispatch = useAppDispatch();
  const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeInput({
        id,
        numberGroup,
        value: event.target.value,
      })
    );
  };
  return (
    <div className="table__body-item-input">
      <input type="number" defaultValue={value} onBlur={handlerInput} />
    </div>
  );
};

export default ItemInput;
