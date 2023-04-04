import { Card } from "react-bootstrap";

type StoreItemsProps = {
  id: number;
  name: string;
  author: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({
  id,
  name,
  author,
  price,
  imgUrl,
}: StoreItemsProps) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
          <span className="fs-2">{name.substring(0, 40)}</span>
          <span className="fs-2 ms-2 text-muted">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
