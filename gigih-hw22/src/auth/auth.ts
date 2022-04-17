type NewPlaylist = {
  name: string;
  description: string;
};

export const authSpotify = () => {
  const config = {
    client_id: "55ec1a3ca9a64bfa9720edac9915bf53",
    redirect_uri: "http://localhost:3000/",
    authorize_url: `https://accounts.spotify.com/authorize`,
    scope: [
      "user-read-email",
      "user-read-private",
      "playlist-modify-private",
      "playlist-read-private",
    ],
  };

  let redirectUrl = `${config.authorize_url}?client_id=${config.client_id}&response_type=token&redirect_uri=${config.redirect_uri}&scope=${config.scope}`;

  window.location.replace(redirectUrl);
};

export const getTracks = async (keyword: string, token: string) => {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${keyword}&type=track&limit=15`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const res = await response.json();
  const data = await res.tracks.items;
  return data;
};

export const getToken = () => {
  const hash = window.location.hash;
  let token = localStorage.getItem("token");

  if (!token && hash) {
    token = hash
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("access_token"))
      .split("=")[1];
    window.location.hash = "";
    localStorage.setItem("token", token);
  }
  return token;
};

export const getUserInfo = async (token: string) => {
  const response = await fetch("https://api.spotify.com/v1/me/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const userData = await response.json();
  return userData;
};

export const createPlaylist = async (
  id: string,
  playlistData: NewPlaylist,
  tracksToAdd: []
) => {
  const response = await fetch(
    `https://api.spotify.com/v1/users/${id}/playlists`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playlistData,
        description: playlistData,
        public: false,
      }),
    }
  );
  const playlist = await response.json();
  addTracks(playlist.id, tracksToAdd);
};

export const addTracks = async (id: string, tracks: []) => {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${id}/tracks`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: tracks,
      }),
    }
  );
};
