import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import Card from "../../pages/Cart";

const CartController = () => {
  const { getTotal } = useContext(CartContext);
  const location = useLocation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    const total = getTotal();

    if (total == 0.0) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
      return;
    }
    if (total > 0) {
      navigate("/checkout", { state: { from: location } });
    }
  };
  return (
    <Container>
      <div className="grid justify-center divide-y divide-gray-200 ">
        <div className="py-6 text-center text-xl font-semibold">
          {show && (
            <Alert key={"warning"} variant={"warning"}>
              No products in the shopping card!
            </Alert>
          )}
          Shopping Card
        </div>
        <Card checkoutHandler={checkoutHandler} />
      </div>
    </Container>
  );
};
export default CartController;
