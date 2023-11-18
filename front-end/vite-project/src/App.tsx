import "./App.css";
import  { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
  });

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:8080/products");
    setProducts(data.payload);
  };
  const deleteData = async (id: number) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    fetchProducts();
    console.log("delete")
  };

  const createNewProduct = async (product) => {
   
    await axios.post("http://localhost:8080/products",JSON.stringify(product));
      fetchProducts();
  
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createNewProduct(product)
    setProduct({
      name: "",
      price: 0,
    });

    
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <form  action= "POST" onSubmit={handleSubmit}>
        <h4> Create a new product </h4>
        <p>add a product name </p>
        <input
          value={product.name}
          name="name"
          type="text"
          onChange={handleChange}
        ></input>
        <p>add a product price </p>
        <input
          value={product.price}
          type="number"
          name="price"
          onChange={handleChange}
        ></input>
        <button>+</button>
      </form>
    <div>
    {products.length > 0 &&
        products.map((product) => {
          return (
            <article className="card" key={product.id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button>Edit</button>
              <button
                onClick={ ()=> deleteData(product.id) }
              >
                Delete
              </button>
            </article>
          );
        })}
    </div>
    </>
  );
}

export default App;
