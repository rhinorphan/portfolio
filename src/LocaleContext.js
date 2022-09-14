import React from "react";

const defaultValue = {
  locale: 'en-GB',
  setLocale: () => {} 
}

export default React.createContext(defaultValue);