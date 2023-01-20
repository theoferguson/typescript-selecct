import { SelectOption, SelectProps } from "./types";
import styles from "./select.module.css";
import { useEffect, useState } from "react";

export function Select({ value, onChange, options }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    function clearOptions() {
        onChange(undefined)
    }

    function selectOption(option: SelectOption) {
        if (option !== value) onChange(option)
    }

    function isOptionSelected(option: SelectOption) {
        return option === value
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen])

    return (
        <div
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(prev => !prev)}
            tabIndex={0}
            className={styles.container}
        >
            <span className={styles.value}>{value?.label}</span>
            <button
                onClick={e => {
                    e.stopPropagation()
                    clearOptions()
                }}
                className={styles["clear-btn"]}
            >
                &times;
            </button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
                {options.map((option, index) => (
                    <li
                        onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        key={option.value}
                        className={`${styles.option} 
                        ${isOptionSelected(option) ? styles.selected : ""}
                        ${index === highlightedIndex ? styles.highlighted: ""}
                        `}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}