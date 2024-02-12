//@ts-nocheck
import { useCallback, ReactElement, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import { Spotify } from "../../utils/utils";
import { Stack } from "@mui/material";
import PlayList from "../Playlist/PlayList";

const Home = (): ReactElement => {
  const [searchResult, setSearchResutl] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [playListName, setPlayListName] = useState("Playlist Name");

  const search = useCallback(async (track: string) => {
    const response = await Spotify.search(track);
    setSearchResutl(response);
  }, []);

  const handleOnAdd = useCallback(
    (track) => {
      if (playList.some((savedTrack) => savedTrack.id === track.id)) {
        return;
      }
      setPlayList((prevState) => [...prevState, track]);
    },
    [playList]
  );

  const handleOnRemove = useCallback(
    (track) => {
      setPlayList((prevState) =>
        prevState.filter((savedTrack) => savedTrack.id !== track?.id)
      );
    },
    [playList]
  );

  const updatePlaylist = useCallback((name: String) => {
    setPlayListName(name);
  }, []);

  const handlePlaylist = useCallback(() => {
    const response = Spotify.playlist(playListName, playList);
    setPlayList([]);
    setPlayListName("");
  }, [playListName, playList]);

  return (
    <Stack>
      <SearchBar onSearch={search} />
      <Stack
        sx={{
          margin: "1rem",
          fontSize: { xs: "1rem", sm: "1.4rem" },
          fontFamily: "monospace",
        }}
        direction={{ xs: "column", sm: "column", md: "row" }}
        alignItems={{ xs: "center", sm: "start" }}
      >
        {searchResult.length ? (
          <SearchResult searchResult={searchResult} onAdd={handleOnAdd} />
        ) : (
          ""
        )}
        {playList.length ? (
          <PlayList
            playListName={playListName}
            onNameChange={updatePlaylist}
            playList={playList}
            handlePlaylist={handlePlaylist}
            onRemove={handleOnRemove}
          />
        ) : (
          ""
        )}
      </Stack>
    </Stack>
  );
};

export default Home;
