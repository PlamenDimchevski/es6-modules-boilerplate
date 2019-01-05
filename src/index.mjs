import moduleA from './a.mjs';
import moduleB from './b.mjs';
import App from './components/App.mjs';

moduleA();
moduleB();

SK.domreadypromise.then( () => {
   ReactDOM.render(
      <App/>,
      document.getElementById( 'root' ),
      () => {
         console.log( '>>> App rendered/updated' );
      }
   );
});
