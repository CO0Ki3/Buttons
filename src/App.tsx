import PrimaryButton from './components/Button/PrimaryButton';
import SecondaryButton from './components/Button/SecondaryButton';
import { Button } from './components/CompoundButton';
import ObjectOverrideButton from './components/ObjectOverrideButton/ObjectOverrideButton';
import PropsOverrideButton from './components/PropsDividedButton/PropsDividedButton';

function App() {
  return (
    <>
      Button
      <div>
        <PrimaryButton>다음</PrimaryButton>
        <SecondaryButton>이전</SecondaryButton>
      </div>
      
      Compound
      <div>
        <Button>
          <Button.Primary>
            <Button.Text type='primary'>다음</Button.Text>
          </Button.Primary>
          <Button.Secondary>
            <Button.Text type='secondary'>이전</Button.Text>
          </Button.Secondary>
        </Button>
      </div>

      Props
      <div>
        <PropsOverrideButton>다음</PropsOverrideButton>
        <PropsOverrideButton bgColor='white' color='#00c17c'>
          이전
        </PropsOverrideButton>
      </div>

      Object
      <div>
        <ObjectOverrideButton>다음</ObjectOverrideButton>
        <ObjectOverrideButton
          overrides={{
            Root: {
              css: {
                backgroundColor: 'white',
              },
            },
            Text: {
              css: {
                color: '#00c17c',
              },
            },
          }}
        >
          이전
        </ObjectOverrideButton>
      </div>
    </>
  );
}

export default App;
