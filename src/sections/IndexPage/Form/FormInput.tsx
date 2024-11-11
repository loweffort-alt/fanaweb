import { useState } from "react"
import SpinnerIcon from "@/icons/Extra/Loader";

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

export const FormInput = () => {
  const [inputValue, setInputvalue] = useState<FormData>(initialValue)
  const [loader, setLoader] = useState(false)

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
      setLoader(true)
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
    setLoader(false)
    setInputvalue(initialValue)
  }

  const agreements = "Al hacer click en enviar, aceptas las Políticas de Datos Personales y las Políticas de Servicios en Fana."

  return (
    <form onSubmit={submitForm} className="flex flex-col"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 *:w-full *:rounded-md *:px-4 *:py-2 *:bg-background"
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
      <div className="flex gap-4 items-center mt-8 mb-4">
        <input
          type="checkbox"
          name="checkbox"
          checked={inputValue.checkbox}
          onChange={handleChange}
          className="min-w-4 min-h-4 bg-background rounded-sm"
        />
        <p className="text-small font-light leading-none text-background">
          {agreements}
        </p>
      </div>
      <button className="w-full h-12 py-2 bg-secondary rounded-md text-background relative"
      >
        {loader && <SpinnerIcon />}
        {!loader && "Enviar"}
      </button>
    </form>
  )
}
