import React from 'react'
import ChessBoard from './ChessBoard';

function App() {
    return (
        <div style={{ backgroundColor: "grey", textAlign: "center", fontFamily: "cursive" }}>
            <h2 style={{ fontWeight: "500" }}>Choose a current position for knight and it will find all the possible places where the knight can move!!</h2>
            <ChessBoard />
        </div>
    );
}

export default App;