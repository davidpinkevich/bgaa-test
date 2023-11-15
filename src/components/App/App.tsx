import { useEffect } from "react";
import { MantineProvider } from "@mantine/core";
import { getCards } from "../../redux/slices";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Items from "../Items/Items";
import Loading from "../Loading/Loading";
import { BASE_URL } from "../../constants";
import "@mantine/core/styles.css";
import "./App.scss";

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.cardsReducer.loading);
  useEffect(() => {
    dispatch(getCards(BASE_URL));
  }, [dispatch]);
  return (
    <MantineProvider>
      <div className="App">
        {!loading && <Items />}
        {loading && <Loading />}
      </div>
    </MantineProvider>
  );
}

export default App;
