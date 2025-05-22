import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Tengen Toppa Gurren-Lagann ']);

    const onAddCategory = (newCategory) => {

        console.log(newCategory);

        // Check that the new categorie(newCategory) is already in the list (categories) if yes then do a "return" to end.
        if ( categories.includes(newCategory) ) return;

        // categories.push("Valorant"); <- Wrong
        // setCategories(cat => [...cat, 'Valorant']); <- Correct (Callback way)
        setCategories([newCategory, ...categories]); // <- Correct, desestructurar categories

    }
    
    return (
        <>
            {/* TITLE */}
            <h1>Gif Expert App</h1>

            {/* INPUT */}
          
            <AddCategory 
                //onNewCategory={ (value) => onAddCategory(value) }
                onNewCategory={ onAddCategory }
            />

            {/* GIF LIST */}
            { 
                categories.map( (category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
            


            {/* GIF ITEM */}

        </>
    )
}

//GIF API KEY: wxzMJ8LSCQtaxaZiQ8Nv0Xi3m4faBkGy