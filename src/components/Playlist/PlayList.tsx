import React, { useCallback } from "react";
import TrackList from "../TrackList/TrackList";
import { Button, Divider, Stack } from "@mui/material";

const PlayList = ({
  playList,
  onRemove,
  playListName,
  onNameChange,
  handlePlaylist,
}) => {
  const handleNameChange = useCallback((e) => {
    onNameChange(e.target.value);
  });

  return (
    <Stack
      sx={{
        margin: "1rem",
        backgroundImage:
          "linear-gradient(to right, rgba(60, 179, 113, 0.6), rgba(255, 165, 0, 0.6))",
        // backgroundFilter: "blur(10px)",
        boxShadow: "5px 5px 10px rgba(30,30,30,0.5)",
        borderRadius: "10px",
      }}
    >
      <input
        type="text"
        value={playListName}
        onChange={handleNameChange}
        style={{
          marginLeft: "1rem",
          marginTop: "1rem",
          background: "transparent",
          border: "none",
          outline: "none",
          fontSize: "1.5em",
          fontFamily: "monospace",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      />
      <Divider />
      <TrackList searchResult={playList} onRemove={onRemove} />
      <Button
        variant="contained"
        color="success"
        sx={{
          opacity: "0.7",
          padding: "0.7rem",
          fontSize: "1.1rem",
          margin: "0.5rem 1rem",
        }}
        onClick={handlePlaylist}
      >
        Save
      </Button>
    </Stack>
  );
};

export default PlayList;
