import React, { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    steps: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation
    const err = {};

    if (!formData.title.trim()) err.title = "Please enter title";
    if (!formData.ingredients.trim()) err.ingredients = "Please enter ingredients";
    if (!formData.steps.trim()) err.steps = "Please enter cooking steps";

    if (Object.keys(err).length > 0) {
      setErrors(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({...errors, [e.target.name] : "" })
  };

  return (
    <div className="container mx-auto my-20">
      {/* <div className=" w-1/2 bg-purple-100 mx-auto rounded-lg p-6 shadow-md" ></div> */}

      <h1 className="text-center text-3xl font-bold text-gray-800 font-mono "> ADD NEW RECIPE</h1>
      <form className="max-w-2xl mx-auto shadow-lg lg:p-10 p-2 rounded-sm" onSubmit={handleSubmit}>
        
        <div className="mb-5">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the Title"
            className="outline-double w-full bg-transparent p-2 rounded-md"
          />
          {errors.title ? (
            <p className="text-red-500">{errors.title}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-5">
          <textarea
            name="ingredients"
            id=""
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="List of ingredient"
            className="outline-double w-full h-24  bg-transparent p-2 rounded-md"
          ></textarea>
          {errors.ingredients ? (
            <p className="text-red-500">{errors.ingredients}</p>
          ) : (
            ""
          )}
        </div>

        <div className="mb-8">
          <textarea
            name="steps"
            id=""
            value={formData.steps}
            onChange={handleChange}
            placeholder="The cooking steps"
            className="outline-double w-full h-24  bg-transparent p-2 rounded-md"
          ></textarea>
          {errors.steps ? (
            <p className="text-red-500">{errors.steps}</p>
          ) : (
            ""
          )}
        </div>

        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow block mx-auto " type="submit">
          Submit
        </button>
      </form>
      {/* <hr />
      <div>
        <h1>error message</h1>
        <p>{formData.errorMessage.title}</p>
      </div> */}
    </div>
  );
}

export default AddRecipeForm;
