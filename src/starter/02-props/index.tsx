import {PropsWithChildren} from 'react'
// import 
type ComponentProps=PropsWithChildren<{
  name:string;
  id:number;
}>
function Component({name,id,children}:ComponentProps) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{id}</h2>
      {children}
    </div>
  );
}
export default Component;
