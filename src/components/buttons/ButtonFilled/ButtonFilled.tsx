import { FC, useCallback, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { filledTeachers } from "../../../redux/slices";
import fillSvg from "../../../assets/icons/fill.svg";
import { TButtonFilled } from "../../../types";
import "./ButtonFilled.scss";

const ButtonFilled: FC<TButtonFilled> = memo(({ item, numberGroup }) => {
  const dispatch = useAppDispatch();
  const value = item?.podgroups[numberGroup].lectureTeacher as string;

  const handlerButton = useCallback(() => {
    dispatch(filledTeachers({ id: item.uniqueId, value, numberGroup }));
  }, [value]);
  return (
    <button className="table__body-item-fill btn__fill" onClick={handlerButton}>
      <img src={fillSvg} alt="arrow-fill" />
    </button>
  );
});

export default ButtonFilled;
