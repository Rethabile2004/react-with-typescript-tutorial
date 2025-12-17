type Top = {
  type: 'basic';
  name: string
}
type User = {
  type: 'advanced'
  name: string;
  email: string
}
function Component(props: Top | User) {
  return (
    <div >
      {props.type == 'basic' ? <div className="basic">
        <h2>Type: {props.type}</h2>
        <h2>Name: {props.name}</h2>
      </div> : <div className="advanced">
        
          <h2>Type: {props.type}</h2>
          <h2>Name: {props.name}</h2>
          <h2>Email: {props.email}</h2>
        
      </div>}
    </div>
  );
}
export default Component;
