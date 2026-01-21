import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  var average = 0
  if (all != 0) {  
    average = ((good - bad)/all)
  }


  const handleGoodClick = () => {
    console.log("Good button pressed")
    const newGood = good + 1
    const newAll = all + 1
    
    setAll(newAll)
    console.log("All in handleGoodClick: "+all)
    setGood(newGood)
    console.log("Good in handleGoodClick: "+good)
    

  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    const newAll = all + 1

    setAll(newAll)
    setNeutral(newNeutral)
    


  }

  const handleBadClick = () => {
    const newBad = bad + 1
    const newAll = all + 1

    setAll(newAll)
    setBad(newBad)
    

  }

  
  return (
    <div>
      <Header />
      <button onClick={handleGoodClick}>
        good
      </button>
      <button onClick={handleNeutralClick}>
        neutral
      </button>
      <button onClick={handleBadClick}>
        bad
      </button>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <h1>Give feedback</h1>
    </div>
  )
}



export default App