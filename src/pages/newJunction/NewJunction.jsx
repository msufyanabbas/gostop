export default function NewJunction() {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New Junction</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label> Junction Id</label>
          <input type='text' placeholder='Enter a number like - 123 ' />
        </div>
        <div className='newUserItem'>
          <label>Junction Name</label>
          <input type='text' placeholder='Jail Chowk Point' />
        </div>
        <div className='newUserItem'>
          <label>Location</label>
          <input type='text' placeholder='Enter the road or chowk' />
          <label>City</label>
          <input type='text' placeholder='Enter the city' />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='text' placeholder='+1 123 456 67' />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type='text' placeholder='New York | USA' />
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label for='other'>Other</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select className='newUserSelect' name='active' id='active'>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUserButton'>Create</button>
      </form>
    </div>
  )
}
