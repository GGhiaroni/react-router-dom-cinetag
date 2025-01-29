import { createContext, useEffect, useState } from "react";

export const TimesContext = createContext();
TimesContext.displayName = "Times";

export default function TimesProvider({ children }) {
  const [times, setTimes] = useState([]);
  useEffect(() => {
    fetch("/json/db.json")
      .then((response) => response.json())
      .then((data) => setTimes(data))
      .catch((error) => console.error("Erro ao carregar o JSON:", error));
  }, []);

  return (
    <TimesContext.Provider value={{ times }}>{children}</TimesContext.Provider>
  );
}
