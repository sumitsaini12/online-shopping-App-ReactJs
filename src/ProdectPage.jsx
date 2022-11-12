import React, { memo, useState, useEffect } from 'react';
import Card from './Card';
import { getProductList } from './api';
import Loading from './Loading';
import { FiChevronsRight } from "react-icons/fi";


function ProdectPage() {
  console.log("Prodect Page is reruning 1SS");

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [num , setNum] = useState(0);

  useEffect(() => {
    const result = getProductList(num);

    result.then(response => {
      setProductList(response.data.products);
      setLoading(false);
    });
  }, [num, ""]);


  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('defaut');

  const data = productList.filter(item => {
    const lowerCaseTitle = item.title.toLocaleLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  const onHandleSearch = e => {
    setQuery(e.target.value);
  };

  const onHandleSort = e => {
    setSort(e.target.value);
  };

  if (sort == 'name') {
    data.sort((x, y) => {
      return x.title < y.title ? -1 : 1;
    });
  } else if (sort == 'latest') {
    data.sort((x, y) => {
      return x.title < y.title ? 1 : -1;
    });
  } else if (sort == 'low to high') {
    data.sort((x, y) => {
      return x.price - y.price;
    });
  } else if (sort == 'high to low') {
    data.sort((x, y) => {
      return y.price - x.price;
    });
  }
  if (loading) {
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
            <option className="hidden" value="defaut">
              defaut setting
						</option>
            <option value="name">Sort by Name</option>
            <option value="latest">Sort by latest</option>
            <option value="low to high">Sort by price: low to high</option>
            <option value="high to low">Sort by Price: high to low</option>
          </select>
        </div>
        <div className="mx-auto grid md:grid-cols-3 items-center justify-center">
          {data.map(item => {
            return <Card {...item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="space-x-4 -mb-12 ">
                <button onClick={() => setNum(0)} className="p-5 rounded-md border-2 border-gray-600 text-2xl font-bold hover:bg-gray-200 focus:bg-red-500 focus:text-white">1</button>

                <button onClick={() => setNum(30)} className="p-5 rounded-md border-2 border-gray-600 text-2xl font-bold hover:bg-gray-200 focus:bg-red-500 focus:text-white">2</button>

                <button onClick={() => setNum(60)} className="p-5 rounded-md border-2 border-gray-600 text-2xl font-bold hover:bg-gray-200 focus:bg-red-500 focus:text-white">3</button>

                <button onClick={() => setNum(90)} className="p-5 rounded-md border-2 border-gray-600 text-2xl font-bold hover:bg-gray-200 focus:bg-red-500 focus:text-white"><FiChevronsRight className="w-6 h-6" /></button>

            </div>
    </div>
  );
}

export default memo(ProdectPage);
