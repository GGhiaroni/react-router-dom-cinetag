import { createContext, useEffect, useState } from "react";

export const TimesContext = createContext();
TimesContext.displayName = "Times";

export default function TimesProvider({ children }) {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const response = await fetch("/json/db.json");
        const data = await response.json();
        console.log("Dados carregados:", data);
        setTimes(data);
      } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
      }
    };
    fetchTimes();
  }, []);

  return (
    <TimesContext.Provider value={{ times }}>{children}</TimesContext.Provider>
  );
}
