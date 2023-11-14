import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getId, getNumber } from "../../utils";
import { BODY_KEYS } from "../../constants";
import { Cards, Teachers, PayloadTeachers } from "../../types";

type TInitialState = {
  cards: Cards;
  teachers: Teachers;
  loading: boolean;
};

const initialState: TInitialState = {
  cards: [],
  teachers: [],
  loading: false,
};

export const getCards = createAsyncThunk(
  "cardsReducer/getCards",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    changeTeacher(state, action: PayloadAction<PayloadTeachers>) {
      const index = state.cards.findIndex(
        (item) => item.uniqueId === action.payload.id
      );
      if (index !== -1) {
        state.cards[index].podgroups[action.payload.numberGroup][
          getId(action.payload.field)
        ] = action.payload.value as string;
      }
    },
    addNewGroup(state, action: PayloadAction<string>) {
      const index = state.cards.findIndex(
        (item) => item.uniqueId === action.payload
      );
      if (index !== -1) {
        const secondGroup = getNumber(state.cards[index].studentsNumber);
        const firstGroup = +state.cards[index].studentsNumber - +secondGroup;
        state.cards[index].podgroups[0].countStudents = String(firstGroup);
        state.cards[index].countPodgroups = "2";
        state.cards[index].podgroups.push({
          countStudents: secondGroup,
          laboratoryTeacher: "",
          lectureTeacher: "",
          practiceTeacher: "",
          seminarTeacher: "",
          examTeacher: "",
          offsetTeacher: "",
        });
      }
    },
    deleteGroup(state, action: PayloadAction<string>) {
      const index = state.cards.findIndex(
        (item) => item.uniqueId === action.payload
      );
      if (index !== -1) {
        state.cards[index].countPodgroups = "1";
        state.cards[index].podgroups.pop();
      }
    },
    filledTeachers(
      state,
      action: PayloadAction<{ id: string; value: string; numberGroup: number }>
    ) {
      const index = state.cards.findIndex(
        (item) => item.uniqueId === action.payload.id
      );
      const card = state.cards.find((el) => el.uniqueId === action.payload.id);

      if (index !== -1) {
        BODY_KEYS.forEach((item) => {
          if (card && card[item] !== "0" && card[item] && getId(item) !== "") {
            state.cards[index].podgroups[action.payload.numberGroup][
              getId(item)
            ] = action.payload.value as string;
          }
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.cards = action.payload.data;
        state.teachers = action.payload.teachers;
        state.loading = false;
      });
  },
});

export default cardsSlice.reducer;
export const { changeTeacher, filledTeachers, addNewGroup, deleteGroup } =
  cardsSlice.actions;
