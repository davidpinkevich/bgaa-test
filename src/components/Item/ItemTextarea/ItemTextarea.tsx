import { ChangeEvent, FC, useCallback } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeArea } from "../../../redux/slices";
import { TCard } from "../../../types";
import "./ItemTextarea.scss";

const ItemTextarea: FC<{ index: number; group: TCard }> = ({
  index,
  group,
}) => {
  const dispatch = useAppDispatch();

  const handlerArea = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeArea({ id: group.uniqueId, value: event.target.value }));
  }, []);

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
