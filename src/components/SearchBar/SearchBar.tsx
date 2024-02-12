import React, { ReactElement, useCallback, useState } from "react";
import { Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";

interface Props {
  onSearch: Function;
}

const SearchBar = ({ onSearch }: Props): ReactElement => {
  const [track, setTrack] = useState("");

  const handleTrackChange = useCallback(
    (e: any) => setTrack(e.target.value),
    [track]
  );

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      margin={2}
    >
      <TextField
        sx={{
          width: { xs: 260, sm: 300, md: 400, lg: 600 },
        }}
        label="Search for tracks"
        color="success"
        variant="filled"
        onChange={handleTrackChange}
        autoComplete="off"
        value={track}
      />

      <Button
        variant="contained"
        color="success"
        onClick={useCallback(() => onSearch(track), [onSearch, track])}
        sx={{
          opacity: "0.7",
        }}
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchBar;
