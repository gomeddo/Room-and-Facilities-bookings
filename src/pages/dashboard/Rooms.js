import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { cardsData } from "../../constants";
import RoomCard from "./roomCard";

export default function Rooms() {
  const [displayedCards, setDisplayedCards] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreCards = () => {
    if (displayedCards >= cardsData.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setDisplayedCards((prevDisplayedCards) => prevDisplayedCards + 5);
    }, 5000);
  };

  return (
    <>
      {/* Right portion taking 3/4 of the page */}
      <div className="w-3/4 pl-8 py-12">
        <div className="text-xl text-[#666] font-semibold mb-6">
          {cardsData.length} homes for rent in Amsterdam
        </div>
        <InfiniteScroll
          dataLength={displayedCards}
          next={loadMoreCards}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          className="flex flex-col gap-6"
        >
          {cardsData.slice(0, displayedCards).map((card, index) => (
            <RoomCard {...card} id={index} key={index} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
