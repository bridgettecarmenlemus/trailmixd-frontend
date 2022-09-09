import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

export default function ReviewAccordian( {trail}) {
const [review, setReview] = useState("");

useEffect(() => {
fetch("https://trailmixd-api.web.app/gethikingtrails")
    .then((results) => results.json())
    .then((data) => setReview(data))
    .catch((e) => console.error(e));
},[trail.Reviews])

  return (
    <Accordion defaultActiveKey="0" flush>
        {console.log(trail, "checking trail reviews")}
        {trail.Reviews.map((review, index) => (
    
      <Accordion.Item eventKey={index}>
        <Accordion.Header>Review #{index+1}</Accordion.Header>
        <Accordion.Body>
          {review.Comment}
        </Accordion.Body>
      </Accordion.Item>
        ))}
    </Accordion>
  );
}
