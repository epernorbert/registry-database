import React from 'react'

const KeyContext = React.createContext({
  key: null
});

export const KeyContextProvider = (props) => {
  const key = '130768f04a444833aa7d208ade2f645b'

  return (  
    <KeyContext.Provider value={{ key: key }}>
      {props.children}
    </KeyContext.Provider>
  )
}

export default KeyContext;