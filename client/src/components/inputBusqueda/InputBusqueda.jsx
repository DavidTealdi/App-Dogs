import style from '../inputBusqueda/InputBusqueda.module.css';

function InputBusqueda({ handleSubmit, handleChange }) {
  return (
    <div className={style.divform}>
      <form className={style.search_box}>
        <input onChange={handleChange} placeholder="Buqueda" />
        <button onClick={handleSubmit}>Buscar</button>
      </form>
    </div>
  );
}

export default InputBusqueda;