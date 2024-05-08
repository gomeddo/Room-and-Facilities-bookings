import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { cardsData } from "../../constants";
import { useRooms } from "../../hooks";
import RoomCard from "./roomCard";

export default function Rooms() {
  // State to keep track of the number of displayed cards and whether there are more cards to load
  const [displayedCards, setDisplayedCards] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const cardsData= useRooms();


  // Function to load more cards when scrolling
  const loadMoreCards = () => {
    // Check if all cards have been displayed
    if (displayedCards >= cardsData.length) {
      // If all cards have been displayed, set hasMore to false to indicate no more cards to load
      setHasMore(false);
      return;
    }

    // Simulate loading delay using setTimeout
    setTimeout(() => {
      // Increase the number of displayed cards by 5
      setDisplayedCards((prevDisplayedCards) => prevDisplayedCards + 5);
    }, 5000); // Simulated loading time of 5 seconds
  };

  return (
    <>
      {/* Right portion taking 3/4 of the page */}
      <div className="w-3/4 pl-8 py-12">
        {/* Title indicating the number of homes for rent in Amsterdam */}
        <div className="text-xl text-[#666] font-semibold mb-6">
          {cardsData.length} homes for rent in Amsterdam
        </div>
        {/* Infinite scroll component to dynamically load more cards as user scrolls */}
        <InfiniteScroll
          dataLength={displayedCards}
          next={loadMoreCards} // Function to call when reaching the bottom to load more cards
          hasMore={hasMore} // Boolean indicating whether there are more cards to load
          loader={<h4>Loading.....</h4>} // Loader displayed while loading more cards
          className="flex flex-col gap-6" // Styling for the container of the cards
        >
          
          {/* Mapping over the sliced portion of cardsData to render RoomCard components */}
          {cardsData.slice(0, displayedCards).map((card, index) => (
            <RoomCard {...card} id={index} key={index} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
