type ItemSuggestion = {
    title: string
}

export function ItemSuggestion({title}: ItemSuggestionProps){
    return(
    <button>{title}</button>
    )
}