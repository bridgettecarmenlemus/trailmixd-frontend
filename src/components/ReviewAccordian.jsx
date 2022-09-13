import Accordion from "react-bootstrap/Accordion";

export default function ReviewAccordian({ trail }) {

  return (
    <Accordion defaultActiveKey="0" flush>
      {console.log(trail, "checking trail reviews")}
      {trail.Reviews.map((review, index) => (
        <Accordion.Item key={index}>
          <Accordion.Header>Review #{index + 1}</Accordion.Header>
          <Accordion.Body>{review.Comment} - {review.Email}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
