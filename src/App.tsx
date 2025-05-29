import './App.css'
import MultiStepForm from './components/FormSteps/multiStepForm'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <main>
    <Navbar
      navSteps={[]}
      onStepclick={() => {}}
      currentStepIndex={0}
    />
    <MultiStepForm/>
    </main>
  )
}

export default App
