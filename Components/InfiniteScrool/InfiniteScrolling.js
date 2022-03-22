import "./App.css";

import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Photo from "./components/Photo";
import Loader from "./components/Loader";
import EndMsg from "./components/EndMsg";

function App() {
  const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(2);

  useEffect(() => {
    const getPhotoes = async () => {
      const res = await fetch(
        // For json server use url below
         `http://localhost:3004/comments?&_limit=20`
      );
      const data = await res.json();
      setItems(data);
    };

    getPhotoes();
  }, []);

  const fetchPhotoes = async () => {
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const photoesFormServer = await fetchPhotoes();

    setItems([...items, ...photoesFormServer]);
    if (photoesFormServer.length === 0 || photoesFormServer.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };




  
  return (
    
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={<EndMsg />}
    >
      <div className="container">
        <div className="row m-2">
          {items.map((item) => {
            return <Photo key={item.id} item={item} />;
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default App;
