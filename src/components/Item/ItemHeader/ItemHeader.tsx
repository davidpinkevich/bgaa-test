import { FC, memo } from "react";
import book from "../../../assets/icons/book.svg";
import { HEADER_KEYS } from "../../../constants";
import { getTitle } from "../../../utils";
import { TCard, Teachers, TPodgroups } from "../../../types";
import "./ItemHeader.scss";

const ItemHeader: FC<{ item: TCard }> = memo(({ item }) => {
  return (
    <div className="card__header">
      <div className="card__header-title">
        <div className="card__header-image">
          <img src={book} alt="book" />
        </div>
        {item && item.subjectName}
      </div>
      <div className="card__header-body">
        {HEADER_KEYS.map((elem, i) => {
          const name: string | boolean | TPodgroups | Teachers =
            item !== undefined ? item[elem] : "";
          return (
            <div key={i} className="card__header-body-item">
              <p>{getTitle(elem)}</p>
              <div>{typeof name === "string" && name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ItemHeader;
