import React from "react";
import Track from "../Track/Track";
import { Container } from "@mui/material";

const TrackList = ({ searchResult, onAdd, onRemove }) => {
  return (
    <Container
      sx={{
        marginBottom: "1rem",
        width: { xs: "360px", sm: "450px", md: "400px", lg: "600px" },
        marginTop: "0.5rem",
      }}
    >
      {searchResult.map((track) => (
        <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </Container>
  );
};

export default TrackList;
