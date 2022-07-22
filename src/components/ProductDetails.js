import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { Rating } from "@mui/material";
import { RadioGroup } from "@headlessui/react";
import { CartContext } from "../contexts/CartContext";
import { Alert, Container, Spinner } from "react-bootstrap";
import { PRODUCT_URL } from "../data/constants";
import { classNames } from "../helpers/utilityfuncs";

export const ProductDetails = () => {
  const { id } = useParams();
  const context = useContext(CartContext);
  const [show, setShow] = useState(false);
  const { data, isLoading, fetchData, cancelFetch } = useFetch(
    PRODUCT_URL + `/${id}.json`
  );
  const [selectedColor, setSelectedColor] = useState({});

  useEffect(() => {
    fetchData();
    return cancelFetch;
  }, []);

  const onsubmit = (e) => {
    e.preventDefault();
    context.addToCart(data);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 4000);
  };
  return (
    <Container>
      {isLoading && <Spinner animaton="grow" />}
      {data && (
        <div className="row align-items-center justify-content-between">
          {show && (
            <Alert
              className="py-2 m-2 justify-content-center"
              variant={"success"}
            >
              Successfully added!
            </Alert>
          )}
          <div className="col-md">
            <img
              src={data?.image_link}
              className="img-fluid responsive-img"
              alt=""
            />
          </div>
          <div className="col-md p-5">
            <h3 className="text-capitalize">
              {data?.brand} {data.name}
            </h3>
            <Rating
              name="half-rating-read"
              defaultValue={data?.rating}
              precision={0.5}
              readOnly
            />

            <h4 className="fs-3 mt-3">€{data?.price}</h4>
            <form>
              {/* Colors */}
              <div className="mt-2">
                <h4 className="text-sm text-gray-900 font-medium">Color</h4>
                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <div className=" items-start space-x-3 color-container ">
                    {data.product_colors?.map((color) => (
                      <RadioGroup.Option
                        key={color.colour_name}
                        value={color.hex_value}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            " rounded-full flex  cursor-pointer focus:outline-none  "
                          )
                        }
                      >
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 border border-black border-opacity-10 rounded-full color-choices"
                          style={{
                            backgroundColor: `${color.hex_value}`,
                          }}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-gray-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-800 customized-btn"
                onClick={onsubmit}
              >
                Add to bag
              </button>
            </form>
          </div>
          <div className="container">
            <div className="row-sd mt-3">
              <p className="fs-6">Description & Features</p>
              <p className="fs-6 text-justify">{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};
export default ProductDetails;
