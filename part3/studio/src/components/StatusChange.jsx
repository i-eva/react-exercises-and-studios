import { useState } from 'react';

export default function StatusChange () {

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setStatus(true);
   }
   const [notes, setNotes] = useState("");
   const [recipeStatus, setStatus] = useState(false);

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

      </div>
   );
}
