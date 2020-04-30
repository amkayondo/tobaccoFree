/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import "./navStyle.css";
import { useHistory } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

export default function NavgNav({
  pageName,
  componentMix,
}) {
  const history = useHistory();
  return (
    <div className="sdfsdfsaa">
      <div
        className="bsjdsdf"
        onClick={() => history.goBack()}
      >
        <ArrowLeft className="bkfnos" />
      </div>
      <div className="jsdu">
        {' '}
        { pageName }
      </div>
    </div>
  );
}
