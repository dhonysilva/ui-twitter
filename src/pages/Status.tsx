import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {

    const [newAnswer, setNewAnswer] = useState('') 

    const [answers, setAnswers] = useState([
        'Concordo',
        'Olha, faz sentido!',
        'Parabéns pelo progresso.'
    ])
    function createNewAnswer(event: FormEvent) {
      event.preventDefault()

      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }

    return (
        <main className='status'>

          <Header title="Tweet" />

          <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi labore odit itaque vitae odio ipsa vel! Voluptates, ex suscipit. Illo sint quod vero possimus vitae rerum inventore, consectetur in quidem." />

          <div className="separator" />  

          <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/dhonysilva.png" alt="Dhony Silva" />
              <textarea
                id="tweet"
                placeholder="Tweet your answer"
                value={newAnswer}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }}
              
              />
            </label>
            <button type='submit'>Answer</button>
          </form>
          

          {answers.map(answer => {
            return <Tweet key={answer} content={answer} />
          })}

        </main>
    )
}