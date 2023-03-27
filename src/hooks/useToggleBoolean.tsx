import { Dispatch, SetStateAction, useCallback, useState } from 'react'

type Output = [
    boolean, 
    () => void, 
    Dispatch<SetStateAction<boolean>>
]

export const useToggleBoolean = (defaultValue: boolean): Output => {
    const [value, setValue] = useState<boolean>(defaultValue)

    const toggle = useCallback(() => setValue(x => !x), [])

    return [value, toggle, setValue]
}
