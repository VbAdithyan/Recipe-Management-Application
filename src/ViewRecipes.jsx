import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

function ViewRecipes() {
  const location = useLocation();
  const [recipes, setRecipes] = useState(location.state?.recipes || []);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedRecipe, setEditedRecipe] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedRecipe({ ...recipes[index] });
  };

  const handleChange = (e) => {
    setEditedRecipe({ ...editedRecipe, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedRecipes = recipes.map((recipe, index) =>
      index === editIndex ? editedRecipe : recipe
    );
    setRecipes(updatedRecipes);
    setEditIndex(-1);
  };

  const handleCancel = () => setEditIndex(-1);

  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((recipe, index) => index !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Recipes List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Image</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {editIndex === index ? (
                <>
                  <td>
                    <Form.Control
                      name="name"
                      value={editedRecipe.name}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                      name="description"
                      value={editedRecipe.description}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                      name="cuisine"
                      value={editedRecipe.cuisine}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                      name="ingredients"
                      value={editedRecipe.ingredients}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                      name="instructions"
                      value={editedRecipe.instructions}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Form.Control
                      name="image"
                      value={editedRecipe.image}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Button variant="success" onClick={handleSave}>
                      Save
                    </Button>
                  </td>
                  <td>
                    <Button variant="warning" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </td>
                </>
              ) : (
                <>
                  <td>{recipe.name}</td>
                  <td>{recipe.description}</td>
                  <td>{recipe.cuisine}</td>
                  <td>{recipe.ingredients}</td>
                  <td>{recipe.instructions}</td>
                  <td>
                    <img src={recipe.image} alt="recipe" width="60" />
                  </td>
                  <td>
                    <Button onClick={() => handleEdit(index)}>Update</Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ViewRecipes;
