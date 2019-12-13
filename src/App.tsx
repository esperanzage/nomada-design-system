import React from "react";
import Button from "./Components/Button";
import GlobalStyles from "./Components/GlobalStyle";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Card title="Card Title super Awesome">
        <Button />
        <Button />
        <Button />
        <Button />
      </Card>
    </div>
  );
}

export default App;
