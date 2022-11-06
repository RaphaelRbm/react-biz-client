import { FunctionComponent, useEffect, useState } from "react";
import "../styles/cards.css"

import {Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { Card } from "../interfaces/Card";
import { errorMsg, successMsg } from "../services/feedBackService";
import { deleteCard, getUserCards } from "../services/cardsServices";
import { ToastContainer } from "react-toastify";

import "../styles/cards.css"
import { getBiz } from "../services/userServices";


interface CardsProps {

}

const Cards: FunctionComponent<CardsProps> = () => {

  const [isBiz, setIsBiz] = useState<boolean>(false);
    const [card, setCard] = useState<Card[]>([]);
      const [isChanged, setIsChanged] = useState<boolean>(false);

        const navigate = useNavigate();

        useEffect(() => {
        setIsBiz(getBiz());
        getUserCards()
        .then((result) => {
        setCard(result.data);
        })
        .catch((err) => {
        errorMsg("Something went wrong, Try agian.");
        });
        }, [isChanged]);


        const handleDelete = (card:Card)=>{

        if (window.confirm("Are you sure you want to delete " + card.name + " ?")) {

        deleteCard(card._id as string)
        .then(()=>{
        setIsChanged(!isChanged)
        successMsg("Card deleted successfully")})
        .catch((err)=>{toast.error(err)})
        }

        }

        const addCardLink = ()=>{
        console.log(getBiz());

        if (!getBiz())
        {
        alert("Must have a business account")
        }

        else
        navigate("/cards/add")
        }
        return ( <>

          <div className="cards">

            <div className="wrapper ">
              <div style={{marginTop:"10%"}} className="header"><a style={{cursor:"pointer"}} className="text-light"
                  onClick={addCardLink}><i className="fa-solid fa-plus" style={{color:"rgb(0,174,255)"}}></i> Add
                  Card</a></div>


              <div className="cards_wrap">

                {card.length ? (
                card.map((card: Card) => {
                return (

                <div key={card._id} className="card_item">
                  <div className="card_inner">
                    <img style={{borderRadius:"0.5rem"}} src={card.image} />
                    <div className="card_name">{card.name}</div>
                    <div className="card_address">{card.address}</div>
                    <div className="card_description">{card.description}</div>
                    <div className="card_description mt-1"> <i className="fa-solid fa-phone me-1"></i> {card.phone}
                    </div>

                    <div className="edit mt-3">
                      <Link to={`edit/${card._id}`}> <i className="fa-solid fa-pen-to-square" style={{color:"#FFA500"}}>
                      </i></Link>
                      <i onClick={()=> handleDelete(card)} className="fa-solid fa-trash ms-3"
                        style={{color:"#DC143C"}}></i>
                    </div>
                  </div>
                </div>


                );
                })
                ) : (
                <>
                  <div className="w-100">
                    <h4 className="text-center mt-5">No Cards added..</h4>
                    <img className="image mx-auto img-fluid mt-5" src="nocards.png" alt="" />
                  </div>

                </>
                )}


              </div>
            </div>
          </div>

          <ToastContainer progressClassName="toastProgress" bodyClassName="toastBody" />

        </> );
        }

        export default Cards;