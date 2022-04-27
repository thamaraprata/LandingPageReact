import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Lorem</h3>
            </div>
            <div className="item-menu">
              <a href="#">Login</a>


            </div>
          </div>
          <div className="form">
            <h2>Entre em contato</h2>
            <form>
              <div className="items-form">
                <input placeholder=" Seu primeiro nome" type="text" />
                <input placeholder=" Sobrenome" type="text" />
                <input placeholder=" e-mail" type="text" />
                <input placeholder=" telefone" type="text" />
                <br>
                </br>
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="conteudo"> 
        <div className="center">
          <div className="conteudo-single">
            <h3>Titulo</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it t
            </p>
          </div>
          
          <div className="conteudo">
            <div className="center">
              <div className="conteudo-single">
                <h3>Titulo</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it t
                </p>
              </div>
              

              
            </div>

          </div>


        </div>

      </div>


    </div>
  );
}

export default App;
