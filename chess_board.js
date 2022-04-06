import React from "react";

function ChessBoard() {
    function ClcikedKnight(e) {
        var x = e.target.getAttribute("row");
        var y = e.target.getAttribute("col");

        x = parseInt(x);
        y = parseInt(y);
        var Id0 = (x).toString() + (y).toString();
        document.getElementById(Id0).style.background = "red";

        if (x + 2 >= 0 && y + 1 >= 0 && x + 2 < 8 && y + 1 < 8) {
            var Id1 = (x + 2).toString() + (y + 1).toString();
            document.getElementById(Id1).style.background = "rgb(81, 52, 121)";
        }

        if (x + 1 >= 0 && y + 2 >= 0 && x + 1 < 8 && y + 2 < 8) {
            var Id2 = (x + 1).toString() + (y + 2).toString();
            document.getElementById(Id2).style.background = "rgb(81, 52, 121)";
        }

        if (x - 1 >= 0 && y + 2 >= 0 && x - 1 < 8 && y + 2 < 8) {
            console.log("yes");
            var Id3 = (x - 1).toString() + (y + 2).toString();
            document.getElementById(Id3).style.background = "rgb(81, 52, 121)";
        }

        if (x - 2 >= 0 && y + 1 >= 0 && x - 2 < 8 && y + 1 < 8) {
            var Id4 = (x - 2).toString() + (y + 1).toString();
            document.getElementById(Id4).style.background = "rgb(81, 52, 121)";
        }

        if (x - 2 >= 0 && y - 1 >= 0 && x - 2 < 8 && y - 1 < 8) {
            var Id5 = (x - 2).toString() + (y - 1).toString();
            document.getElementById(Id5).style.background = "rgb(81, 52, 121)";
        }

        if (x - 1 >= 0 && y - 2 >= 0 && x - 1 < 8 && y - 2 < 8) {
            var Id6 = (x - 1).toString() + (y - 2).toString();
            document.getElementById(Id6).style.background = "rgb(81, 52, 121)";
        }

        if (x + 1 >= 0 && y - 2 >= 0 && x + 1 < 8 && y - 2 < 8) {
            var Id7 = (x + 1).toString() + (y - 2).toString();
            document.getElementById(Id7).style.background = "rgb(81, 52, 121)";
        }

        if (x + 2 >= 0 && y - 1 >= 0 && x + 2 < 8 && y - 1 < 8) {
            var Id8 = (x + 2).toString() + (y - 1).toString();
            document.getElementById(Id8).style.background = "rgb(81, 52, 121)";
        }
    }

    return (
        <div className="Board">
            <div className="chessboard">
                <div
                    onClick={ClcikedKnight}
                    row="0"
                    col="0"
                    className="white"
                    id="00"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="0"
                    col="1"
                    className="black"
                    id="01"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="0"
                    col="2"
                    className="white"
                    id="02"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="0"
                    col="3"
                    className="black"
                    id="03"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="0"
                    col="4"
                    className="white"
                    id="04"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="0"
                    col="5"
                    className="black"
                    id="05"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="0"
                    col="6"
                    className="white"
                    id="06"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="0"
                    col="7"
                    className="black"
                    id="07"
                ></div>

                <div
                    onClick={ClcikedKnight}
                    row="1"
                    col="0"
                    className="black"
                    id="10"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="1"
                    col="1"
                    className="white"
                    id="11"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="1"
                    col="2"
                    className="black"
                    id="12"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="1"
                    col="3"
                    className="white"
                    id="13"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="1"
                    col="4"
                    className="black"
                    id="14"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="1"
                    col="5"
                    className="white"
                    id="15"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="1"
                    col="6"
                    className="black "
                    id="16"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="1"
                    col="7"
                    className="white"
                    id="17"
                ></div>

                <div
                    onClick={ClcikedKnight}
                    row="2"
                    col="0"
                    className="white"
                    id="20"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="2"
                    col="1"
                    className="black"
                    id="21"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="2"
                    col="2"
                    className="white"
                    id="22"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="2"
                    col="3"
                    className="black"
                    id="23"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="2"
                    col="4"
                    className="white"
                    id="24"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="2"
                    col="5"
                    className="black"
                    id="25"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="2"
                    col="6"
                    className="white"
                    id="26"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="2"
                    col="7"
                    className="black"
                    id="27"
                ></div>

                <div
                    onClick={ClcikedKnight}
                    row="3"
                    col="0"
                    className="black"
                    id="30"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="3"
                    col="1"
                    className="white"
                    id="31"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="3"
                    col="2"
                    className="black"
                    id="32"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="3"
                    col="3"
                    className="white"
                    id="33"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="3"
                    col="4"
                    className="black"
                    id="34"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="3"
                    col="5"
                    className="white"
                    id="35"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="3"
                    col="6"
                    className="black"
                    id="36"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="3"
                    col="7"
                    className="white"
                    id="37"
                ></div>

                <div
                    onClick={ClcikedKnight}
                    row="4"
                    col="0"
                    className="white"
                    id="40"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="4"
                    col="1"
                    className="black"
                    id="41"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="4"
                    col="2"
                    className="white"
                    id="42"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="4"
                    col="3"
                    className="black"
                    id="43"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="4"
                    col="4"
                    className="white"
                    id="44"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="4"
                    col="5"
                    className="black"
                    id="45"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="4"
                    col="6"
                    className="white"
                    id="46"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="4"
                    col="7"
                    className="black"
                    id="47"
                ></div>

                <div
                    onClick={ClcikedKnight}
                    row="5"
                    col="0"
                    className="black"
                    id="50"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="5"
                    col="1"
                    className="white"
                    id="51"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="5"
                    col="2"
                    className="black"
                    id="52"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="5"
                    col="3"
                    className="white"
                    id="53"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="5"
                    col="4"
                    className="black"
                    id="54"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="5"
                    col="5"
                    className="white"
                    id="55"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="5"
                    col="6"
                    className="black"
                    id="56"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="5"
                    col="7"
                    className="white"
                    id="57"
                ></div>

                <div
                    onClick={ClcikedKnight}
                    row="6"
                    col="0"
                    className="white"
                    id="60"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="6"
                    col="1"
                    className="black"
                    id="61"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="6"
                    col="2"
                    className="white"
                    id="62"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="6"
                    col="3"
                    className="black"
                    id="63"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="6"
                    col="4"
                    className="white"
                    id="64"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="6"
                    col="5"
                    className="black"
                    id="65"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="6"
                    col="6"
                    className="white"
                    id="66"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="6"
                    col="7"
                    className="black"
                    id="67"
                ></div>

                <div
                    onClick={ClcikedKnight}
                    row="7"
                    col="0"
                    className="black"
                    id="70"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="7"
                    col="1"
                    className="white"
                    id="71"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="7"
                    col="2"
                    className="black"
                    id="72"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="7"
                    col="3"
                    className="white"
                    id="73"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="7"
                    col="4"
                    className="black"
                    id="74"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="7"
                    col="5"
                    className="white"
                    id="75"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="7"
                    col="6"
                    className="black"
                    id="76"
                ></div>
                <div
                    onClick={ClcikedKnight}
                    row="7"
                    col="7"
                    className="white"
                    id="77"
                ></div>
            </div>
        </div>
    );
}

export default ChessBoard;