import StepCounter from "./StepCounter";

function CounterApp() {
    <div>
        <h2>CounterApp</h2>
        {/* Props are passed from parent to child.
          State is managed inside each StepCounter independently */}
           <StepCounter initialValue={0} step={1} />
           <StepCounter initialValue={10} step={5} /> 
    </div>
};
export default CounterApp;

