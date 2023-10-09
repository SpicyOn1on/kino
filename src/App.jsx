import { useState } from 'react'
import image from './image 7.png'
import './App.css'





function Addkino () {
  const onBtnClick = (event) => {
    return (
      <div className="card">
        <img src={image} width="200" height="100" />
        <h2>{nameForm}</h2>
        <h4>Оценка <a>{gradeForm}</a></h4>
        <p>{descForm}</p>
      </div>
    );
  }
}

export default function App() {
  const[nameForm, setNameForm] = useState('');
  const[gradeForm, setGradeForm] = useState('');
  const[descForm, setDescForm] = useState('');

  const[films, setFilms] = useState({})
  return (
    <>
      <header>
        <div className="head">
          <h1><a className="kn">Кино</a> <a className="on">Онлайн</a></h1>
          <h2><a className="login">Войти </a><a className="reg">Создать аккаунт</a> </h2>
        </div>
      </header>
      <div className="container">
        <h1> Новинки </h1>
        <div>
          <button type="add" className="btn_add" onClick={Addkino} >Добавить фильм</button>
        </div>
        <label>Название 
        <input 
          value={nameForm}
          onChange = {e => setNameForm(e.target.value)}/> 
         </label>
         <label>Оценка
        <input 
          value={gradeForm}
          onChange = {e => setGradeForm(e.target.value)}/> 
         </label>
         <label>Описание  
        <input 
          value={descForm}
          onChange = {e => setDescForm(e.target.value)}/> 
         </label>
        <hr></hr>
        <div className="new">
          <div className="card">
            <img src={image} width="200" height="100" />
            <h2>Название фильма</h2>
            <h4>Оценка <a className='ocenka'>4,7</a></h4>
            <p>kal</p>
          </div>
          <div className="card">
            <img src={image} width="200" height="100" />
            <h2>Название фильма</h2>
            <h4>Оценка <a className='ocenka'>4,7</a></h4>
            <p>kal</p>
          </div>
          <div className="card">
            <img src={image} width="200" height="100" />
            <h2>Название фильма</h2>
            <h4>Оценка <a className='ocenka'>4,7</a></h4>
            <p>kal</p>
          </div>
          <div className="card">
            <img src={image} width="200" height="100" />
            <h2>Название фильма</h2>
            <h4>Оценка <a className='ocenka'>4,7</a></h4>
            <p>kal</p>
          </div>
        </div>
      </div>
    </>
  );
}





