import { CreareTodo } from './CreateTodo'

interface Props {
  onAddTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header>
      <h1>todo<img
        style={{ width: '60px', height: 'auto' }}
        src='http://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/120px-Typecript_logo_2020.svg.png'
      /></h1>

    <CreareTodo
      saveTodo={onAddTodo}
    />

    </header>
  )
}
