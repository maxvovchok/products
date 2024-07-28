import { RenderProducts } from "../components/Products";
import { usePagination } from "../components/castomHooks.tsx/usePagination";
import { RenderPagination } from "../components/Pagination";

export const AllProducts = () => {
  const { currentPage, totalPages, products, goToPage } = usePagination(10);

  return (
    <div>
      <RenderProducts products={products} />
      <RenderPagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </div>
  );
};
