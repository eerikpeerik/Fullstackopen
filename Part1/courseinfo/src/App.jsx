const App = () => {
  console.log("App started")
  const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

    const t = [part1, part2, part3]
  return (
    <div>
      <Header name={course}/>
      <Content content={t}/>
      <Total totalExercises={t}/>
    </div>
  )
}

const Header = (props) => {
  console.log("Header called")
  return (
      <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  console.log("Content called")
  console.log("Prop content 0 =" + props.content[0])
  return(
    <div>
      <Part gosh={props.content[0]}/>
      <Part gosh={props.content[1]}/>
      <Part gosh={props.content[2]}/>
    </div>
  )
}

const Total = (props) => {
  console.log("Total called")
  return(
    <p>Number of exercises {props.totalExercises[0].exercises + props.totalExercises[1].exercises + props.totalExercises[2].exercises}</p>
  )
}

const Part = (props) => {
  console.log("Part called")
  return (
      <p>{props.gosh.name} {props.gosh.exercises}</p>
 
  )
}

export default App