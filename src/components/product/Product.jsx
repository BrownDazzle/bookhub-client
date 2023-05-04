import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toprateslaes } from "../../data/data";
import styles from "./Product.module.scss";
import ProductFilter from "./productFilter/ProductFilter";
import ProductList from "./productList/ProductList";
import spinnerImg from "../../assets/1.png";
import { FaCogs } from "react-icons/fa";

const Product = () => {
  const { items } = toprateslaes
  const [showFilter, setShowFilter] = useState(false);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );

    dispatch(
      GET_PRICE_RANGE({
        products: data,
      })
    );
  }, [dispatch, data]);
*/
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside
          className={
            showFilter ? `${styles.filter} ${styles.show}` : `${styles.filter}`
          }
        >
          {isLoading ? null : <ProductFilter />}
        </aside>
        <div className={styles.content}>
          {isLoading ? (
            <img
              src={spinnerImg}
              alt="Loading.."
              style={{ width: "50px" }}
              className="--center-all"
            />
          ) : (
            <ProductList products={products} />
          )}
          <div className={styles.icon} onClick={toggleFilter}>
            <FaCogs size={20} color="rgb(255, 217, 0)" />
            <p>
              <b>{showFilter ? "Hide Filter" : "Show Filter"}</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
