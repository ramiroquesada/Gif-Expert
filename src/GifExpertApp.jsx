import { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Messi']);


  const onAddCategory = (newCategory) =>{

    const currentCategoriesUpperCase = categories.map(cat=> cat.toUpperCase());

    if(currentCategoriesUpperCase.includes(newCategory.toUpperCase())) return;

    function toUpper(str) {
      return str
          .toLowerCase()
          .split(' ')
          .map(function(word) {              
              return word[0].toUpperCase() + word.substr(1);
          })
          .join(' ');
       }
  
    setCategories([toUpper(newCategory), ...categories]);

  }

  return (
    <>
        
      <h2>GIF EXPERT</h2>
        
      <AddCategory onNewCategory={(e) => onAddCategory(e)} />
        
        
       
      {categories.map(category => 
        (
          <GifGrid key={category} category={category} />
        )
      )}

        

        
    </>
  )
}
