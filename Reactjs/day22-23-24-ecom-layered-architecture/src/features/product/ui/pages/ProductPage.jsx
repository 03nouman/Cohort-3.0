import React, { useEffect } from "react";
// import { useAllProduct } from "../../hooks/useProductHook";
const ProductPage = () => {
  //       let { data, isPending } = useAllProduct();

  // if (isPending) {
  //   return <h1> loading products...</h1>;
  // }

  useEffect(() => {
    getAllProductApi();
  }, []);

  return <div>ProductPage</div>;
};

export default ProductPage;
