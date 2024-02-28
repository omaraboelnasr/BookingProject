import RegFoot from '../../../../../react/New folder/src/components/regFoot/RegFoot'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Container } from "react-bootstrap";

const CreatePass = () => {
  return (
    <Container className =" pb-5" style={{maxWidth: '890px'}}>
    <div>
      <h1 className=' mt-4 text-2xl	font-bold mb-3'>Create password</h1>
      <p>Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.</p>
      <div className=' mt-9'>
        <div>
          <form action="">
            <label htmlFor="password" className=' font-semibold'>Password</label><br />
            <div className='flex relative'>
            <input type="password" id='password' className=' w-full px-3 border border-slate-400 rounded-sm shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5' placeholder='Enter a Password' />
            <div className=' text-md flex justify-center items-center px-2 absolute right-1 top-[20px]'><button><MdOutlineRemoveRedEye/></button></div>
            </div>
            <label htmlFor="Conpassword" className=' font-semibold'>Confirm Password</label><br/>
            <div className='flex relative'>
            <input type="password" id='Conpassword' className=' w-full px-3 border border-slate-400 rounded-sm shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600 my-1.5' placeholder='Confirm your Password' />
            <div className=' text-md flex justify-center items-center px-2 absolute right-1 top-[20px]'><button><FaRegEyeSlash/></button></div>
            </div>
            <button className='flex w-full justify-center rounded-sm bg-blue-600 py-3 text-lg my-5 font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-800'>Create Account</button>
          </form>
        </div>
        <hr />
      </div>
      <RegFoot className=''/>
      </div>
      </Container>

  )
}

export default CreatePass