import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  const {_id, title, thumbnail_url, details } = singleNews;

  return (
    <div className="card mb-16 border-b-2 bg-base-100 shadow-xl">
      <figure>
        <img src={thumbnail_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link to={`/news/${_id}`} className="btn-link">Read More...</Link>
          </p>
        ) : (
          <p> {details}</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
