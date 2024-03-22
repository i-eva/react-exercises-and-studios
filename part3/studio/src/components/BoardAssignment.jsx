import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      { label: "Dinner", value: "Dinner" },
      { label: "Dessert", value: "Dessert" },
      { label: "Breakfast", value: "Breakfast" },
   ];

   const handleChange = (event) => {
      setName{event.target.value};
   };
   const [boardName, setName] = useState("no boards yet!");

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map(data => {
            return <option value={data.value}>{data.label}</option>;
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
