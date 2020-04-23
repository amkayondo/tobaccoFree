import React, { useContext } from 'react';
import { MyAuthContext } from '../../../context/AuthContext';
import BottomNav from '../../components/nav/BottomNav';
import TopNav from '../../components/nav/TopNav';


export default function IndexPage() {
  const context = useContext(MyAuthContext);
  return (
    <div className="hmdfa">
      <TopNav />
      index Page
      <BottomNav />
    </div>
  );
}
