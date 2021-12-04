import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import "./details.css";

import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "reactstrap";

const Details = () => {
  const History = useHistory();
  const location = useLocation();
  const [MoviesById, setMovieById] = useState([]);

  const { pathname } = location;

  const imdbId = pathname.substring(1);

  let handleBack = () => {
    History.goBack();
  };

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${imdbId}&apikey=ba811eaa`)
      .then((response) => {
        console.log(response.data);
        setMovieById(response.data);
      });
  }, []);

  return (
    <div className="Details">
      <Header />

      <Card className="HeadingCard">
        <div className="link">
          <Link onClick={handleBack}>Go Back</Link>
        </div>
        <h3>{MoviesById.Title}</h3>
      </Card>

      <div className="Detail_Content">
        <div className="Main_Container">
          <div className="left">
            <Card className="ImageCard">
              <img src={MoviesById.Poster} alt={MoviesById.Title} />
            </Card>
          </div>

          <div className="right">
            <Card className="DetailsCard">
              <h5>Rating / Votes:</h5>
              <div className="Header">
                <div className="header_items1">
                  {MoviesById.imdbRating}/10
                  <br />
                  <label>ImdbRating</label>
                </div>

                <div className="header_items2">
                  {MoviesById.imdbVotes}
                  <br />
                  <label>ImdbVotes</label>
                </div>
              </div>
              <hr></hr>

              <div className="Card_content">
                <p>
                  <b>Plot:</b> {MoviesById.Plot}
                </p>
                <p>
                  <b>Runtime</b> {MoviesById.Runtime}
                </p>
                <p>
                  <b>Release Date:</b> {MoviesById.Released}
                </p>
                <p>
                  <b>Director:</b> {MoviesById.Director}
                </p>
                <p>
                  <b>Awards:</b> {MoviesById.Awards}
                </p>
                <p>
                  <b>Box Office:</b> {MoviesById.BoxOffice}
                </p>
              </div>
              <hr></hr>

              <h5>Cast:</h5>
              <p>{MoviesById.Actors}</p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Details;
