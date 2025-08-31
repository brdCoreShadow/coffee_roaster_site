import { useState } from "react"

export const useToggleOrder = () => {
    const [isOrderMenu, setIsOrderMenu] = useState<boolean>(false)

    const openOrderMenu = ():void => setIsOrderMenu(true)
    const closeOrderMenu = ():void => setIsOrderMenu(false)
    const toggleOrderMenu = ():void => setIsOrderMenu(!isOrderMenu)

    return {openOrderMenu, closeOrderMenu, isOrderMenu, toggleOrderMenu}
}