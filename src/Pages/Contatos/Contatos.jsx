import styles from './contatos.module.css'
import cooking from './../../assets/cooking.svg'
import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    databaseURL:"https://projeto-final-pretalab-1db9a-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);


function Contatos () {
   const [nome, setNome] = useState ('')
   const [email, setEmail] = useState ('')
   const [mensagem, setMensagem] = useState ('')

   function handleInputValueNome (event) {
    setNome(event.target.value)
   }

   function handleInputValueEmail (event) {
    setEmail(event.target.value)
   }

   function handleInputValueMensagem (event) {
    setMensagem(event.target.value)
   }
   
   function handleCreateMessage (event) {
    event.preventDefault()
    const postListRef = ref(database, 'mensagens')
    const newPostRef = push(postListRef)
    set(newPostRef, {
      textMessage: mensagem,
      email: email,
      nome: nome
    })
    setMensagem('')
    setNome('')
    setEmail('')
   }
   
   
    return (
        <>
        <div className={styles.contatos}>
        <h1 className={styles.h1}>Contatos</h1>
        <h3 className={styles.h3}>Fale conosco, adoraremos trocar experiências!</h3>
        <img className={styles.img} src={cooking} alt="pessoas cozinhando"/>
        </div>
        
        <div className={styles.formContainer}>
         <form onSubmit={handleCreateMessage} calssName={styles.form}>
         <input 
         onChange={handleInputValueNome} 
         className={styles.formInput} 
         placeholder='Digite seu nome'
         value={nome}/>
         <input 
         onChange={handleInputValueEmail} 
         className={styles.formInput} 
         placeholder='Digite seu endereço de-mail'
         value={email}/>
         <textarea 
         onChange={handleInputValueMensagem}
         className={styles.formTextArea} 
         placeholder='Digite sua mensagem'
         value={mensagem}/>
         <button type='submit' className={styles.formButton}>Enviar mensagem</button>
         </form>
        </div>
        </>
         )
}

export default Contatos