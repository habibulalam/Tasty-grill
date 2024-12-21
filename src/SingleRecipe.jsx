import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SingleRecipe ({recipe, handleCart}) {
    return (
        <div className="max-w-96 p-6 bg-white rounded-2xl border-2 border-[#28282833]">
            <div className="mb-6 h-[350px]">
                <img className="h-full w-full rounded-2xl border border-gray-200" src={recipe.recipe_image} alt="" />
            </div>
            <h1 className="text-xl font-semibold text-black mb-4">{recipe.recipe_name}</h1>
            <p className="text-gray-500">{recipe.short_description}</p>
            <hr className="my-4"/>
            <h2 className="text-black text-lg font-medium mb-4">Ingredients: {recipe.ingredients.length}</h2>
            <ul className="text-gray-600 ml-3">
                <li><i class="fa-solid fa-arrow-right"></i> {recipe.ingredients[0]}</li>
                <li><i class="fa-solid fa-arrow-right"></i> {recipe.ingredients[1]}</li>
                <li><i class="fa-solid fa-arrow-right"></i> {recipe.ingredients[2]}</li>
                <li><i class="fa-solid fa-arrow-right"></i> {recipe.ingredients[3]}</li>
            </ul>
            <hr className="my-4"/>
            <div className="flex gap-6 text-[#282828CC] mb-9">
                <p><i class="fa-regular fa-clock"></i> {recipe.preparing_time}</p>
                <p><i class="fa-solid fa-fire"></i> {recipe.calories}</p>
            </div>
            <button onClick={()=> handleCart(recipe)} class="btn bg-[#0BE58A] rounded-[50px] border-none hover:text-white hover:bg-green-600 text-black px-6">Want to Cook</button>
            <ToastContainer />
        </div>
    )
}