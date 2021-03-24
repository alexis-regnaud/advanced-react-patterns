import React from "react";

const CounterContext = React.createContext(undefined);

function CounterProvider({ children, value }) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

function useCounterContext() {
  const context = React.useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

export { CounterProvider, useCounterContext };
