import { Select } from "@mantine/core";
import { FC } from "react";
import ButtonFilled from "../../buttons/ButtonFilled/ButtonFilled";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import { getId } from "../../../utils";
import { TItemSelect } from "../../../types";
import { changeTeacher } from "../../../redux/slices";
import { styles } from "./styles";

const ItemSelect: FC<TItemSelect> = ({ field, id, index, numberGroup }) => {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector((state) => state.cardsReducer.teachers).map(
    (item) => ({ value: item.id, label: item.name })
  );
  const item = useAppSelector((state) => state.cardsReducer.cards).find(
    (x) => x.uniqueId === id
  );

  const handlerSelect = (value: string | null) => {
    dispatch(changeTeacher({ field, id, value, numberGroup }));
  };

  const value = item?.podgroups[numberGroup][getId(field)];

  return (
    <div
      className={
        index % 2 !== 0
          ? "table__body-item-select dark-blue"
          : "table__body-item-select white-blue"
      }
    >
      {getId(field) && (
        <Select
          data={[{ value: "0", label: "Вакансия" }, ...teachers]}
          onChange={handlerSelect}
          defaultValue="0"
          value={value !== "" ? value : "0"}
          withCheckIcon={false}
          allowDeselect={false}
          disabled={item && item[field] === "0"}
          radius="6px"
          styles={{
            ...styles,
            option: {
              ...styles.option,
              height: item?.podgroups.length === 2 ? "65px" : "50px",
            },
          }}
          rightSection={<img src={arrowDown} alt="arrow" />}
          w="100%"
          p="10px"
        />
      )}
      {field === "lecturesHours" && (
        <ButtonFilled id={id} numberGroup={numberGroup} />
      )}
    </div>
  );
};

export default ItemSelect;
