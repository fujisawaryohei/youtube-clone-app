import { createContext, useReducer } from 'react'

const initialState = {
  popular: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { popular: action.payload.popular }
    default:
      return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})

export const StoreProvider = ({childlen}) => {
  console.log(childlen)
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {childlen}
    </Store.Provider>
  )
}