import { useState } from "react";
import axios from "axios";

const useUpdateItemsList = () => {
    const [itemsList, setItemsList] = useState([]);
  
    const updateItems = async () => {
      try {
        const response = await axios.get("https://localhost:7055/api/products");
        setItemsList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return [itemsList, updateItems];
  };

  export default useUpdateItemsList;