const Button = ({ label }) => {
    return (
      <div onClick={() => alert('A label desse botão é ' + label)}>
        <h1>Desafio 02</h1>
        <button>Clique aqui</button>
      </div>
    )
  }
  
  export default Button