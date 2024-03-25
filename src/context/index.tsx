import React from 'react'
import { IContext } from '../interfaces'

export const Context = React.createContext<IContext>({
  theme:"light",
  setTheme:()=>{}
})

type Props = {children:React.ReactNode}

export const ContextComponent:React.FC<Props> = ({children}) => {
  const [theme,setTheme] = React.useState<"light"|"dark">("light")
  return (
    <Context.Provider value={{theme,setTheme}}>
      {children}
    </Context.Provider>
  )
}