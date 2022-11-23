import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { initListings, addListing, deleteListing } from './redux/listingsReducer';


const SubmitListing = () => {
  const [name, setName] = useState();
  const [day, setDay] = useState();
  const [time, setTime] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addListing(name, day, time));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Name' onChange={({ target }) => setName(target.value)} />
      <input type="text" placeholder='Day' onChange={({ target }) => setDay(target.value)} />
      <input type="text" placeholder='Time' onChange={({ target }) => setTime(target.value)} />
      <button type='submit'> Submit </button>
    </form>
  );
};

function App() {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings)

  useEffect(() => {
    dispatch(initListings())
  }, [dispatch]);

  const removeListing = (listingName) => {
    dispatch(deleteListing(listingName));
  };

  return (
    <div className='App'>
      {listings.map((listing) => (
        <p>{listing.name},{listing.day},{listing.time}|<span onClick={() => removeListing(listing.name)}>(X)</span></p>
      ))}
      <br />
      <SubmitListing />
    </div>
  )
}

export default App;
