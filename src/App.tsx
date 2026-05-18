import React, { useState } from "react";

export default function App(){
  return(
    <div style = {{fontFamily: 'Arial, sans-serif', padding:'40px', textAlign: 'center'}}>
      <h1>Cassino Online</h1>
      
      <p>Login</p>
      
      <input
        type = "text"
        placeholder="E-mail"
        style={{padding: '8px', borderRadius: '4px', border:'1px solid #ccc', marginRight:'10px'}}
        />
      
      <input
        type = "password"
        placeholder="Senha"
        style={{padding: '8px', borderRadius: '4px', border:'1px solid #ccc', marginRight:'10px'}}
        />

      <button
        style = {{padding:'8px 16px', backgroundColor:'#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}
        >
          Entrar
          </button>
          
          <footer style={{position: 'fixed', bottom:'0', left:'0', width:'100%',backgroundColor:'#fff', padding:'15px 0px', color: '#666', fontSize: '14px'}}>
            <p>All rights reserved</p>
          </footer>
    </div>


  );
}