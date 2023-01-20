export type SelectOption = {
    label: string
    value: string | number
}

export type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void 
}