// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/categories")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);
   return (
      <div>
         <h4>All Categories</h4>
         <div>
            {categories.map((category) => (
               <p key={category.id}>
                  <NavLink
                     to={`/categories/${category.id}`}
                     className={({ isActive }) =>
                        isActive
                           ? "bg-primary-subtle text-decoration-none text-secondary px-3 py-2 mx-3 my-2"
                           : "text-decoration-none text-secondary px-3 py-2 mx-3 my-2"
                     }
                  >
                     {category.name}
                  </NavLink>
               </p>
            ))}
         </div>
      </div>
   );
};

export default LeftNav;
