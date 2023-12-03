import {getHelloWorld} from '../services/hello.service';

const wiButtonStyle = {
  backgroudColor: 'pink',
};

function WiButton() {
  const handleOnClick = async () => {
    console.log('button clicked');
    const response = await getHelloWorld();
    const message = await response.json();
    console.log(message);
  };
  return (
    <button onClick={handleOnClick} style={wiButtonStyle}>
      Make an Http call
    </button>
  );
}

export default WiButton;