import { useSelector } from "react-redux";

import Card from "./Card";

export default function AllNews() {
  const news = useSelector((state) => state.news);
  return (
    <>
      <div className="container">
        <div className="row mb-2">
          <div className="card-columns">
            {news.map((article, i) => (
              <Card key={i} article={article} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
