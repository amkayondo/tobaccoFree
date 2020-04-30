import React from 'react';
import "./navStyle.css";
import {
  Home as HomeIcon, Menu as MenuIcon,
  Compass as CompassIcon,
} from 'react-feather';

import { Link } from 'react-router-dom';

export default function BottomNav() {
  return (
    <div className="btmkds njdfnj">
      <Link to="/">
        <div className="ntabtn rght btneff">
          <div className="tbnticn"><HomeIcon /></div>
          <div className="tbinn">Home</div>
        </div>
      </Link>

      <Link to="/status">
        <div className="ntabtn md btneff">
          <div className="tbnticn">
            <CompassIcon />
          </div>
          <div className="tbinn">Status</div>
        </div>
      </Link>

      <Link to="/more">
        <div className="ntabtn lft btneff">
          <div className="tbnticn"><MenuIcon /></div>
          <div className="tbinn">More</div>
        </div>
      </Link>
    </div>
  );
}
