import {useState} from 'react'

export const useHumburgerMenu = () => {
  const [onOff, openClose] = useState(false)
  const humburgerMenu = () => openClose((prevState) => !prevState)
  const OpenClose = onOff ? 'open' : 'close'
  return [{humburgerMenu, OpenClose}]
}
