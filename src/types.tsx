export type SelectOptions = {
    label: string
    value: string
}

export type SelectProps = {
    options: SelectOptions[]
    value?: SelectOptions
    onChange: (value: SelectOptions | undefined) => void 
}