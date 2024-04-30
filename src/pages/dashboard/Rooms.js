import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import star from "../../components/icons/star.svg"
import Button from "../../components/button";
import Card from "../../components/card";
import Chip from "../../components/chip";
import { Link } from "react-router-dom";
import { cardsData } from "../../constants";

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
            <Link key={index} to={`/rooms/${index}`}>
              <Card className="group p-2 hover:bg-[#DBDBFE] cursor-pointer transition-colors">
                {/* Image */}
                <a href="#">
                  <Card.Image src={card.image} alt={card.alt} />
                </a>
                {/* Product Information */}
                <Card.Body className="flex-1">
                  <h5 className="font-bold text-base tracking-tight text-gray-900 font-ubuntu">
                    {card.title}
                  </h5>
                  <div className="flex items-center space-x-2 text-[#444444]">
                    <img src={star} className="w-4 h-4" alt="" />
                    <span className="text-sm font-bold">4.5</span>
                    <span className="text-sm rounded">Tony Vito</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {/* Buttons */}
                    {card.features.map((feature, index) => (
                      <Chip
                        key={index}
                        className="group-hover:bg-white transition-colors"
                      >
                        {feature}
                      </Chip>
                    ))}
                  </div>
                </Card.Body>

                {/* Verify Button */}
                <div className="flex flex-col justify-center gap-4 px-4">
                  <Button variant="secondary">View Info</Button>
                  <Button variant="primary">Book Class</Button>
                </div>
              </Card>
            </Link>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
