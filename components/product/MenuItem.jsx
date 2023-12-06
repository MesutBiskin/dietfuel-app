import Image from 'next/image';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import Link from 'next/link';

const MenuItem = () =>{
  return (
    <div className='bg-secondary rounded-3xl'>
        <div className='w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-3xl'> 
      <Link href={"/product"}> 
      <div className='relative w-36 h-36 z-50 bg-white hover:scale-110 transition-all' >
        <Image src="/images/1200calorie.jpg" alt="" layout="fill" />
        </div>
        </Link>
         </div>
      <div className='p-[25px] text-white'>
        <h4 className='text-xl-font-semibold'>Healty Diet Food</h4>
        <p className='text-[15px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quam assumenda laborum, porro quis eum sapiente, commodi nam amet, quisquam dolores exercitationem cum laudantium. Voluptatem consequuntur maiores saepe! Accusantium, modi sapiente.
        </p>
     
            <div className='flex justify-between items-center mt-4'>
                <span className='text-white'>$20</span>
                <button className='btn-primary !w-10 !h-10 rounded-full !p-0 grid place-content-center'>
                    <RiShoppingCart2Fill /> 
                    </button>
                </div>
                </div>
      
    </div>
  )
}

export default MenuItem;
