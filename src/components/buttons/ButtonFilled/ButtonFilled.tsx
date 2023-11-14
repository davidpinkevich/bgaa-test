import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { filledTeachers } from "../../../redux/slices";
import fillSvg from "../../../assets/icons/fill.svg";
import { TButtonFilled } from "../../../types";
import "./ButtonFilled.scss";

const ButtonFilled: FC<TButtonFilled> = ({ id, numberGroup }) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.cardsReducer.cards).find(
    (item) => item.uniqueId === id
  )?.podgroups[numberGroup].lectureTeacher as string;

  const handlerButton = () => {
    dispatch(filledTeachers({ id, value, numberGroup }));
  };
  return (
    <button className="table__body-item-fill btn__fill" onClick={handlerButton}>
      <img src={fillSvg} alt="arrow-fill" />
    </button>
  );
};

export default ButtonFilled;
