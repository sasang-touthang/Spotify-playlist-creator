//@ts-nocheck
var client_id: string = "b9021531a59f448285bfa08c941500ba";
var redirect_uri = "spotifyplaylistcreator.netlify.app";
export let accessToken: String;

export const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const access_token = window.location.href.match(/access_token=([^&]*)/);
    const expires_in = window.location.href.match(/expires_in=([^&]*)/);
    if (access_token && expires_in) {
      accessToken = access_token[1];
      const expirationTime: any = expires_in[1];
      window.setTimeout(() => {
        accessToken = "";
        history.pushState("Access Token", null, "/");
        location.reload();
      }, expirationTime * 1000);

      return accessToken;
    } else {
      var url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}&show_dialog=true`;
      window.location.href = url;
    }
  },

  async search(track: string) {
    const accessToken = this.getAccessToken();

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${track}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      if (!data.tracks) {
        return [];
      }

      return data.tracks.items.map((track: any) => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
    } catch (err) {
      console.log(err);
    }
  },

  async playlist(name: String, playlist) {
    const accessToken = this.getAccessToken();
    const userIdRequest = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userId = await userIdRequest.json();
    // console.log(userId.id);

    const createPlaylist = await fetch(
      `https://api.spotify.com/v1/users/${userId.id}/playlists`,
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const playlistId = await createPlaylist.json();

    const addTracksToPlaylist = await fetch(
      `
    https://api.spotify.com/v1/playlists/${playlistId.id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: playlist.map((track) => track.uri),
        }),
        method: "POST",
      }
    );
  },
};
