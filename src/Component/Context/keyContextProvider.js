import React from 'react'

const KeyContext = React.createContext({
  key: null
});

export const KeyContextProvider = (props) => {
  const key = 'c908a508d0cb49ed9d4b9f154f46a456'

  return (  
    <KeyContext.Provider value={{ key: key }}>
      {props.children}
    </KeyContext.Provider>
  )
}

export default KeyContext;