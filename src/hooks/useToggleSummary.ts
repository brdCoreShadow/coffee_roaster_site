import { useState } from "react"

export const useToggleSummary = () => {
    const [isSummary, setIsSummary] = useState<boolean>(false)

    const openSummary = ():void => setIsSummary(true)
    const closeSummary = ():void => setIsSummary(false)
    const toggleSummary = ():void => setIsSummary(!isSummary)

    return {openSummary, closeSummary, isSummary, toggleSummary}
}