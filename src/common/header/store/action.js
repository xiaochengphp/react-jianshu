export const Types = {
    SEARCH_FOCUS: 'search_focus',
    SEARCH_BLUR: 'search_blur'
}

export const searchFocus = (value)=>({
    type: Types.SEARCH_FOCUS,
    value: value
})

export const searchBlur = (value)=>({
    type: Types.SEARCH_BLUR,
    value: value
})

