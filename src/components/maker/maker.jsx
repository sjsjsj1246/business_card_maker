import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
