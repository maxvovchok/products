import React from "react";
import { Pagination, Stack, Box, Typography } from "@mui/material";

interface Props {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
}

export const RenderPagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  goToPage,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        mb: 4,
      }}
    >
      <Stack spacing={2} direction="row">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, page) => goToPage(page)}
          color="primary"
          siblingCount={1}
          boundaryCount={1}
          showFirstButton
          showLastButton
          sx={{
            "& .MuiPaginationItem-root": {
              mx: 0.5,
              fontSize: { xs: "0.75rem", sm: "1rem" },
            },
            "& .MuiPaginationItem-ellipsis": {
              fontSize: { xs: "0.75rem", sm: "1rem" },
            },
          }}
        />
      </Stack>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Page {currentPage} of {totalPages}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
            fontSize: "1rem",
            marginRight: "auto",
          }}
        >
          &laquo; Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
            fontSize: "1rem",
            marginLeft: "auto",
          }}
        >
          Next &raquo;
        </button>
      </Box>
    </Box>
  );
};
