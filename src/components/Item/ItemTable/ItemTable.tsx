import { FC, useRef, memo } from "react";
import { BODY_KEYS } from "../../../constants";
import ItemString from "../ItemString/ItemString";
import ButtonDelete from "../../buttons/ButtonDelete/ButtonDelete";
import ButtonGroup from "../../buttons/ButtonGroup/ButtonGroup";
import { TCard } from "../../../types";
import "./ItemTable.scss";

const ItemBody: FC<{ item: TCard }> = memo((props) => {
  const ref = useRef(0);
  const totalGroups = props.item?.podgroups.length;

  return (
    <div className="card__body table">
      <h2 className="table__header">
        <p className="table__header-task">Занятие</p>
        <p className="table__header-hours">Часы</p>
        {totalGroups === 1 ? (
          <div className="table__header-teachers">
            <div className="table__header-teachers-name">Преподаватель</div>
            <ButtonGroup id={props.item.uniqueId} />
          </div>
        ) : (
          <>
            <div
              className="table__header-teachers-groups"
              style={{ width: totalGroups === 2 ? "25%" : "50%" }}
            >
              Подгруппа 1
            </div>
            <div
              className="table__header-teachers-groups"
              style={{ width: totalGroups === 2 ? "25%" : "50%" }}
            >
              Подгруппа 2<ButtonDelete id={props.item.uniqueId} />
            </div>
          </>
        )}
      </h2>
      <div className="table__body">
        {BODY_KEYS.map((elem) => {
          if (
            (props.item !== undefined &&
              typeof props.item[elem] === "string") ||
            (props.item !== undefined && props.item[elem]) ||
            elem === "countStudents"
          ) {
            ref.current++;
            return (
              <ItemString
                key={elem}
                item={props.item}
                field={elem}
                index={ref.current}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
});

export default ItemBody;
