
const Page3 = () => {
    const locationUrl2 = "https://maps.app.goo.gl/J7dK1AnULB91aQBT7";
    return (
        <div className="contenedor">
            <img className="imagen marcoMarti" src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/infantiles%201-03.jpg?alt=media&token=0525fa66-e982-4153-a354-311dc121d5b3" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            
            <a
            style={{ position: 'absolute', top: '79%', left: '50%', transform: 'translate(-50%, -50%)'}}
          href={locationUrl2}
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="botonUbi">

          Ubicación
        </button>

        </a>
            
        </div>
        )
    }


export default Page3