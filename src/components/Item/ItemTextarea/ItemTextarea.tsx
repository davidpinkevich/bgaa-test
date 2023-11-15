import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeArea } from "../../../redux/slices";
import "./ItemTextarea.scss";

const ItemTextarea: FC<{ index: number; id: string }> = ({ index, id }) => {
  const dispatch = useAppDispatch();
  const group = useAppSelector((state) => state.cardsReducer.cards).find(
    (item) => item.uniqueId === id
  );

  const handlerArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeArea({ id, value: event.target.value }));
  };

  return (
    <div
      className={
        index % 2 !== 0
          ? "table__body-item-textarea dark-blue"
          : "table__body-item-textarea white-blue"
      }
    >
      <textarea
        defaultValue={group?.additionalInfo}
        onBlur={handlerArea}
      ></textarea>
    </div>
  );
};

export default ItemTextarea;
