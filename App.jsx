import React from 'react';

class App extends React.Component {
   render() {
     var i = 2;

     var myStyle = {
      fontSize:100,
      color:'#FF0000'
     }

     return (
        <Header/>
        <Content/>
     );
   }
}

export default App;
