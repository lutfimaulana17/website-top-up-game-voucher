import { useCallback, useEffect, useState } from "react";
import GameItem from "../../molecules/GameItem";
import { getFeaturedGame } from "../../../services/player";
import { GameItemTypes } from "../../../services/data-types";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => (
            <GameItem
              key={item._id}
              title={item.name}
              category={item.category.name}
              thumbnail={`${API_IMG}/${item.thumbnail}`}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
