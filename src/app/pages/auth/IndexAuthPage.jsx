import React, { Component } from 'react';
import '../../assets/css/auth.css';
import { Link } from 'react-router-dom';

export default function IndexAuthPage() {
  return (
    <div className="brht">
      <div className="lkhsdbka">
        <div className="imgdhf" />
      </div>
      <div className="txtjd">
        Tobacco Free
      </div>
      <div className="shdf">
        Show Reports
      </div>
      <div className="descvbg">
        Lets make our World free from
        Tobacco use by Reporting cases
      </div>
      <div className="kfkdfk">
        <Link to="/login">
          <button
            type="button"
            className="btn fs"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
