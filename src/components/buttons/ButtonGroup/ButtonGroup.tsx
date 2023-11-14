import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import plus from "../../../assets/icons/plus.svg";
import { addNewGroup } from "../../../redux/slices";
import "./ButtonGroup.scss";

const ButtonGroup: FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.cardsReducer.cards);
  console.log(data);
  const handlerButton = () => {
    dispatch(addNewGroup(id));
  };
  return (
    <button onClick={handlerButton} className="table__header-teachers-btn">
      <img src={plus} alt="plus" />
    </button>
  );
};

export default ButtonGroup;
