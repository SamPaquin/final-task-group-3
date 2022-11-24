import React, { useState } from "react";

import Muttley from "./Images/Muttley.png";
import Sam from "./Images/Sam.png";
import Tweety from "./Images/Tweety.png";
import "./Game.css";

const Game = () => {
  let [turn, setTurn] = useState("Tweety");
  let [timing, setTiming] = useState(1);
  let [tweetyFrozen, setTweetyFrozen] = useState(0);
  let [muttleyFrozen, setMuttleyFrozen] = useState(0);
  let [tweetyPosition, setTweetyPosition] = useState(1);
  let [muttleyPosition, setMuttleyPosition] = useState(1);
  let [cycleComplete, setCycleComplete] = useState(0);

  const turnHandler = () => {
    console.log("Timing Sequence: " + timing);
    if (turn === "Tweety") {
      if (tweetyFrozen === 1) {
        console.log("Tweety is frozen, turn skipped.");
        setTweetyFrozen(0);
        setTiming((timing += 1));
        setTurn("Muttley");
      } else {
        setTweetyPosition((tweetyPosition += 1));
        console.log("Tweety moved to space " + tweetyPosition + ".");
        if (tweetyPosition === 10) {
          console.log("Tweety is the Winner!");
          return;
        }
        setTiming((timing += 1));
        setTurn("Muttley");
      }
      return;
    }

    if (turn === "Muttley") {
      if (muttleyFrozen === 1) {
        console.log("Muttley is frozen, turn skipped.");
        setMuttleyFrozen(0);
        setTiming((timing += 1));
        setTurn("Yosemite Sam");
      } else {
        setMuttleyPosition((muttleyPosition += 1));
        console.log("Muttley moved to space " + muttleyPosition + ".");
        if (muttleyPosition === 10) {
          console.log("Muttley is the Winner!");
          return;
        }
        setTiming((timing += 1));
        setTurn("Yosemite Sam");
      }
      return;
    }

    if (turn === "Yosemite Sam") {
      setTiming((timing += 1));
      if (timing % 2 !== 0) {
        const randomIntFromInterval = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const randomPlayer = randomIntFromInterval(0, 1);
        if (randomPlayer === 0) {
          setTweetyFrozen(0);
          setTweetyFrozen(1);
          console.log("Tweety was frozen!");
        } else {
          setMuttleyFrozen(0);
          setMuttleyFrozen(1);
          console.log("Muttley was frozen!");
        }
      } else {
        console.log("Yosemite Sam's freeze gun jammed!");
      }

      setCycleComplete(1);
      setTurn("Tweety");
      return;
    }
  };

  if (cycleComplete === 1) {
    console.log("---------------------------------------------------");
    console.log("Cycle Report:");
    if (tweetyFrozen === 1) {
      console.log("Tweety Status: Frozen");
    } else {
      console.log("Tweety Status: Not Frozen");
    }

    if (muttleyFrozen === 1) {
      console.log("Muttley Status: Frozen");
    } else {
      console.log("Muttley Status: Not Frozen");
    }

    console.log("Tweety is at space " + tweetyPosition);
    console.log("Muttley is at space " + muttleyPosition);
    console.log("---------------------------------------------------");
    setCycleComplete(0);
  }

  return (
    <div className="game">
      <div className="top-section">
        <div className="frozen-message">{tweetyFrozen ? "Tweety was FROZEN!" : <span/>}</div>
        <div>
          <img className="sam" src={Sam} alt="Sam" />
        </div>
        <div className="frozen-message">{muttleyFrozen ? "Muttley was FROZEN!" : <span/>}</div>
      </div>
      <div className="track">
        <div className="label">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
        <div className="tweety-track">
          <div>
            {tweetyPosition === 1 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {tweetyPosition === 2 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {tweetyPosition === 3 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {tweetyPosition === 4 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {tweetyPosition === 5 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {tweetyPosition === 6 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {tweetyPosition === 7 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {tweetyPosition === 8 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {tweetyPosition === 9 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {tweetyPosition === 10 ? (
              <img className="characters" src={Tweety} alt="Tweety" />
            ) : (
              <span />
            )}
          </div>
        </div>
        <div className="muttley-track">
          <div>
            {muttleyPosition === 1 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {muttleyPosition === 2 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {muttleyPosition === 3 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {muttleyPosition === 4 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {muttleyPosition === 5 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {muttleyPosition === 6 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {muttleyPosition === 7 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {muttleyPosition === 8 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {muttleyPosition === 9 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
          <div>
            {muttleyPosition === 10 ? (
              <img className="characters" src={Muttley} alt="Muttley" />
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
      {tweetyPosition === 10 || muttleyPosition === 10 ? (
        <div className="game-over">Game Over!</div>
      ) : (
        <button className="turn-button" onClick={turnHandler}>
          Next Turn
        </button>
      )}
      {tweetyPosition === 10 ? <div className="winner">Tweety is the Winner!</div> : <div></div>}
      {muttleyPosition === 10 ? <div className="winner">Muttley is the Winner!</div> : <div></div>}
    </div>
  );
};

export default Game;
