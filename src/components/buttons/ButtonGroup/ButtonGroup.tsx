import { FC } from "react";
import { useAppDispatch } from "../../../hooks";
import plus from "../../../assets/icons/plus.svg";
import { addNewGroup } from "../../../redux/slices";
import "./ButtonGroup.scss";

const ButtonGroup: FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
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
