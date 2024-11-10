import { useState } from "react"
import ArrowDownTS from "@/icons/Extra/ArrowDownTS"

interface FormData {
  username: string;
  phone: string;
  email: string;
  carplate: string;
  checkbox: boolean;
}

const initialValue = {
  username: '',
  phone: '',
  email: '',
  carplate: '',
  checkbox: false,
}

const Form: React.FC = () => {
  const [inputValue, setInputvalue] = useState<FormData>(initialValue)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value, type, checked } = e.target;

    setInputvalue((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  async function submitForm(e: any) {
    e.preventDefault()
    try {
      const response = await fetch("/actions/send-email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValue)
      })

      if (!response.ok) {
        throw new Error('Newtwork response was not ok')
      }

      const data = await response.json()
      console.log('Success:', data)
    } catch (error) {
      console.log("Error:", error)
    }

    console.log(typeof inputValue)
  }

  return (
    <>
      <section className="my-8 bg-red-200">
        <ArrowDownTS />
        <form onSubmit={submitForm}
          className="h-full py-8 px-4 gap-8 md:px-8 bg-primary grid items-center lap:grid-cols-2 rounded-2xl"
        >
          <div className="flex gap-8 flex-col text-background">
            <div>
              <h4>Ingresa tus datos</h4>
              <h2 className="max-md:text-center mt-2">
                Nuestros expertos se comunicarán contigo.
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-light">
              <p>Estandarización de <span>Precios</span></p>
              <p>Experiencia asegurada en <span>Multimarcas</span></p>
              <p>Monitoreo de trabajos en <span>Tiempo Real</span></p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 *:w-full *:rounded-md *:px-4 *:py-2 *:bg-white"
            >
              <input
                type="text"
                name="username"
                placeholder="Nombre Completo"
                value={inputValue.username}
                onChange={handleChange}
                required
              />
              <input type="tel"
                value={inputValue.phone}
                onChange={handleChange}
                name="phone" placeholder="Celular" />
              <input type="email"

                value={inputValue.email}
                onChange={handleChange}
                name="email" placeholder="Correo Empresarial" />
              <input type="text"
                value={inputValue.carplate}
                onChange={handleChange}
                name="carplate" placeholder="Placa Vehicular" />
            </div>
            <div>
              <div className="flex gap-4 items-center mb-4">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={inputValue.checkbox}
                  onChange={handleChange}
                  className="min-w-4 min-h-4 bg-background rounded-sm"
                />
                <p className="text-small font-light leading-none text-background">
                  Al hacer click en enviar, aceptas las Políticas de Datos
                  Personales y las Políticas de Servicios en Fana.
                </p>
              </div>
              <button className="w-full py-2 bg-secondary rounded-md text-background"
              >Enviar</button
              >
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Form

// <style>
//   h2 {
//     font-size: 2.5rem;
//     font-weight: 400;
//     font-family: "Titillium Web", sans-serif;
//     line-height: 1;
//     letter-spacing: 0;
//   }
//
//   span {
//     display: block;
//     font-size: 1.5rem;
//     font-weight: 400;
//     font-family: "Titillium Web", sans-serif;
//     line-height: 1;
//     letter-spacing: 0;
//   }
// </style>
