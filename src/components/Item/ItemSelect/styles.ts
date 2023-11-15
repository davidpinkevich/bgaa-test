type TStyles = {
  input: {
    fontSize: number;
    width: string;
    height: string;
    textAlign: "center" | "left" | "right";
    fontFamily: string;
    color: string;
  };
  option: {
    fontSize: number;
    justifyContent: "center";
    height: string;
    color: string;
    textAlign: "center" | "left" | "right";
  };
  item: {
    whiteSpace: string;
  };
};

export const styles: TStyles = {
  input: {
    fontSize: 14,
    width: "100%",
    height: "40px",
    textAlign: "center",
    fontFamily: "Roboto",
    color: "rgb(77, 88, 103)",
  },
  option: {
    fontSize: 14,
    textAlign: "center",
    height: "50px",
    color: "rgb(106, 119, 136)",
    justifyContent: "center",
  },
  item: {
    whiteSpace: "initial",
  },
};
