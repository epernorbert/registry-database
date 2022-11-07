import React from 'react'

const KeyContext = React.createContext({
  key: null
});

export const KeyContextProvider = (props) => {
  const key = 'eaa38c3558014689b9299bc19579cd0b'

  return (  
    <KeyContext.Provider value={{ key: key }}>
      {props.children}
    </KeyContext.Provider>
  )
}

export default KeyContext;