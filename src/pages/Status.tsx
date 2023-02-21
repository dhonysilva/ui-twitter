import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"

import './Status.css'

const answers = [
    'Concordo',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
]

export function Status() {
    return (
        <main className='status'>

          <Header title="Tweet" />

          <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi labore odit itaque vitae odio ipsa vel! Voluptates, ex suscipit. Illo sint quod vero possimus vitae rerum inventore, consectetur in quidem." />

          <div className="separator" />  

          <form className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/dhonysilva.png" alt="Dhony Silva" />
              <textarea id="tweet" placeholder="Tweet your answer" />
            </label>
            <button type='submit'>Answer</button>
          </form>
          

          {answers.map(answer => {
            return <Tweet key={answer} content={answer} />
          })}

        </main>
    )
}