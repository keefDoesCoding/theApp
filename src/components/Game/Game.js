

import React, { useState, useEffect } from 'react';
import './Game.css';

const Snake = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);

  const moveSnake = (x, y) => {
    const newSnake = [...snake];
    const newHead = { x: snake[0].x + x, y: snake[0].y + y };
    newSnake.unshift(newHead);
    newSnake.pop();
    setSnake(newSnake);
  };

  const checkCollisions = () => {
    if (snake[0].x === food.x && snake[0].y === food.y) {
      setFood(generateRandomFood());
      growSnake();
    }

    if (snake[0].x < 0 || snake[0].x >= 20 || snake[0].y < 0 || snake[0].y >= 20) {
      setGameOver(true);
    }

    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
        setGameOver(true);
        break;
      }
    }
  };

  const generateRandomFood = () => {
    const randomX = Math.floor(Math.random() * 20);
    const randomY = Math.floor(Math.random() * 20);

    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x === randomX && snake[i].y === randomY) {
        return generateRandomFood();
      }
    }

    return { x: randomX, y: randomY };
  };

  const growSnake = () => {
    const lastSegment = snake[snake.length - 1];
    const newSegment = { x: lastSegment.x, y: lastSegment.y };
    setSnake(snake.concat(newSegment));
  };


  const handleKeyPress = (e) => {
    switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
  };

  const gameLoop = () => {
    if (!gameOver) {
      if (direction === 'UP') moveSnake(0, -1);
      if (direction === 'DOWN') moveSnake(0, 1);
      if (direction === 'LEFT') moveSnake(-1, 0);
      if (direction === 'RIGHT') moveSnake(1, 0);

      checkCollisions();

      requestAnimationFrame(gameLoop);
    }
  };

  useEffect(() => {
    if (gameOver) return;
  
    document.addEventListener('keydown', handleKeyPress);
  
    const gameLoop = () => {
      if (!gameOver) {
        if (direction === 'UP') moveSnake(0, -1);
        if (direction === 'DOWN') moveSnake(0, 1);
        if (direction === 'LEFT') moveSnake(-1, 0);
        if (direction === 'RIGHT') moveSnake(1, 0);
  
        checkCollisions();
  
        requestAnimationFrame(gameLoop);
      }
    };
  
    requestAnimationFrame(gameLoop);
  
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [snake, food, direction, gameOver]);

  return (
    <div className="game-container">
      {Array.from({ length: 20 }).map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: 20 }).map((_, colIndex) => {
            const isSnakePart = snake.some(part => part.x === colIndex && part.y === rowIndex);
            const isFood = food.x === colIndex && food.y === rowIndex;

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${isSnakePart ? 'snake-part' : ''} ${isFood ? 'food' : ''}`}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Snake;
