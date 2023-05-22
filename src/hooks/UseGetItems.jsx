import { useEffect, useState } from "react";
import axios from "axios";


const UseGetItems = () => {
    const API = "https://localhost:7055/api/products";
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await axios.get(API);
          setItems(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchItems();
    }, []);
  
    return items;
  };


export default UseGetItems;