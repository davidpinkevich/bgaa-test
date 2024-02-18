import { Select } from "@mantine/core";
import { FC, memo, useCallback } from "react";
import ButtonFilled from "../../buttons/ButtonFilled/ButtonFilled";
import { useAppDispatch } from "../../../hooks";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import { getId } from "../../../utils";
import { TItemSelect } from "../../../types";
import { changeTeacher } from "../../../redux/slices";
import { styles } from "./styles";

const ItemSelect: FC<TItemSelect> = memo(
  ({ field, group, index, numberGroup }) => {
    const dispatch = useAppDispatch();
    const teachers = group.teachers.map((item) => ({
      value: item.id,
      label: item.name,
    }));
    const handlerSelect = useCallback((value: string | null) => {
      dispatch(
        changeTeacher({ field, id: group.uniqueId, value, numberGroup })
      );
    }, []);

    const value = group?.podgroups[numberGroup][getId(field)];

    return (
      <div
        className={
          index % 2 !== 0
            ? "table__body-item-select dark-blue"
            : "table__body-item-select white-blue"
        }
        style={{ width: group?.podgroups.length === 2 ? "25%" : "50%" }}
      >
        {getId(field) && (
          <Select
            data={[{ value: "0", label: "Вакансия" }, ...teachers]}
            onChange={handlerSelect}
            defaultValue="0"
            value={value !== "" ? value : "0"}
            withCheckIcon={false}
            allowDeselect={false}
            disabled={group && group[field] === "0"}
            radius="6px"
            styles={{
              ...styles,
              option: {
                ...styles.option,
                height: group?.podgroups.length === 2 ? "65px" : "50px",
              },
            }}
            rightSection={<img src={arrowDown} alt="arrow" />}
            w="100%"
            p="10px"
          />
        )}
        {field === "lecturesHours" && (
          <ButtonFilled item={group} numberGroup={numberGroup} />
        )}
      </div>
    );
  }
);

export default ItemSelect;
