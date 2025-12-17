import { CustomContextProvider, useCustomContext } from "./basicContext";

function ProviderContext() {
  return (
    <CustomContextProvider >
      <Component />
    </CustomContextProvider>
  )
}
function Component() {
  const context=useCustomContext()
  console.log(context);
  
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
      <button className="btn btn-center" onClick={()=>{
        if(context?.theme=='dark'){
          context?.setTheme('light')
return
        }
        context?.setTheme('dark')
      }}>toggle theme</button>
    </div>
  );
}
export default ProviderContext;
