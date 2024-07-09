import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  offerCardCount: number;
}

function App({offerCardCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage offerCardCount={offerCardCount} />
  );
}

export default App;
