//@ts-nocheck
import { Button, Stack } from "@mui/material";
import { Divider } from "@mui/material";

type Track = {
  track: { name: String; album: String; artist: String };
  onAdd: () => void;
  onRemove: () => void;
};

const Track = ({ track, onAdd, onRemove }: Track) => {
  const render = () => {
    if (onRemove) {
      return (
        <Button
          sx={{
            cursor: "pointer",
            padding: ".5rem",
            fontSize: "1.5rem",
            transition: "color .25s",
            border: "0px",
            backgroundColor: "rgb(60, 179, 113, 0.2)",
          }}
          onClick={() => onRemove(track)}
        >
          -
        </Button>
      );
    }

    if (onAdd) {
      return (
        <Button
          sx={{
            cursor: "pointer",
            padding: ".5rem",
            fontSize: "1.5rem",
            transition: "color .25s",
            border: "0px",
            backgroundColor: "rgb(60, 179, 113, 0.2)",
          }}
          onClick={() => onAdd(track)}
        >
          +
        </Button>
      );
    }
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ margin: "0.5rem 0" }}
      >
        <Stack>
          <h3>{track.name}</h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </Stack>
        {render()}
      </Stack>
      <Divider />
    </>
  );
};

export default Track;
