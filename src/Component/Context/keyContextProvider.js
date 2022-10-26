import React from 'react'

const KeyContext = React.createContext({
  key: null
});

export const KeyContextProvider = (props) => {
  const key = '76567691b50544c6aaf0716b05fa4bde'

  return (  
    <KeyContext.Provider value={{ key: key }}>
      {props.children}
    </KeyContext.Provider>
  )
}

export default KeyContext;