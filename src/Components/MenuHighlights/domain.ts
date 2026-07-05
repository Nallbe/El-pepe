import ChickenPaella from "../../assets/Chicken_Paella.jpg";
import TacoDelMar from "../../assets/Taco_Del_Mar.jpg";
import BonAuPain from "../../assets/Burger_King.jpg";
import PizzaHut from "../../assets/Papa_Johns.jpg";

export type HighlightsListType = {
  name: string;
  description: string;
  imgSrc: string;
};

export const HighlightsListMenu: HighlightsListType[] = [
          {
            name: "Chicken Paella",
            description: "We just don't make and sell food.Good food warms.",
            imgSrc:ChickenPaella
          },
          {
            name: "Taco Del Mar",
            description: "Taco Del Mar brings the best out of Mexican cuisine with fresh.",
            imgSrc:TacoDelMar
          },
          {
            name: "Bon Au Pain",
            description: "Bon Au Pain is a pioneer in the healthy fast food scene.",
            imgSrc:BonAuPain
          },
          {
            name: "Pizza Hut",
            description: "Although the Pizza Hut Menu Prices have tumbled over the years.",
            imgSrc:PizzaHut
          },
        ]