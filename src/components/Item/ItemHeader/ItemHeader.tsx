import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../../../hooks";
import book from "../../../assets/icons/book.svg";
import { HEADER_KEYS } from "../../../constants";
import { getTitle } from "../../../utils";
import { TPodgroups } from "../../../types";
import "./ItemHeader.scss";

const ItemHeader: FC<{ id: string }> = ({ id }) => {
  const main = useAppSelector((state) => state.cardsReducer.cards).find(
    (item) => item.uniqueId === id
  );

  return (
    <div className="card__header">
      <div className="card__header-title">
        <div className="card__header-image">
          <img src={book} alt="book" />
        </div>
        {main && main.subjectName}
      </div>
      <div className="card__header-body">
        {HEADER_KEYS.map((elem) => {
          const name: string | boolean | TPodgroups =
            main !== undefined ? main[elem] : "";
          return (
            <div key={uuidv4()} className="card__header-body-item">
              <p>{getTitle(elem)}</p>
              <div>{typeof name === "string" && name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemHeader;
