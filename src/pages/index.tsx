import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: number;
    amount:number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
          <title> ig.news | Home </title>
      </Head>

      <main className={styles.contentConteiner}>
        <section className={styles.hero}>
          <span> 👏 Hey, Welcome</span>

          <h1>News about <br /> the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={ product.priceId }  />
        </section>

        <img  src='/images/avatar.svg' alt='Girl coding' />

      </main>
   </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IcWr6AiRrU5CJnnkJQE96B6')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}