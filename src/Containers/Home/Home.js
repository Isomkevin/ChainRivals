import React, { useState } from "react";
import styles from "./Home.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import { ReactComponent as GitHubLogo } from "../../Resources/image/githublogo.svg";
import { ReactComponent as Enter } from "../../Resources/image/enter.svg";
import { ReactComponent as Dice } from "../../Resources/image/dice.svg";
import { ReactComponent as LinkedIn } from "../../Resources/image/linkedin.svg";
import { ReactComponent as Game } from "../../Resources/image/game.svg";
import { ReactComponent as NotFound } from "../../Resources/image/notfound.svg";
import { ReactComponent as NotFoundQuery } from "../../Resources/image/notfoundquery.svg";
import { ReactComponent as Git } from "../../Resources/image/git.svg";
import { ReactComponent as Performance } from "../../Resources/image/performance.svg";
import { ReactComponent as Sources } from "../../Resources/image/sources.svg";
import { motion, AnimatePresence, m } from "framer-motion";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import AnimatedScroll from "../AnimatedPage/AnimatedScroll";
import games from "../../utils/challenges";

const Home = (props) => {
  const {
    shownGames,
    cartAmount,
    cart,
    cartDisplayed,
    handleOpenCart,
    handleCloseCart,
    clearCart,
    handleRemoveFromCart,
    hoverState,
    setHoverState,
    overlap,
    setOverlap,
    openGamePage,
  } = props;

  const [browsing, setBrowsing] = useState(false);
  const [landingPage, setLandingPage] = useState(true);

  const navigate = useNavigate();

  const handleHover = (e) => {
    let newHoverState = hoverState[e.target.id];
    newHoverState.hovered = !newHoverState.hovered;

    setHoverState([...hoverState, (hoverState[e.target.id] = newHoverState)]);
  };

  const handleBrowse = () => {
    setOverlap(true);
    setTimeout(() => {
      setBrowsing(true);
      navigate("/chain-rivals/browse");
    }, 1500);
  };

  const handleHome = () => {
    setBrowsing(false);
    navigate("/");
  };

  const handleNavGamePage = () => {
    setHoverState([...hoverState, (hoverState[21].hovered = false)]);
    navigate("/chain-rivals/challenges/riseofthetombraider");
  };

  const handleNavNotFoundPage = () => {
    navigate("/chain-rivals/this-page");
  };

  const handleNavNotFoundQuery = () => {
    navigate("/chain-rivals/challenges/404");
  };

  const handlePlayDice = () => {
    let randomIndex = Math.floor(Math.random() * 32);
    let randomSurname = games[randomIndex].surname;
    setOverlap(true);
    setTimeout(() => {
      setBrowsing(true);
      navigate(`/chain-rivals/challenges/${randomSurname}`);
    }, 1500);
  };

  const variants = {
    hidden: { opacity: 1, x: -150 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 150 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 900 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { y: { type: "tween", duration: 1.5, bounce: 0.3 } },
    },
  };

  return (
    <div className={styles.main}>
      {overlap ? (
        <motion.div
          className={styles.overlap}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      ) : null}

      {cartDisplayed ? (
        <Cart
          cartDisplayed={cartDisplayed}
          handleOpenCart={handleOpenCart}
          handleCloseCart={handleCloseCart}
          cart={cart}
          cartAmount={cartAmount}
          handleHover={handleHover}
          hoverState={hoverState}
          clearCart={clearCart}
          handleRemoveFromCart={handleRemoveFromCart}
          openGamePage={openGamePage}
        />
      ) : null}
      <div className={styles.home}>
        <video autoPlay muted loop className={styles.video}>
          <source
            src={require("../../Resources/image/pyke.mp4")}
            type="video/mp4"
          />
        </video>

        <NavBar
          handleHover={handleHover}
          hoverState={hoverState}
          browsing={browsing}
          handleBrowse={handleBrowse}
          handleHome={handleHome}
          landingPage={landingPage}
          cartAmount={cartAmount}
          handleOpenCart={handleOpenCart}
          handleCloseCart={handleCloseCart}
        />
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.splash}>
              <h1>Chain Rivals</h1>
              <p className={styles.intro}>
                The ultimate arena for smart contract warriors. Compete in
                security and optimization battles, climb the leaderboard, and
                earn your place through code. ⛓️ On-chain rep. 🔥 Real bounties.
                🧠 AI-verified fairness. Want in? Step into the{" "}
                <span className={styles.here}>arena</span> — or join the
                <span className={styles.careers}>mission.</span>
              </p>
            </div>

            <div className={styles.buttons}>
              <button
                className={`${styles.cta} ${styles.browseBtn}`}
                onClick={handleBrowse}
                aria-label="Browse"
              >
                <Enter className={styles.ctaSVG} />
                Browse
              </button>
              <button
                className={styles.cta}
                onClick={handlePlayDice}
                aria-label="Open Random Challenge"
              >
                <Dice className={styles.ctaSVG} />
                Pick a Random
              </button>
              <a
                href="https://github.com/Isomkevin/ChainRivals"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.cta} aria-label="View Repository">
                  <GitHubLogo className={styles.ctaSVG} />
                  GitHub
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-isom-a58bb3201/"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className={`${styles.cta} ${styles.lastChild}`}
                  aria-label="Open LinkedIn"
                >
                  <LinkedIn className={`${styles.ctaSVG} ${styles.linkedin}`} />
                  <span>LinkedIn</span>
                </button>
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.buttonsRight}>
              <h2>Quick Navigation</h2>
              <button
                className={styles.cta}
                onClick={handleNavGamePage}
                aria-label="Open a Challenge page"
              >
                <Game className={styles.ctaSVG} />
                Game Page
              </button>
              <button
                className={styles.cta}
                onClick={handleNavNotFoundPage}
                aria-label="Open 404 page"
              >
                <NotFound className={styles.ctaSVG} />
                404 Page
              </button>
              <button
                className={`${styles.cta} ${styles.lastChild}`}
                onClick={handleNavNotFoundQuery}
                aria-label="open 404 query page"
              >
                <NotFoundQuery className={`${styles.ctaSVG}`} />
                404 Query
              </button>
              <a
                href="https://github.com/Isomkevin/ChainRivals/commits/main"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.cta} aria-label="Open commit log">
                  <Git className={styles.ctaSVG} />
                  Commit Log
                </button>
              </a>
              <a
                href="https://github.com/Isomkevin/ChainRivals/blob/main/README.md#performance"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className={`${styles.cta} ${styles.lastChild}`}
                  aria-label="Open performance test results"
                >
                  <Performance className={`${styles.ctaSVG}`} />
                  Performance
                </button>
              </a>
              <a
                href="https://github.com/Isomkevin/ChainRivals/blob/main/README.md#technologies-used"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className={`${styles.cta} ${styles.lastChild}`}
                  aria-label="View technologies used"
                >
                  <img
                    className={styles.technologies}
                    src={require("../../Resources/image/whatruns.png")}
                    alt="WhatRuns logo"
                  />
                  Technologies
                </button>
              </a>
              <a
                href="https://github.com/Isomkevin/ChainRivals/blob/main/README.md#sources"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className={`${styles.cta} ${styles.lastChild}`}
                  aria-label="View Sources"
                >
                  <Sources className={`${styles.ctaSVG}`} />
                  Our Sources
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
