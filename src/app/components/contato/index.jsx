import Styles from "./contato.module.scss"
import Image from "next/image"
import Pessoa from "/public/images/pessoa4.svg"
import Button from "../button"
import Githicon from "/public/images/githicon.svg"
import Linkicon from "/public/images/linkicon.svg"

const Contato = () => {
  return(
  <div className={Styles.container}>
    <div className={Styles.header}>
      <h1>Contato</h1>
    </div>
    <div className={Styles.abacontato}>
    <form className={Styles.formulario}>
      <input required placeholder="Digite seu nome" type="text" class="nome">
      </input>
      <input required placeholder="Digite seu email" type="email" class="emailclass">
      </input>
      <input required placeholder="Digite o assunto" type="text" class="assuntoo">
      </input>
      <textarea required placeholder="Sua mensagem..." cols={30} rows={10} class="textarea"></textarea>
      <Button title="Enviar"/>
      
    </form>
    <div className={Styles.contatoadicional}>
      <h1>E-mail para contato</h1>
      <p1>leonardocestari67@gmail.com</p1>
      <h1>Redes Sociais</h1>
      <div className={Styles.redes}>
      <div className={Styles.gitrede}>
      <div className={Styles.boxicon}>
      <Image src={Githicon}
      width={30}></Image>
      </div>
      <p>/leoocestari</p>
      </div>
      <div className={Styles.linkrede}>
      <div className={Styles.boxicon2}>
      <Image src={Linkicon}
      width={30}></Image>
      </div>
      <p>/leoocestari</p>
      </div>
      </div>
    </div>
    </div>
    
  </div>
  );
};

export default Contato