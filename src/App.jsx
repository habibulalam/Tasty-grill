import { useEffect, useState } from 'react'
import './App.css'
import SingleRecipe from './SingleRecipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const lightTheme = document.querySelector("html");
  const light = lightTheme.setAttribute('data-theme', 'light')
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch("./myApi.json")
      .then(res => res.json())
      .then(data => { setRecipes(data) })
  }, [])

  const handleCart = (r) => {
    const isExist = cart.find(rcp => rcp.recipe_id == r.recipe_id);
    if (!isExist) {
      setCart([...cart, r])
    }
    else {
      toast('Already Exist')
    }
  }


  const handleDelete = (theItem) => {
    const newCart = cart.filter(item => item.recipe_id != theItem.recipe_id);
    setCart(newCart);
    setCooking([...cooking, theItem]);
  }











  return (
    <>
      <header className='max-w-[1320px] mx-auto'>
        {/* Nav Bar Section */}
        <nav className='my-12'>
          <div className="navbar bg-base-100 justify-between">
            <div>
              <a className="btn btn-ghost text-4xl">Tasty Grill</a>
            </div>
            <div>
              <ul className="flex gap-10">
                <li><a href="">Home</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Search</a></li>
              </ul>
            </div>
            <div className="flex-none gap-2">
              <div className=" input-with-icon">
                  <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                  <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto " />
              </div>
              <div>
                <div className="btn btn-ghost btn-circle ml-3 bg-[#0BE58A]">
                  <div className="w-10 rounded-full">
                    <i className="fa-regular fa-user text-black"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Banner Section */}
        <section className='mb-28'>
          <div className="hero min-h-[600px] bg-image bg-cover rounded-3xl">
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="mb-7 text-5xl font-bold text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className="mb-10 text-gray-200">Welcome to Tasty Grill, where every dish tells a story of culinary innovation and comfort.  Step into a <br /> realm where traditional flavors dance with contemporary twists, creating an  unforgettable <br /> dining experience that tantalizes the taste buds and warms the soul.</p>
                <div className='flex gap-8 justify-center'>
                  <button className="btn bg-[#0BE58A] text-gray-800 px-5 rounded-[50px] hover:text-white border-none hover:bg-black">Explore Now</button>
                  <button className="btn btn-primary bg-transparent rounded-[50px] border-2 border-white text-white">Our Feedback</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Recipes section */}
        <section>
          {/* section title */}
          <div className='text-center mb-12'>
            <h1 className='text-[40px] font-semibold mb-6'>Our Recipes</h1>
            <p>Our Recipes are more than just ingredients and instructions - they're a symphony of flavors meticulously crafted to delight your senses. <br />Each dish tells a story of tradition, innovation, and culinary passion, embodying the essence of our commitment to excellence.</p>
          </div>
          {/* cart and 'Want to cook' Container */}
          <div className='flex gap-6'>
            {/* Cart Container */}
            <div className='grid grid-cols-2 gap-6'>
              {
                recipes.map(rcp => <SingleRecipe recipe={rcp} handleCart={handleCart}></SingleRecipe>)
              }
            </div>

            {/* Want to Cook Container */}
            <div>
              <div className='p-8 bg-white rounded-2xl border-2 border-[#28282833]'>
                <div className='text-center'><h1 className='text-black text-2xl font-semibold'>Want to Cook: {cart.length}</h1></div>
                <hr className='my-5' />
                <div className='flex gap-20 mb-4 ml-9 text-[#878787] font-medium'>
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                </div>
                <div className='mb-8'>
                  {
                    cart.map((item, index) => (
                      <div className='flex gap-3 items-center text-[#282828B3] font-medium bg-[#28282805] rounded-xl p-4 mb-3'>
                        <p className='text-black font-semibold'>{index + 1}</p>
                        <p>{item.recipe_name}.</p>
                        <p>{item.preparing_time}.</p>
                        <p>{item.calories}.</p>
                        <button onClick={() => handleDelete(item)} class="btn bg-[#0BE58A] rounded-[50px] border-none hover:text-white hover:bg-green-600 text-black px-6">Preparing</button>
                      </div>
                    ))
                  }
                </div>
                {/* currently cooking */}
                <div>
                  <div className='text-center'><h1 className='text-black text-2xl font-semibold'>Currently Cooking: {cooking.length}</h1></div>
                  <hr className='my-5' />
                  <div className='flex gap-20 mb-4 ml-9 text-[#878787] font-medium'>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                  </div>
                  <div>
                    {
                      cooking.map((item, index) => (
                        <div className='flex gap-3 items-center text-[#282828B3] font-medium bg-[#28282818] rounded-xl p-4 mb-3'>
                          <p className='text-black font-semibold'>{index + 1}</p>
                          <p>{item.recipe_name}.</p>
                          <p>{item.preparing_time}.</p>
                          <p>{item.calories}.</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}

export default App
