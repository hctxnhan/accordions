import Accordion from './components/Accordion';
import questions from './data';
export default function App() {
  return (
    <div className='min-h-screen flex items-start pt-10 justify-center bg-red-300'>
      <Accordion questions={questions} />
    </div>
  );
}
