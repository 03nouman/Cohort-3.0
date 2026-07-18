import React, { useRef } from "react";

const AddProduct = () => {
  console.log("Form rendering");
  const formRef = useRef({});
  //   const productNameRef = useRef();
  //   const priceRef = useRef();
  //   const catRef = useRef();
  //   const imageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(productNameRef.current.value);
    // console.log(priceRef.current.value);
    // console.log(catRef.current.value);
    // console.log(imageRef.current.value);
    // console.log("form-ref ", formRef);
    console.log("product-name: ", formRef.current.productName.value);
    console.log("product-name: ", formRef.current.price.value);
    console.log("product-name: ", formRef.current.category.value);
    console.log("product-name: ", formRef.current.image.value);
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Name */}
          <div>
            <label
              htmlFor="productName"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>

            <input
              //   ref={productNameRef} // bad practice
              ref={(e) => (formRef.current.productName = e)}
              type="text"
              id="productName"
              placeholder="Enter product name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Price
            </label>

            <input
              //   ref={priceRef} //bad aprch
              ref={(e) => (formRef.current.price = e)}
              type="number"
              id="price"
              placeholder="Enter price"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Category
            </label>

            <select
              //   ref={catRef}
              ref={(e) => (formRef.current.category = e)}
              id="category"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="">Select Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>

            <input
              //   ref={imageRef}
              ref={(e) => (formRef.current.image = e)}
              type="text"
              id="image"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
