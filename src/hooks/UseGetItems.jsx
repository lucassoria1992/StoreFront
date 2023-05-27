import { useEffect, useState } from "react";
import axios from "axios";


const UseGetItems = () => {
    
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const API = process.env.REACT_APP_API_REST;
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