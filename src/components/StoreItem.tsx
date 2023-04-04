import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

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
  const quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
          <span className="fs-2">{name.substring(0, 40)}</span>
          <span className="fs-2 ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <Button>-</Button>
              <div>
                <span className="fs-3">{quantity}</span>in cart
                </div>
              <Button>+</Button>
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <Button variant="danger" size="sm">Remove</Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
