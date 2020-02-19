import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: 'black'
  },

  winery: {
    textAlign: "center",
    color: 'grey'
  }
})
const WineTile = ({ wine }) => {
  console.log(wine)
  return (
      <div className="card" style={{width: "18rem", margin: 10}}>
        <img className="card-img-top" src="https://images.unsplash.com/photo-1554230561-31bdc707b537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Card image cap" />
        <div className="card-body">
          <h5 className={`card-text ${css(styles.title)}`}>{wine.title}</h5>
          <h5 className={`card-text ${css(styles.winery)}`}>{wine.winery}</h5>
        </div>
      </div>
  )
}

export default WineTile;
