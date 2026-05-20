const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

class SpotifyApi {
  constructor() {
    this._baseUrl = "https://api.spotify.com/v1";
    this._token = "";
  }

  async getToken() {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });
    const data = await response.json();
    this._token = data.access_token;
    return this._token;
  }

  async search(query) {
    if (!this._token) await this.getToken();

    const response = await fetch(
      `${this._baseUrl}/search?q=${query}&type=track,artist&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${this._token}`,
        },
      },
    );

    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(`Error: ${response.status}`);
  }
}

const spotifyApi = new SpotifyApi();
export default spotifyApi;
