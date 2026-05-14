function MusicCard({ song }) {
  return (
    <div className="music-card">
      <img
        src={song.album.images[0].url}
        alt={song.name}
        className="music-card__image"
      />
      <div className="music-card__info">
        <h3 className="music-card__title">{song.name}</h3>
        <p className="music-card__artist">{song.artists[0].name}</p>
      </div>
    </div>
  );
}

export default MusicCard;
