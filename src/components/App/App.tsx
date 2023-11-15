import { useEffect } from "react";
import { MantineProvider } from "@mantine/core";
import { getCards } from "../../redux/slices";
import { useAppDispatch } from "../../hooks";
import Items from "../Items/Items";
import { BASE_URL } from "../../constants";
import "@mantine/core/styles.css";
import "./App.scss";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards(BASE_URL));
  }, [dispatch]);
  return (
    <MantineProvider>
      <div className="App">
        <Items />
      </div>
    </MantineProvider>
  );
}

export default App;
