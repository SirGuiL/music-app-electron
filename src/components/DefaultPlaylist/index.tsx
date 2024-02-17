import "./styles.css";

interface DefaultPlaylistProps {
  description: string;
  title: string;
  time: string;
  style?: any;
}

export const DefaultPlaylist = (props: DefaultPlaylistProps) => {
  return (
    <div className="playlist-container" style={props.style}>
      <div className="shadow">
        <span className="playlist-description">{props.description}</span>

        <footer>
          <h1>{props.title}</h1>

          <time>{props.time}</time>
        </footer>
      </div>
    </div>
  );
};
