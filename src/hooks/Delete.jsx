import { useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_REST;

const Eliminarproducto = (id) => {
        
        console.log(id)

    useEffect(() => {
    const deleteObject = async (id) => {
        try {
            await axios.delete(API + `/${id}`);
            console.log("Object deleted successfully");
        } catch (error) {
            console.error("Error deleting object:", error);
        }
    }

    deleteObject(id)
});
  };


export default Eliminarproducto;
