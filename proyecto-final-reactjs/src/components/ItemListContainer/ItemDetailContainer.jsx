import { useState, useEffect , useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services.js";
import ItemDetail from "./ItemDetail";
import "./ItemList.css";
import CartContext from "../../context/cartContext.js";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const {addItem} = useContext(CartContext)

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setItem(response);
      })
      .catch(() => {
        setItem(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return <ItemDetail item={item} isLoading={isLoading} addItem={addItem} />;
};

export default ItemDetailContainer;