import { FC } from "react";
import { useAppDispatch } from "../../../hooks";
import { deleteGroup } from "../../../redux/slices";
import bin from "../../../assets/icons/bin.svg";
import "./ButtonDelete.scss";

const ButtonDelete: FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const handlerButton = () => {
    dispatch(deleteGroup(id));
  };
  return (
    <button
      className="table__header-teachers-groups-bin"
      onClick={handlerButton}
    >
      <img src={bin} alt="bin" />
    </button>
  );
};

export default ButtonDelete;
