import { useContext } from "react";
import { TimesContext } from "../contextos/Times";

const useTimesContext = () => {
  const { times } = useContext(TimesContext);
  console.log("Times no hook:", times);
  return times || [];
};

export default useTimesContext;
