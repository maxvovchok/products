import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type Review = {
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
};

type Props = {
  reviews: Review[];
};

export const Reviews = ({ reviews }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: 4, px: isMobile ? 2 : 4 }}>
      <Typography variant="h4" gutterBottom>
        Reviews
      </Typography>
      <List>
        {reviews.map((el, index) => (
          <Box key={index} sx={{ mb: isMobile ? 2 : 3 }}>
            <ListItem
              alignItems="flex-start"
              sx={{ flexDirection: isMobile ? "column" : "row" }}
            >
              <ListItemText
                primary={
                  <Typography variant="h6" component="span">
                    {el.reviewerName}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      color="textPrimary"
                    >
                      Rating: {el.rating}
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      color="textSecondary"
                    >
                      {el.comment}
                    </Typography>
                    <br />
                    <Typography
                      variant="caption"
                      component="span"
                      color="textSecondary"
                    >
                      {el.date}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
};
