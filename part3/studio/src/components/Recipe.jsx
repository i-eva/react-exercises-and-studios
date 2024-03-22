import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://pinchofyum.com/about";
   let authorPhoto = "https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-lindsay.jpg";
   let authorName = "Lindsay";

   return (
      <div>
         <img src={authorPhoto} alt = "Lindsay's photo" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [carrots, cucumbers, greens, hummus, quinoa];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Detox Rainbow Roll-Ups With Peanut Sauce</h1>
            <p></p>
            <p>Aaaaand its Rainbow Roll-Up time!</p>
            <p></p>
            <p>If Rainbow Roll-Up doesnt give you some association with a packaged, neon-colored fruit leather situation all wrapped up in a little paper coil, then who are you even? Im having a moderately hard time separating these from the single greatest snack food of my childhood.</p>
            <p></p>
            <p>This is not that kind of rainbow roll-up, though. This is a rainbow roll-up that can earn the word DETOX in front of it, thanks to yummy and nutritional powerhouse foods like: carrots. chickpeas. curry. red cabbage. peanuts. dark leafy greens.</p>
            <p></p>
            <p>See, mom? I can eat like an adult after all.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Rainbow-Rolls-4.jpg" alt="plate of rollups" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
