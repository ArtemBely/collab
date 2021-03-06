import React from 'react';
import Header from './Header';
import Component1 from './Component1';
import Dialog from './Dialog';
import Pictures from './Pictures';
import Dialog2 from './Dialog2';
import Animation1 from './Animation1';
import Dialog3 from './Dialog3';
import Legal from './Legal';
import Countries from './Countries';
import Dialog4 from './Dialog4';
import Payment from './Payment';
import Prices from './Prices';
import Dialog5 from './Dialog5';
import Myself from './Myself';

class Main extends React.Component{
  render() {
    return(
      <div>
        <Header />
        <Component1 />
        <Dialog />
        <Pictures />
        <Dialog2 />
        <Animation1 />
        <Dialog3 />
        <Legal />
        <Countries />
        <Dialog4 />
        <Payment />
        <Prices />
        <Dialog5 />
        <Myself />
      </div>
    )
  }
}

export default Main;
