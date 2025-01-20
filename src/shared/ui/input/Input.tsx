import { ChangeEvent, FocusEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    value?: string
    onChange?: (value: string) => void
}

const FONT_LETTER_WIDTH_COEF = 0.6

export const Input = memo(({ 
    value, 
    onChange, 
    className, 
    placeholder, 
    onFocus, 
    onBlur, 
    onSelect, 
    autoFocus
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [isCaretShowing, setIsCaretShowing] = useState<boolean>(false)
    const [caretPosition, setCaretPosition] = useState<number>(0)
    const [caretWidth, setCaretWidth] = useState<number>(0)
    const [scrollOffset, setScrollOffset] = useState<number>(0);
    
    useEffect(() => {
        const letterWidth = parseFloat( window.getComputedStyle(inputRef.current).fontSize) * FONT_LETTER_WIDTH_COEF
        setCaretWidth(letterWidth)
    }, [])

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setScrollOffset(inputRef.current?.scrollLeft || 0);
    }
    const focusHandler = (e: FocusEvent<HTMLInputElement>) => {
        onFocus?.(e)
        setIsCaretShowing(true)
    }
    const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
        onBlur?.(e)
        setIsCaretShowing(false)
    }
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const selectHandler = (e: any) => {
        onSelect?.(e)
        setCaretPosition(e?.target?.selectionStart || 0)
        setScrollOffset(inputRef.current?.scrollLeft || 0);
    }

    return (
        <div className={classNames(styles.inputWrapper)}>
            {!!placeholder && <div className={styles.placeholder}>
                {`${placeholder}>`}
            </div>}

            <div className={styles.caretWrapper}>
                <input
                    autoFocus={autoFocus}
                    ref={inputRef}
                    value={value} 
                    className={classNames(styles.input, {}, [className])} 
                    onFocus={focusHandler} 
                    onBlur={blurHandler} 
                    onChange={changeHandler}
                    onSelect={selectHandler}
                />

                {isCaretShowing && 
                    <span 
                        className={styles.caret} 
                        style={{ 
                            width: `${caretWidth}px`, 
                            left: `${caretPosition * caretWidth - scrollOffset}px` 
                        }}
                    />
                }
            </div>
        </div>
    )
})
