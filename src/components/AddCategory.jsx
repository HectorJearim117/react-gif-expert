import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        
        // Check that inpit has more than 1 character
        if (inputValue.trim().length <= 1) return;

        // Add the new categorie (inputValue), remove unwanted spaces (trim()) but keeping the other categories on the list (...categories)
        onNewCategory(inputValue.trim());
        
        // At Enter the input will be empty
        setInputValue('');
    }

    return (

        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    
    )
}
