import axios from "axios";

const urlApi = 'http://www.ishtari.com/motor/v2';

export const fetchApi =

axios.create({
   
    baseURL:urlApi,
   
   
})