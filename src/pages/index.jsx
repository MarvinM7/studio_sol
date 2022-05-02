import React, { useEffect, useState } from "react";

import DigitalNumber from "../components/DigitalNumber";

import './index.css';

const Index = () => {
  const [answer, setAnswer] = useState('');

  const [numberShown, setNumberShown] = useState('0');
  const [rightAnswer, setRightAnswer] = useState(null);
  const [message, setMessage] = useState('');
  const [endGame, setEndGame] = useState(false);
  const [classResponse, setClassResponse] = useState('normal');

  const [color, setColor] = useState('#000');

  useEffect(() => {
    handleNewGame();
  }, []);

  useEffect(() => {
    const input = document.getElementById('input');
    const isSupported = input && input.addEventListener;
    if (!isSupported) return;

    let listener = function(e) {
      console.log('teste');
      console.log(e)
      if (e.key === 'Enter') {
        handleAnswer()
      }
    }

    input.addEventListener('keydown', listener);

    return () => {
      input.removeEventListener('keydown', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  const handleNewGame = () => {
    setEndGame(false);
    setNumberShown('0');
    setMessage('');
    setColor('#000');

    fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300', {
      method: "GET",
    })
      .then(resp => {
        resp.json().then(data => {
          if (data.value) {
            setRightAnswer(data.value);
          } else {
            setColor('#CC3300');
            setMessage('ERRO');
            setClassResponse('error')
            setNumberShown(data.StatusCode);
            setEndGame(true);
          }
        })
      });
  }

  const handleInput = (e) => {
    if (/$^|^[1-9][0-9]{0,2}$/.test(e.target.value)) {
      setAnswer(e.target.value);
    }
  }

  const handleAnswer = () => {
    if (answer === '') {
      return;
    } 
    setAnswer('');
    setClassResponse('normal');
    if (Number(answer) === rightAnswer) {
      setColor('#32BF00');
      setClassResponse('rightAnswer')
      setMessage('Você acertou!!!');
      setNumberShown(answer);
      setEndGame(true);
    } else if (Number(answer) > rightAnswer) {
      setMessage('É menor');
      setNumberShown(answer);
    } else {
      setMessage('É maior');
      setNumberShown(answer);
    }
  };

  return (
    <>
      <div>
        <div className="title">QUAL É O NÚMERO?</div>
        <hr />
      </div>

      <p className={`message ${classResponse}`}>{message}</p>

      <div className="numberShown">
        {numberShown.toString().split('').map((number, index) => <DigitalNumber key={index} number={Number(number)} color={color} />)}
      </div>

      <div className="buttonNewGameContainer">
        {endGame && (
          <button
          className="button buttonNewGame"
          onClick={handleNewGame}
        >
          NOVA PARTIDA
        </button>
        )}
      </div>
      
      <div className="form">
        <input
          id="input"
          className="input"
          type={'text'}
          placeholder={'Digite o palpite'}
          disabled={endGame}
          value={answer}
          onChange={handleInput}
        />
        <button
          className="button buttonSend"
          disabled={endGame || answer === ''}
          onClick={handleAnswer}
        >
          ENVIAR
        </button>
      </div>
    </>
  )
}

export default Index;