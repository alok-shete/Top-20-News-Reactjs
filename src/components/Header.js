import { Link } from "react-router-dom";
import { countries } from "country-data";
import { useSelector } from "react-redux";

export default function Header() {
  const country = useSelector((state) => state.country);
  const countryCodes = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <div className="p-2 blog-header-logo text-dark">Top 20</div>
        <div className="p-2">
          <div className="dropleft">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={`https://www.countryflags.io/${country.toUpperCase()}/flat/32.png`}
                alt={country.toUpperCase()}
              />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {countryCodes.map((code, i) => (
                <Link
                  key={i}
                  className="dropdown-item"
                  to={`/${code.toUpperCase()}`}
                >
                  <img
                    src={`https://www.countryflags.io/${code.toUpperCase()}/flat/16.png`}
                    alt={code.toUpperCase()}
                  />{" "}
                  {countries[`${code.toUpperCase()}`].name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
