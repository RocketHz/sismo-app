const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700">
        Cartas del{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {(currentPage - 1) * 10 + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {Math.min(currentPage * 10, totalPages * 10)}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalPages * 10}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={onPrev}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={onNext}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
