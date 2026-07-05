import dairyQueenImg from "../../assets/Dairy_Queen.jpg";
import pizzaHutImg from "../../assets/Pizza_Hut.jpg";
import burgerKingImg from "../../assets/Burger_King.jpg";
import papaJohnsImg from "../../assets/Papa_Johns.jpg";

export type MainPositionsType = {
  title: string,
  description: string,
  imgSrc: string,
  IsSale: boolean,
  oldPrice: number,
  salePrice: number,
  position?: | "left" | "right",
}

export const MainPositionItems:MainPositionsType[] = [
  {
    title: "Dairy Queen",
    description: "Dairy Queen is one of the biggest fast-food.",
    imgSrc: dairyQueenImg,
    IsSale: true,
    oldPrice: 6,
    salePrice: 4,
    position: "right"
  },
  {
    title: "Pizza Hut",
    description: "Although the Pizza Hut Menu Prices .",
    imgSrc: pizzaHutImg,
    IsSale: true,
    oldPrice: 7,
    salePrice: 3,
    position: "left"
  },
  {
    title: "Burger King",
    description: "Together with McDonald’s, Burger King.",
    imgSrc: burgerKingImg,
    IsSale: true,
    oldPrice: 6,
    salePrice: 5,
    position: "right"
  },
  {
    title: "Papa John’s",
    description: "Papa John’s is one of the most popular fast-food.",
    imgSrc: papaJohnsImg,
    IsSale: true,
    oldPrice: 8,
    salePrice: 6,
    position: "left"
  }
]