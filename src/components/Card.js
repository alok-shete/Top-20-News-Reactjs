export default function Card(props) {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={
            props.article.image === null
              ? "https://www.hdwallpapers.in/thumbs/2021/blue_ash_white_yellow_3d_abstract_hd_abstract-t1.jpg"
              : props.article.image
          }
          alt={props.article.source}
        />
        <div className="card-body">
          <strong className="d-inline-block mb-2 text-success">
            {props.article.source}
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
          <div className="mb-1 text-muted">{props.article.published_at}</div>
          <p className="card-text mb-auto">{props.article.description}</p>
          <a target="_blank" rel="noreferrer" href={props.article.url}>
            Continue reading
          </a>
        </div>
      </div>
    </>
  );
}
