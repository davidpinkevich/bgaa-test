import { ChangeEvent, FC } from "react";
import { changeInput } from "../../../redux/slices";
import { useAppDispatch } from "../../../hooks";
import "./ItemInput.scss";

const ItemInput: FC<{ id: string; value: string; numberGroup: number }> = ({
  id,
  value,
  numberGroup,
}) => {
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
