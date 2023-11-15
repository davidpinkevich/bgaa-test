import { FC, Fragment } from "react";
import { v4 } from "uuid";
import { useAppSelector } from "../../../hooks";
import ItemSelect from "../ItemSelect/ItemSelect";
import ItemInput from "../ItemInput/ItemInput";
import ItemTextarea from "../ItemTextarea/ItemTextarea";
import { getTitle } from "../../../utils";
import { TPodgroups, TItemSpring } from "../../../types";
import "./ItemString.scss";

const ItemString: FC<TItemSpring> = ({ id, field, index }) => {
  const group = useAppSelector((state) => state.cardsReducer.cards).find(
    (item) => item.uniqueId === id
  );
  const name: string | boolean | TPodgroups =
    group !== undefined ? group[field] : "";

  const totalGroups = group?.podgroups.length;

  return (
    <div
      style={{
        display:
          field === "countPodgroups" && totalGroups === 1 ? "none" : "flex",
      }}
      className="table__body-item"
    >
      <div
        className={
          index % 2 !== 0
            ? "table__body-item-name dark-blue"
            : "table__body-item-name white-blue"
        }
      >
        {getTitle(field)}
      </div>
      <div
        className={
          index % 2 !== 0
            ? "table__body-item-value white-blue"
            : "table__body-item-value"
        }
      >
        {typeof name === "string" &&
          field !== "countPodgroups" &&
          field !== "additionalInfo" &&
          !isNaN(+name) &&
          name}
      </div>
      {group?.podgroups.map((elem, i) => (
        <Fragment key={v4()}>
          {field === "countPodgroups" && (
            <ItemInput value={elem.countStudents} id={id} numberGroup={i} />
          )}
          {field !== "additionalInfo" && field !== "countPodgroups" && (
            <ItemSelect field={field} id={id} index={index} numberGroup={i} />
          )}
        </Fragment>
      ))}
      {field === "additionalInfo" && <ItemTextarea index={index} id={id} />}
    </div>
  );
};

export default ItemString;
