import React from 'react';
const Header = ({query,setQuery,clickHandler,type,setType}) => {

  return (
    <header className="text-center w-full h-fit flex flex-col justify-center items-center">
      <img src="https://s3-alpha-sig.figma.com/img/658e/9eb4/b59e9267b322e747608b14216267bc8f?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFhYCFkC2i5fjcgajHTb5~HI4KpP6gA06YG79gjPMZ9aXui1Amb1xCuQtbvsGEs9wJ7Askx~gNZi5GGmzrwGtwcXyRQz~X03fgtWvHUGGhvpqtMCKD6g5PrvLT5uhjJjJ7dXJkduK9ai3yXa5W25r8vkP2~mZyXCKImV2piNGXKVugbgazWifhqnVvNKZhYBkCiYWeKMN735OS2YPyOjkYCOFLX4UKNK~YM0rM~U03khSnSqao3Wxh3hEZozqkYQckfARIVOndvTZGKNP0b0rDzPrWSrZFoccYII4xV7pXURcowGa3YekzKh6hYt6ERSkxjQscFOTaUBuOeNqEogSA__"
       alt="Travel" className="w-11/12 lg:w-2/5 sm:w-10/12 mt-14 rounded-xl object-cover" />
      <div className="p-5 w-10/12 lg:w-4/12 sm:w-6/12 bg-slate-200 flex justify-center rounded-xl gap-4 -translate-y-12">
      <select value={type} onChange={(e)=>setType(e.target.value)} className="p-2 w-11/12 rounded border leading-none">
            <option value="">Choose one</option>
            <option value="resturants">Restaurants</option>
            <option value="hotels">Hotels</option>
          </select>
        <select type="text" placeholder="Search for" className="p-2 w-2/5 rounded border" value={query}
        onChange={(e)=>setQuery(e.target.value)}>
            <option value="">Choose one</option>
            <option value="andhrapradesh">Andhra Pradesh</option>
            <option value="assam">Assam</option>
            <option value="bihar">Bihar</option>
            <option value="delhi">Delhi</option>
            <option value="gujarat">Gujarat</option>
            <option value="jammukashmir">Jammu&Kashmir</option>
            <option value="madhyapradesh">Madhya Pradesh</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="uttarpradesh">Uttar Pradesh</option>
            <option value="westbengal">West Bengal</option>
        </select>
        <button className="p-2 bg-blue-500 text-white rounded"
        onClick={clickHandler}
        >Go</button>
      </div>
    </header>
  );
};

export default Header;