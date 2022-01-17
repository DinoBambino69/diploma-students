import {Navbar} from "./components/navbar";

export const App = () => {
  return (
    <div>
        <Navbar isAuth={false}/>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}
