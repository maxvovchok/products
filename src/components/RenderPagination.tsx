import React from "react";
import { Pagination, Stack, Box, Typography } from "@mui/material";

interface Props {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

export const RenderPagination: React.FC<Props> = ({
  currentPage,
  totalPages,
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
      <Stack
        spacing={2}
        direction="row"
        sx={{
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, page) => goToPage(page)}
          color="primary"
          siblingCount={1}
          boundaryCount={1}
          showFirstButton
          showLastButton
          sx={{
            "& .MuiPaginationItem-root": {
              mx: { xs: 0.2, sm: 0.5 },
              fontSize: { xs: "0.75rem", sm: "1rem" },
              minWidth: { xs: "1.5rem", sm: "2rem" },
              minHeight: { xs: "1.5rem", sm: "2rem" },
            },
            "& .MuiPaginationItem-ellipsis": {
              fontSize: { xs: "0.75rem", sm: "1rem" },
            },
          }}
        />
      </Stack>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Page {currentPage} of {totalPages}
        </Typography>
      </Box>
    </Box>
  );
};
