import MetodoDePagamento from "../components/praticaJSX/MetodoDePagamento";
import ObterMenuSuspenso from "../components/praticaJSX/MenuSuspenso";
import AvatarDoUsuario from "../components/PraticaJSX/AvatarDoUsuario";
import Rodape from "../components/PraticaJSX/Rodape";


function PraticaJSX() {

const url = "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png";
  
  return (
    <>
      <h2>6-JSX na Prática:</h2>

      <MetodoDePagamento />
      <ObterMenuSuspenso />
      <AvatarDoUsuario caminho={url}/>
      <Rodape />
  
    </>
  );
}

export default PraticaJSX;