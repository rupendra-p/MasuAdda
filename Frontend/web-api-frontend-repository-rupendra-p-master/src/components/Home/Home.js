import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products} = useSelector(state => state.products)

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
    dispatch(getProduct())
  }, [dispatch, error, alert])
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="MasuAdda" />
          <div className="banner">
            <h2>Welcome to MasuAdda</h2>
            <h1>With this website you can find all kind of non-veg item as per your desire</h1>

           
          </div>

          <h1 className="homeHeading">All Products You Choose</h1>

          <div className="container" id="productContainer">
            {products && products.map(product => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;