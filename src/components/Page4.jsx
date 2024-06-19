
const Page4 = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeVa3inQQjxYQg8c_oEg-XyOTJJdh8Wqfk6wH6PMiIk5XoPsw/viewform?usp=sf_link';
    return (
        <div className="contenedor">
            <img  src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/infantiles%201-04.jpg?alt=media&token=11bd40d3-ec9b-4ec7-a73a-a7f603b9e8ec" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

            <a 
            style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleFormUrl} 
        target="_blank" rel="noopener noreferrer" 
        className=""
      >
        <button className="botonRecordar">
        Confirmar
            </button>
      </a>
        </div>
        )
    }


export default Page4