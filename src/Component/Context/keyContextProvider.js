import React from 'react'

const KeyContext = React.createContext({
  key: null
});

export const KeyContextProvider = (props) => {
  const key = '3cd49e1bb0d141e5a3df6bb3ba3c27d3'

  return (  
    <KeyContext.Provider value={{ key: key }}>
      {props.children}
    </KeyContext.Provider>
  )
}

export default KeyContext;