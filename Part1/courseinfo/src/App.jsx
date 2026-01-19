const App = () => {
  console.log("App started")
    const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header name={course.name}/>
      <Content content={course.parts}/>
      <Total totalExercises={course.parts}/>
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