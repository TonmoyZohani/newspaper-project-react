import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => console.log(console.error(error)));
  }, []);

  console.log(categories);

  return (
    <div>
      <h1 className="text-xl font-semibold">All Category</h1>

      <div className="space-y-2 mt-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/categoty/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
