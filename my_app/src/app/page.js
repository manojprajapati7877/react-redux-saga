"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "./redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  let result = useSelector((state) => state.productData);
  console.log("*******result", result);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <>
      {result.map((item) => (
        <>
          <div className="col-lg-3 col-md-3 col-sm-4 col-md-4 col-sm-3 col-xs-2 mix new-arrivals">
            <div className="product__item">
              <div
                className="product__item__pic"
                // data-setbg={item.photo}
              >
                <img src={item.photo} />
                <span className="label">New</span>
                <ul className="product__hover">
                  <li>
                    <a href="#">
                      <img src="img/icon/heart.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/compare.png" alt="" />{" "}
                      <span>Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/icon/search.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>{item.name}</h6>
                <button
                  className="add-cart"
                  onClick={() =>
                    dispatch(
                      addToCart(item),
                      toast.success("Item added to cart!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      })
                    )
                  }
                >
                  + Add To Cart
                </button>
                <div className="rating">
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <h5>RS. {item.price}.00</h5>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
