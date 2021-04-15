export default function Card(props) {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={
            props.article.urlToImage === null
              ? "https://www.hdwallpapers.in/thumbs/2021/blue_ash_white_yellow_3d_abstract_hd_abstract-t1.jpg"
              : props.article.urlToImage
          }
          alt={props.article.source.name}
        />
        <div className="card-body">
          <strong className="d-inline-block mb-2 text-success">
            {props.article.source.name}
          </strong>
          <h3 className="mb-0">
            <a
              className="text-dark"
              rel="noreferrer"
              target="_blank"
              href={props.article.url}
            >
              {props.article.title}
            </a>
          </h3>
          <div className="mb-1 text-muted">{props.article.publishedAt}</div>
          <p className="card-text mb-auto">{props.article.content}</p>
          <a target="_blank" rel="noreferrer" href={props.article.url}>
            Continue reading
          </a>
        </div>
      </div>
    </>
  );
}
