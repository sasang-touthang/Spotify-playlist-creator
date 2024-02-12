//@ts-nocheck
import TrackList from "../TrackList/TrackList";
import { Divider, Stack } from "@mui/material";

type Searchresult = {
  searchResult: [];
  onAdd: () => void;
};

const SearchResult = ({ searchResult, onAdd }: Searchresult) => {
  return (
    <Stack
      sx={{
        margin: { md: "1rem" },
        backgroundImage:
          "linear-gradient(to right, rgba(60, 179, 113, 0.6), rgba(255, 165, 0, 0.6))",
        // backgroundFilter: "blur(10px)",
        boxShadow: "5px 5px 10px rgba(30,30,30,0.5)",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ marginLeft: "1rem", marginTop: "1rem" }}>Results</h2>
      <Divider />
      <TrackList searchResult={searchResult} onAdd={onAdd} />
    </Stack>
  );
};

export default SearchResult;
