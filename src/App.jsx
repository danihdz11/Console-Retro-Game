import './App.css'
import RightControl from './components/RightControl';
import LeftControl from './components/LeftControl';
import Screen from './components/Screen';
import useFetch from './hooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  const { data, loading, error } = useFetch(url)

  console.log(data)

  return (
    <>
    <div className='flex'>
      <h1 className='text-3xl font-bold underline'>Hello world</h1>
      
      <LeftControl />
      <Screen pokemones={data?.results}/>
      <RightControl />
    </div>
    </>

  )
}

export default App
