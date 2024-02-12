import { Button } from "@mui/material";
import { Spotify } from "../../utils/utils";
import "./Authorization.css";

const Authorization = (): JSX.Element => {
  return (
    <div className="authorization">
      <h2>App needs authorization from Spotify. Please authorize</h2>
      <Button
        variant="contained"
        color="success"
        onClick={() => Spotify.getAccessToken()}
      >
        Authorize
      </Button>
    </div>
  );
};

export default Authorization;
