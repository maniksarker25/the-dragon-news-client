import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
  const { title, details, _id, author, image_url, total_view, rating } = news;
  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1 ms-2">
          <p className="mb-0">{author?.name}</p>
          <p className="mb-0">
            {moment(author?.published_date).format("yyyy-mm-d")}
          </p>
        </div>
        <div className="d-flex gap-2">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1 d-flex align-items-center gap-1">
          <Rating
            style={{ maxWidth: 100 }}
            value={rating.number}
            readOnly
          />
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
