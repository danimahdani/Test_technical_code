import { useState } from 'react'

function App() {
    const [angka, setAngka] = useState()
    const [bilanganPrima, setBilanganPrima] = useState([])
    const [angkaGanjil, setAngkaGanjil] = useState()
    const [bilanganSegiga, setBilanganSegitiga] = useState([])

    const validationNumber = (e) => {
        const result = e.target.value.replace(/\D/g, '')
        setAngka(result)
    }

    const checkBilanganGanjil = () => {
        if (angka % 2 == 1) {
            setAngkaGanjil(`${angka} adalah bilangan ganjil`)
        } else {
            setAngkaGanjil(`${angka} adalah bukan bilangan ganjil`)
        }
    }

    const checkBilanganPrima = () => {
        const result = []

        for (let index = 1; index < angka; index++) {
            if (index % 2 == 1) {
                result.push(index)
            }
        }

        setBilanganPrima(result)
    }

    const generateBilanganSegitiga = () => {
        const digits = angka.toString().split('')
        const realDigits = digits.map(Number)

        const result = []

        for (let index = 0; index < realDigits.length; index++) {
            let hasil = realDigits[index] * 10
            for (let idx = 0; idx < index; idx++) {
                hasil += '0'
            }
            result.push(hasil)
        }

        setBilanganSegitiga(result)
    }

    return (
        <>
            <input
                type='text'
                placeholder='Input Angka'
                value={angka}
                onChange={validationNumber}
            />

            <div>
                <button onClick={generateBilanganSegitiga}>
                    Generate Segitiga
                </button>
                <button onClick={checkBilanganGanjil}>
                    Generate Bilangan Ganjil
                </button>
                <button onClick={checkBilanganPrima}>
                    Generate Bilangan Prima
                </button>
            </div>
            <div>
                <h1>Result :</h1>
                {angkaGanjil && <h1>{angkaGanjil}</h1>}
                {bilanganPrima.length > 0 && (
                    <>
                        <ul>
                            {bilanganPrima.map((e) => (
                                <li key={e}>{e}</li>
                            ))}
                        </ul>
                        <h2>adalah bilangan prima</h2>
                    </>
                )}
                {bilanganSegiga.length > 0 && (
                    <>
                        <ul>
                            {bilanganSegiga.map((e) => (
                                <li key={e}>{e}</li>
                            ))}
                        </ul>
                        <h2>bilangan segitiga</h2>
                    </>
                )}
            </div>
        </>
    )
}

export default App
