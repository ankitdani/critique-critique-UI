import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import api from '../../api/axiosConfig';

const Reviews = ({ getMovieData, movie }) => {
  const revText = useRef();
  const [reviews, setReviews] = useState([]);
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });

      const updatedReviews = [...reviews, { body: rev.value }];


      rev.value = "";

      setReviews(updatedReviews);
      console.log("updated reviews", updatedReviews);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log("Review state:", reviews);
  }, [reviews]);

  return (
    <Container>
      <Row>
        <Col><h3>Reviews</h3></Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </>
          {
            reviews && reviews.map((r, index) => (
              <div key={index}>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </div>
            ))
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}

export default Reviews;
