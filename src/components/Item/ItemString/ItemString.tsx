import { FC, Fragment, memo } from "react";
import ItemSelect from "../ItemSelect/ItemSelect";
import ItemInput from "../ItemInput/ItemInput";
import ItemTextarea from "../ItemTextarea/ItemTextarea";
import { getTitle } from "../../../utils";
import { TPodgroups, TItemSpring, Teachers } from "../../../types";
import "./ItemString.scss";

const ItemString: FC<TItemSpring> = memo(({ item, field, index }) => {
  const name: string | boolean | TPodgroups | Teachers =
    item !== undefined ? item[field] : "";

  const totalGroups = item?.podgroups.length;

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
      {item?.podgroups.map((elem, i) => (
        <Fragment key={i}>
          {field === "countPodgroups" && (
            <ItemInput
              value={elem.countStudents}
              id={item.uniqueId}
              numberGroup={i}
            />
          )}
          {field !== "additionalInfo" && field !== "countPodgroups" && (
            <ItemSelect
              field={field}
              group={item}
              index={index}
              numberGroup={i}
            />
          )}
        </Fragment>
      ))}
      {field === "additionalInfo" && (
        <ItemTextarea index={index} group={item} />
      )}
    </div>
  );
});

export default ItemString;
