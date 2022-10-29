import Item from './Item';
export default function Accordion({ questions }) {
  return (
    <div className='max-w-[800px] p-10  shadow-2xl rounded-md bg-white'>
      <div className='uppercase text-2xl font-bold text-slate-800 mb-6'>
        Questions and Answers about Login
      </div>
      <div className='flex flex-col gap-4'>
        {questions.map((question) => (
          <Item key={question.id} title={question.title} info={question.info} />
        ))}
      </div>
    </div>
  );
}
