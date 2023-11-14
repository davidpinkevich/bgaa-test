import { FC, useRef } from "react";
import { v4 } from "uuid";
import { BODY_KEYS } from "../../../constants";
import { useAppSelector } from "../../../hooks";
import ItemString from "../ItemString/ItemString";
import ButtonDelete from "../../buttons/ButtonDelete/ButtonDelete";
import ButtonGroup from "../../buttons/ButtonGroup/ButtonGroup";
import "./ItemTable.scss";

const ItemBody: FC<{ id: string }> = ({ id }) => {
  const ref = useRef(0);
  const group = useAppSelector((state) => state.cardsReducer.cards).find(
    (x) => x.uniqueId === id
  );
  const totalGroups = group?.podgroups.length;

  return (
    <div className="card__body table">
      <h2 className="table__header">
        <p className="table__header-task">Занятие</p>
        <p className="table__header-hours">Часы</p>
        {totalGroups === 1 ? (
          <div className="table__header-teachers">
            <div className="table__header-teachers-name">Преподаватель</div>
            <ButtonGroup id={id} />
          </div>
        ) : (
          <>
            <div className="table__header-teachers-groups">Подгруппа 1</div>
            <div className="table__header-teachers-groups">
              Подгруппа 2<ButtonDelete id={id} />
            </div>
          </>
        )}
      </h2>
      <div className="table__body">
        {BODY_KEYS.map((item) => {
          if (
            (group !== undefined && typeof group[item] === "string") ||
            (group !== undefined && group[item]) ||
            item === "countStudents"
          ) {
            ref.current++;
            return (
              <ItemString key={v4()} id={id} field={item} index={ref.current} />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ItemBody;
