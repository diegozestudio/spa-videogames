import React from "react";
import { useState } from "react";
import Card from "./Card";
import styles from "../styles/Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/actions";
import { ContCards } from "../styles/paginationstyles";

const renderData = (data) => {
  return data.map((v) => {
    return (
      <div key={v.id}>
        <Card name={v.name} image={v.image} genres={v.genres} id={v.id} />
      </div>
    );
  });
};

export default function Paginado({ videogames }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const [itemsPerPage, setitemsPerPage] = useState(15);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (e) => {
    dispatch(setCurrentPage(Number(e.target.id)));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(videogames.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = videogames.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number <= maxPageNumberLimit && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          onClick={handleClick}
          id={number}
          className={currentPage === number ? styles.active : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    dispatch(setCurrentPage(currentPage + 1));

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    dispatch(setCurrentPage(currentPage - 1));

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    if (itemsPerPage < 50) {
      setitemsPerPage(itemsPerPage + 5);
    }
    dispatch(setCurrentPage(1));
  };

  const handleLoadLess = () => {
    if (itemsPerPage > 5) {
      setitemsPerPage(itemsPerPage - 5);
    }
    dispatch(setCurrentPage(1));
  };

  return (
    <>
      <ContCards>{renderData(currentItems)}</ContCards>
      <ul className={styles.pageNumbers}>
        <button
          onClick={handlePrevbtn}
          disabled={currentPage === pages[0] ? true : false}
          className={styles.prev}
        >
          Prev
        </button>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <button
          onClick={handleNextbtn}
          disabled={currentPage === pages[pages.length - 1] ? true : false}
          className={styles.next}
        >
          Next
        </button>
      </ul>
      <div className={styles.contloaders}>
        <button onClick={handleLoadLess} className={styles.loadmore}>
          Mostrar menos
        </button>
        <button onClick={handleLoadMore} className={styles.loadmore}>
          Mostrar más
        </button>
      </div>
    </>
  );
}
