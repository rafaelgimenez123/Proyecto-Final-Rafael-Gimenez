import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getProducts } from "../../services.js";
import ItemDetail from "./ItemDetail";
import "./ItemList.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProducts(id)
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

  return <ItemDetail item={item} isLoading={isLoading} />;
};

export default ItemDetailContainer;