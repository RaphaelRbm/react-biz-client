import axios from "axios";
import {Card} from "../interfaces/Card"
import _ from "lodash";
import jwt_decode from 'jwt-decode'
 

const api : string = process.env.REACT_APP_API || "";


// Add new Card
export const addCard = (newCard: Card): Promise<any> =>
axios.post(`${api}cards`, newCard, {
headers: { Authorization: `${sessionStorage.getItem("token")}` },
});

  // Get all cards
export const getCards = (): Promise<any> =>
axios.get(`${api}cards`, {
  headers: { Authorization: `${sessionStorage.getItem("token")}` },
});

  // Get all cards of specific user
  export const getUserCards = (): Promise<any> =>
  axios.get(`${api}cards/my-cards`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

// Get specific card
export const getCard = (id:string): Promise<any> =>
axios.get(`${api}cards/${id}`, {
headers: { Authorization: `${sessionStorage.getItem("token")}` },
});

// Edit specific card
export const editCard = (card: Card): Promise<any> => {
let body = _.omit(card, ["_id"]);
return axios.put(`${api}cards/${card._id}`, body, {
  headers: { Authorization: `${sessionStorage.getItem("token")}` },
});
};


// Delete Card
export const deleteCard = (id: string): Promise<any> =>
axios.delete(`${api}cards/${id}`, {
  headers: { Authorization: `${sessionStorage.getItem("token")}` },
});


