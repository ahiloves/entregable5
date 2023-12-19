const Pagination = ({ lastPage, pagesInCurrentBlock, secCurrentPage, currentPage }) => {
  const handleLastPage = () => {
    secCurrentPage(lastPage);
  };
  const handleFirstPage = () => {
    secCurrentPage(1);
  };
  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= lastPage) {
      secCurrentPage(nextPage);
    }
  };
  const handlePreviusPage = () => {
    const previusPage = currentPage - 1;
    if (previusPage > 0) {
      secCurrentPage(previusPage);
    }
  };
    return (
      <ul className="pb-4 text-lg flex gap-2 justify-center font-bold [&>li]:grid [&>li] flex-wr">
          <li>
            <button onClick={handleFirstPage} className="p-2 rounded-md bg-red-200 hover:bg-red-500 hover:text-white">
                {"<<"}
            </button>
          </li>
          <li>
            <button onClick={handlePreviusPage} className="p-2 rounded-md bg-red-200 hover:bg-red-500 hover:text-white">
                {"<"}
            </button>
          </li>
          {
             pagesInCurrentBlock.map((page) => (
              <li key={page}>
                  <button onClick={() => secCurrentPage (page)} className={`p-2 bg-red-200 rounded-md hover:bg-red-500 hover:text-white transition-colors ${page === currentPage ? "bg-red-500 text-white" : "bg-red-200"}`}>{page}</button>
              </li>
             )) 
          }
          <li>
            <button onClick={handleNextPage} className="p-2 rounded-md bg-red-200 hover:bg-red-500 hover:text-white">
                {">"}
            </button>
          </li>
          <li>
            <button onClick={handleLastPage} className="p-2 rounded-md bg-red-200 hover:bg-red-500 hover:text-white">
                {">>"}
            </button>
          </li>
      </ul>
    )
  };
  
  export default Pagination;