import React, { memo, useState, useEffect } from 'react';
import Card from './Card';
import { getProductList } from './api';
import Loading from './Loading';
import Button from './Button/LoginButton';
import { range } from "lodash";
import { Link, useSearchParams } from 'react-router-dom';

function ProdectPage() {

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  let { query, sort, page } = params;

  query = query || '';
  sort = sort || "default";
  page = +page || 1;

  useEffect(() => {
    let sortBy;
    let sortType;

    if (sort == "title") {
      sortBy = "title";
    } else if (sort == "lowToHigh") {
      sortBy = "price";
    } else if (sort == "highToLow") {
      sortBy = "price";
      sortType = "desc";
    };

    getProductList(sortBy, query, page, sortType).then(response => {
      setProductData(response);
      setLoading(true);
    });
  }, [sort, query, page]);

  const onHandleSearch = e => {
    setSearchParams({ ...params, query: e.target.value, page: 1 });
  };

  const onHandleSort = e => {
    setSearchParams({ ...params, sort: e.target.value });
  };

  if (!loading) {
    return <Loading />;
  }

  return (
    <div className=" p-4 bg-gray-200 ">
      <div className="p-4 mx-auto bg-white max-w-6xl rounded-md drop-shadow-xl ">
        <h3 className="text-5xl text-center mb-5 sm:mb-0 font-medium text-red-500 ml-5">
          Shop
        </h3>
        <div className="flex flex-col justify-center items-center md:justify-between md:flex-row p-10 md:p-5 gap-4">
          <input
            className="py-2 pl-5 mx-12 md:flex-1 rounded-md border text-gray-500"
            placeholder="Search..."
            value={query}
            onChange={onHandleSearch}
          />
          <select
            className=" border  rounded-md border-gray text-xl py-1 font-medium px-6"
            value={sort}
            onChange={onHandleSort}
          >
            <option className="hidden" value="default">
              defaut setting
            </option>
            <option value="name">Sort by default</option>
            <option value="title">Sort by Name</option>
            <option value="lowToHigh">Sort by price: low to high</option>
            <option value="highToLow">Sort by Price: high to low</option>
          </select>
        </div>
        <div className="mx-auto grid md:grid-cols-3 items-center justify-center">
          {productData.data.length && productData.data.map(item => {
            return <Card {...item} key={item.id} />;
          })}
        </div>

        <div className="mt-3">
          {range(1, productData.meta.last_page + 1).map((pageNo) => (
            <Link
              key={pageNo}
              to={"?" + new URLSearchParams({ ...params, page: pageNo })}
              className={"px-6 py-1 m-2 rounded-md font-normal border-2 text-2xl text-white " + ((pageNo === page) ? "bg-red-500 border-red-700" : "bg-indigo-500 border-indigo-700")}
            >
              {pageNo}
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
}

export default memo(ProdectPage);

