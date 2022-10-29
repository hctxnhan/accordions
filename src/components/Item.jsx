import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
export default function Item({ title, info }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='p-4 shadow-md'>
      <div className='flex justify-between'>
        <p className='text-slate-900 text-lg font-semibold mb-2'>{title}</p>
        <button
          onClick={() => setOpen(!open)}
          className='w-[30px] h-[30px] bg-red-400 flex justify-center items-center text-white rounded-full hover:bg-red-500'
        >
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className={`${open ? 'h-auto' : 'h-0'} overflow-hidden transition`}>
        <p className='text-slate-700'>{info}</p>
      </div>
    </div>
  );
}
