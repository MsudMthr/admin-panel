import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useTitle from "./../hook/useTitle";
//functions
import { joinTitle, slugSplitter } from "../helper/function";
//components
import Loading from "./Loading";
import TransporterButton from "../components/TransporterButton";
import DeleteButton from "../components/DeleteButton";
import DataDeleted from "../components/DataDeleted";
import PutProduct from "../components/PutProduct";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeletedData, setIsDeletedData] = useState(false);
  const [isShowPutForm, setIsShowPutForm] = useState(false);

  const { title } = useParams();

  useEffect(() => {
    axios.get(`/products/${joinTitle(title)}`).then((response) => {
      setProduct(response.data.data);
      setIsLoading(false);
    });
  }, []);
  const { category, role, price, createdBy, slug } = product;
  useTitle(title, product);
  return (
    <div className="mx-auto w-11/12 ">
      <div className="my-2 flex justify-between">
        <button
          onClick={() => setIsShowPutForm(true)}
          className=" rounded bg-slate-800 px-2 py-1 font-bold text-white transition focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2 md:ml-0"
        >
          Update Product
        </button>
        <DeleteButton
          data={"products"}
          id={joinTitle(title)}
          setIsDeletedData={setIsDeletedData}
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isDeletedData ? (
            <DataDeleted data={"Product"} />
          ) : (
            <>
              <div className="mt-6 flex  flex-wrap gap-3 rounded bg-slate-300 px-3 py-5 shadow-inner">
                <p className="dataDetail">
                  <span className="mr-1 opacity-60">Name :</span>
                  {title}
                </p>
                <p className="dataDetail">
                  <span className="mr-1 opacity-60">CreatedBy :</span>
                  {createdBy.name}
                </p>
                <p className="dataDetail">
                  <span className="mr-1 opacity-60">Category :</span>
                  {category.name}
                </p>
                <p className="dataDetail">
                  <span className="mr-1 opacity-60">Price :</span>
                  {price}
                </p>
                <p className="dataDetail">
                  <span className="mr-1 opacity-60">Tags :</span>
                  {slugSplitter(slug)}
                </p>
              </div>
              {isShowPutForm && (
                <PutProduct setIsShowPutForm={setIsShowPutForm} title={title} />
              )}
            </>
          )}
          <TransporterButton />
        </>
      )}
    </div>
  );
};

export default ProductDetails;
