import { useState } from "react";

function Component() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setEmail(e.target.value)
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.currentTarget;
    const form = new FormData(e.currentTarget)
    console.log(form);
    console.log(form.get('email'));
    console.log(form.get('text'));
    
  }
  return (
    <>
      <section>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="text" value={text} className="form-input" onChange={(e) => setText(e.target.value)} />
          <input onChange={handleChange} type="email" name="email" value={email} className="form-input" />
          <button className="btn btn-block" type="submit">submit</button>
        </form>
      </section>
      <>
        <div>
          <h4>Email: {email}</h4>
          <h1>Text: {text}</h1>
        </div>
      </>
    </>
  );
}
export default Component;
