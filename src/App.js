import WiButton from './components/WiButton';
import WiHeader from './components/WiHeader';

const appStyle = {
  textAlign: 'center'
};

function App() {
  return (
    <div style={appStyle}>
      <WiHeader />
      <WiButton />
    </div>
  );
}

export default App;
