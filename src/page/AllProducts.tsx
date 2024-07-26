import { RenderProducts } from "../components/RenderProducts";
import { usePagination } from "../components/usePagination";
import { RenderPagination } from "../components/RenderPagination";

export const AllProducts = () => {
  const { currentPage, totalPages, products, nextPage, prevPage, goToPage } =
    usePagination(10);

  return (
    <div>
      <RenderProducts products={products} />
      <RenderPagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={goToPage}
      />
    </div>
  );
};
