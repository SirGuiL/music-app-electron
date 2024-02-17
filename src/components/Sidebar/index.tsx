import {
  ClockCounterClockwise,
  Compass,
  Gear,
  Heart,
  House,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { Logo } from "../Logo";
import "./styles.css";

export const Sidebar = () => {
  return (
    <aside>
      <Logo />

      <div className="pages">
        <button className="sidebar-btn">
          <House size={18} color="#C2B6B6" />
        </button>

        <button className="sidebar-btn">
          <MagnifyingGlass size={18} color="#C2B6B6" />
        </button>

        <button className="sidebar-btn">
          <Compass size={18} color="#C2B6B6" />
        </button>

        <button className="sidebar-btn">
          <Heart size={18} color="#C2B6B6" />
        </button>

        <button className="sidebar-btn">
          <ClockCounterClockwise size={18} color="#C2B6B6" />
        </button>
      </div>

      <footer>
        <button className="sidebar-btn">
          <Gear size={18} color="#C2B6B6" />
        </button>
      </footer>
    </aside>
  );
};
