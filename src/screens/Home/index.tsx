import { Bell } from "@phosphor-icons/react";
import "./styles.css";
import { DefaultPlaylist } from "../../components/DefaultPlaylist";

export const Home = () => {
  return (
    <div className="home">
      <header>
        <h1 className="title roboto-regular">Home</h1>

        <button className="notification-btn">
          <Bell size={18} color="#C2B6B6" weight="fill" />
        </button>
      </header>

      <main>
        <div className="default-playlists">
          <DefaultPlaylist
            description="Best electronic songs of February 2024"
            title="Neon vibes"
            time="Februry, 2024"
          />

          <DefaultPlaylist
            description="Best hip-hop songs of February 2024"
            title="Mars station"
            time="Februry, 2024"
            style={{
              background:
                "linear-gradient(125deg, #241721, #40152A, #741630, #CC1E2C, #FF5435)",
            }}
          />

          <DefaultPlaylist
            description="Best rock songs of February 2024"
            title="Jupiter station"
            time="Februry, 2024"
            style={{
              background:
                "linear-gradient(125deg, #DDBCA6, #CEA589, #CEA589, #C17D6B, #C17D6B, #946956)",
            }}
          />

          <DefaultPlaylist
            description="Best electronic songs of February 2024"
            title="Neon vibes"
            time="Februry, 2024"
          />

          <DefaultPlaylist
            description="Best hip-hop songs of February 2024"
            title="Mars station"
            time="Februry, 2024"
            style={{
              background:
                "linear-gradient(125deg, #241721, #40152A, #741630, #CC1E2C, #FF5435)",
            }}
          />

          <DefaultPlaylist
            description="Best rock songs of February 2024"
            title="Jupiter station"
            time="Februry, 2024"
            style={{
              background:
                "linear-gradient(125deg, #DDBCA6, #CEA589, #CEA589, #C17D6B, #C17D6B, #946956)",
            }}
          />
        </div>
      </main>
    </div>
  );
};
