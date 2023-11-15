import { useAppDispatch, useAppSelector } from "../../../hooks";
import { saveResult } from "../../../redux/slices";
import { TData } from "../../../types";
import "./ButtonSave.scss";

const ButtonSave = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cardsReducer.cards);
  const teachers = useAppSelector((state) => state.cardsReducer.teachers);
  const data: TData = { data: cards, teachers };

  const handlerButton = () => {
    dispatch(saveResult(data));
  };

  return (
    <button className="save__btn" onClick={handlerButton}>
      Сохранить
    </button>
  );
};

export default ButtonSave;
