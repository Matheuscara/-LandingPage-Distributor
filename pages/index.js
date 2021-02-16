import React from 'react'
import Head from 'next/head'

import { motion } from 'framer-motion'
import Link from 'next/link'

import Header from '../components/header'



const index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Pizza box</title>
			</Head>
			<div className="container">
				<Header />  
				<div className="contenido">
					<div className="info">
						<h1>Dinheiro não compra felicidade, mas compra pizza que é a mesma coisa!</h1>
						<div className="name">Pizza box</div>
						<p>
						Pizza Box é uma cadeia de restaurantes e franquias especializada em pizzas e massas. Com sede na cidade de Plano, no Texas, a Pizza Box é a maior cadeia de pizzarias do mundo, com quase 15 mil restaurantes e quiosques em mais de 130 países.
						</p>
						<div className="price">R$25.98</div>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<img src="/img/basket-white.svg" alt="" />
							<span>Iniciar Pedido</span>
						</motion.button>
					</div>
					<div className="img-container">
						<img src="/img/pizza.jpg" alt="pizza" />
					</div>
					<div className="social-buttons">
						<div className="links">
							<a href="" target="_blank">
								Instagram
							</a>
							<a href="" target="_blank">
								Facebook
							</a>
						</div>
						<div className="btns">
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="btn-l"
							>
								<img src="/img/arrow-l.svg" alt="" />
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="btn-r"
							>
								<img src="/img/arrow-r.svg" alt="" />
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default index
