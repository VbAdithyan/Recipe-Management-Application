import { useState } from "react";
import { Card, CardHeader, Form, CardFooter, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function RecipeForm() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    cuisine: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes([...recipes, recipe]);
    setRecipe({
      name: "",
      description: "",
      cuisine: "",
      ingredients: "",
      instructions: "",
      image: "",
    });
  };

  const handleClick = () => {
    navigate("/recipes", {
      state: { recipes: recipes },
    });
  };

  return (
    <div
      className="container w-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          "url('https://wallpaperfx.com/view_image/white-contemporany-kitchen-1920x1080-wallpaper-11923.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Card className="shadow-lg w-100" style={{ maxWidth: "600px", opacity: 0.95 }}>
        <CardHeader className="w-100 bg-light bg-opacity-75">
          <h2>Recipe Entry</h2>
        </CardHeader>

        <Form onSubmit={handleSubmit} className="p-4">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Recipe Name"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Enter Short Description"
              name="description"
              value={recipe.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cuisine</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Cuisine (e.g., Italian, Indian)"
              name="cuisine"
              value={recipe.cuisine}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Ingredients (comma separated)"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter Cooking Instructions"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter Image URL"
              name="image"
              value={recipe.image}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Submit Recipe
            </Button>
          </div>
        </Form>

        <CardFooter className="text-center bg-light">
          <Button variant="success" onClick={handleClick}>
            VIEW ALL
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RecipeForm;
