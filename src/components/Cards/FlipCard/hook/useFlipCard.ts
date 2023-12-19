import { useState } from 'react'

export const useFlipCard = () => {
    const [ isFlipped, setIsFlipped ] = useState(false)
    const handleFlipped: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        setIsFlipped((prev) => !prev);
    }

    return {
        isFlipped,
        handleFlipped
    }
}