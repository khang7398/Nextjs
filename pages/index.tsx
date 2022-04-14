import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          illo aut quibusdam aliquam necessitatibus? Soluta blanditiis, numquam
          neque eveniet repellendus dicta sequi enim tempora nulla totam
          consectetur voluptatibus itaque minus.
        </p>
      </div>
    </>
  );
};

export default Home;
