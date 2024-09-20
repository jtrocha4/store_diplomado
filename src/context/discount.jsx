import { createContext, useState } from 'react'

export const DiscountContext = createContext()

export const DiscountProvider = ({ children }) => {
  const [discount, setDiscount] = useState(0)
  return (
    <DiscountContext.Provider value={{
      discount,
      setDiscount
    }}
    >
      {children}
    </DiscountContext.Provider>
  )
}
