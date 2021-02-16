import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container">
      <header>
        <img src="/img/logo.png" alt="logo" />
        <ul>
          <li>Produtos</li>
          <li>Sobre nós</li>
          <li>Videos</li>
          <li>Onde Comprar</li>
        </ul>
        <Link href='https://www.ifood.com.br/delivery/jatai-go/minus-distribuidora-setor-colinas/39295f24-43f0-45f6-92c9-17b187069845?UTM_Medium=share'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img src="/img/basket.svg" alt="" />
            <div className="circle">1</div>
          </motion.button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
