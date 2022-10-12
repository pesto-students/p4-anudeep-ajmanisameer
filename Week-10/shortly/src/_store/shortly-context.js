import React, { useState, createContext } from 'react'

const ShortlyContext = createContext({

})

export const ShortlyContextProvider = (props) => {

  const initialList = JSON.parse(localStorage.getItem('links')) || []
  const [localLinks, setLocalLinks] = useState(initialList)

  const updateLists = (obj) => {
    setLocalLinks((prevLinks) => {
      return [obj, ...prevLinks]
    })
    localStorage.setItem('links', JSON.stringify([obj, ...localLinks]))
  }

  const shortlyValue = {
    catchedLists: localLinks,
    onUpdateListHandler: updateLists
  };

  return <ShortlyContext.Provider value={shortlyValue}>{props.children}</ShortlyContext.Provider>
}

export default ShortlyContext;