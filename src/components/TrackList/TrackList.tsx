//@ts-nocheck
import Track from "../Track/Track";
import { Container } from "@mui/material";

type Tracklist = {
  searchResult: [];
  onAdd: () => void;
  onRemove: () => void;
};

const TrackList = ({ searchResult, onAdd, onRemove }: Tracklist) => {
  return (
    <Container
      sx={{
        marginBottom: "1rem",
        width: { xs: "360px", sm: "450px", md: "400px", lg: "600px" },
        marginTop: "0.5rem",
      }}
    >
      {searchResult.map(
        (track: {
          id: String;
          name: String;
          album: String;
          artist: String;
        }) => (
          <Track
            key={track.id}
            track={track}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        )
      )}
    </Container>
  );
};

export default TrackList;
