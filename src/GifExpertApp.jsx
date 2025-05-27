import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
import * as constants from './constants/constants';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ constants.DEFAULT_GIF ]);

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories]);
    }
    
    return (
        <>
            <h1>{ constants.APP_TITLE }</h1>
            <AddCategory onNewCategory={ onAddCategory }/>
            { 
                categories.map( (category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}