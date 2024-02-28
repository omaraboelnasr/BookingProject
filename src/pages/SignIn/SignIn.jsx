import RegFoot from "../../components/regFoot/RegFoot";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiLogoApple } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";

const SignIn = () => {

  const navigate = useNavigate()
  return (
    <Container className =" pb-5" style={{maxWidth: '890px'}}>
    <div><div>
    <h1 className=' mt-4 text-2xl	font-bold'>Sign in or create an account</h1>
    <div className=' mt-9'>
      <div>
        <form action="">
          <label htmlFor="email" className=' font-semibold'>Email address</label><br />
          <input type="email" id='email' className=' w-full px-3 border border-slate-400 rounded-sm shadow-sm placeholder-slate-400 bg-transparent py-2 pl-2 text-gray-900  sm:text-sm sm:leading-6 focus:outline-none  focus:ring-2 focus:ring-blue-600' placeholder='Enter your email address' />
          <button className='flex w-full justify-center rounded-sm bg-blue-600 py-3 text-lg my-5 font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-800' onClick={()=>navigate("/type")}>Continue with email</button>
        </form>
      </div>
      <div className='flex'>
        <hr className='border-b-solid border-1 border-gray-400 flex-1 mr-2 mt-3' />
        <p className='whitespace-nowrap'>or use one of these options</p>
        <hr className='border-b-solid border-1 border-gray-400 flex-1 ml-2 mt-3'/>
      </div>
      <div className='flex justify-around my-6'>
        <a href=''>
          <div className=' w-20 h-20 m-4 items-center flex justify-center border border-slate-200 hover:outline-none  hover:ring-1 hover:ring-blue-500'>
          <AiFillFacebook className=' w-12 h-12 fill-blue-700' />
          </div>
        </a>
        <a href=''>
          <div className=' w-20 h-20 m-4 items-center flex justify-center border border-slate-200 hover:outline-none  hover:ring-1 hover:ring-blue-500'>
          <FcGoogle   className=' w-12 h-12 ' />
          </div>
        </a>
        <a href=''>
          <div className=' w-20 h-20 m-4 items-center flex justify-center border border-slate-200 hover:outline-none  hover:ring-1 hover:ring-blue-500'>
          <BiLogoApple  className=' w-12 h-12' />
          </div>
        </a>
      </div>
      <hr />
    </div>
    <RegFoot className=''/>
    </div></div>
    </Container>
  )
}

export default SignIn