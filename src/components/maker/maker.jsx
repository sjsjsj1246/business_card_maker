import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Hwang In Seo',
      company: '3sec',
      theme: 'light',
      title: 'Software Engineer',
      emain: 'sjsjsj1246@gmail.com',
      message: 'hi',
      fileName: 'sjsjsj1246',
      fileRUL: '',
    },
    {
      id: '2',
      name: 'Hwang In Seo2',
      company: '3sec',
      theme: 'dark',
      title: 'Software Engineer',
      emain: 'sjsjsj1246@gmail.com',
      message: 'hi',
      fileName: 'sjsjsj1246',
      fileRUL: '',
    },
    {
      id: '3',
      name: 'Hwang In Seo3',
      company: '3sec',
      theme: 'colorful',
      title: 'Software Engineer',
      emain: 'sjsjsj1246@gmail.com',
      message: 'hi',
      fileName: 'sjsjsj1246',
      fileRUL: '',
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) => {
    const update = [...cards, card];
    setCards(update);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
