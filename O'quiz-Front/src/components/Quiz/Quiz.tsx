import React, { useState } from 'react';
import './Quiz.scss';
import Wow from '../../assets/images/WoW.png';

/* TODO : 
- Faire un appel API ICI pour récupérer : l'ID du Quiz, les contenus globaux du quiz via son ID,

*/

function Quiz() {
  // Propriétés :
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Dans quel raid peut-on looter les glaives d'Azzinoth ?",
      options: [
        { id: 0, text: 'Temple Noir', isCorrect: true },
        { id: 1, text: 'Coeur de Magma', isCorrect: false },
        { id: 2, text: 'Karazhan', isCorrect: false },
        { id: 3, text: 'Uldir', isCorrect: false },
      ],
    },
    {
      text: "Quel société est à la création du MMORPG 'World Of Warcraft' (et pourquoi ils sont à chier ?)",
      options: [
        { id: 0, text: 'Ubisoft', isCorrect: false },
        { id: 1, text: 'Bethesda', isCorrect: false },
        {
          id: 2,
          text: "Blizzard Entertainment (Le pve d'OW2 <3)",
          isCorrect: true,
        },
        { id: 3, text: 'Naughty Dog', isCorrect: false },
      ],
    },
    {
      text: "Quelle monture peut-on drop dans le raid 'Citadelle de la couronne de glace' ? ",
      options: [
        { id: 0, text: 'Un chat', isCorrect: false },
        { id: 1, text: 'Un chien à trois tête', isCorrect: false },
        { id: 2, text: 'Le tigre spéctrale', isCorrect: false },
        { id: 3, text: "L'Invincible", isCorrect: true },
      ],
    },
    {
      text: "Comment s'appelle la capitale principale des orcs et des trolls ?",
      options: [
        { id: 0, text: 'Orrgrimmar', isCorrect: false },
        { id: 1, text: 'Orgrimar', isCorrect: false },
        { id: 2, text: 'Orgrimmar', isCorrect: true },
        { id: 3, text: 'Orcgrimar', isCorrect: false },
      ],
    },
    {
      text: 'Pourquoi voleur est-elle la meilleure classe du jeu ?',
      options: [
        {
          id: 0,
          text: 'Parce que le créateur de ce quiz joue voleur',
          isCorrect: true,
        },
        {
          id: 1,
          text: 'Parce que les voleurs sont les plus beaux',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Nan, en vrai vous avez vu les autres classes ?',
          isCorrect: false,
        },
        { id: 3, text: 'Fufu is life', isCorrect: false },
      ],
    },
  ];

  // Helper Functions
  const optionClicked = (isCorrect: any) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };
  /*  const { slug } = useParams; */

  /* const quiz = useAppSelector((state)) => 
  findQuiz(state.quiz.list, slug as string) */
  return (
    <div className="quiz">
      {/* 1. Header */}
      <h1 className="title__quiz">World Of Warcraft</h1>

      {/* 2. Current Score */}
      <h2>Current Score: {score}</h2>

      {showFinalResults ? (
        /* 4. Resultat final */
        <div className="final__results">
          <h1>Resultat final</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button type="button">Retour</button>
        </div>
      ) : (
        /* 3. Question Card */
        <div className="question__card">
          <img src={Wow} alt="wow" className="picture__quiz" />
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question__text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((options) => {
              return (
                <li
                  onClick={() => optionClicked(options.isCorrect)}
                  key={options.id}
                >
                  {options.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
