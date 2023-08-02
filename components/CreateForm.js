export default function CreateForm() {
  return (
    <div className="bigBox">
      <h2 className='createCookie'>Create Cookie Stand</h2>
      <form className='form'>
        <label className='firstLabel' for='location'>Location</label>
        <input className='firstInput' type="text" />
      </form>
      <div className='threeFormButton'>
        <form className='form'>
          <label for='minimum-customer-per-hour'>Minimum Customers per Hour</label>
          <input className='input' type="number" />
        </form>
        <form className='form'>
          <label for='maximum-customer-per-hour'>Maximum Customer per Hour</label>
          <input className='input' type="number" />
        </form>
        <form className='form'>
          <label for='average-cookies-per-sale'>Average Cookies per Sale</label>
          <input className='input' type="number" />
        </form>
        <buton className='button' type='submit'>Create</buton>
      </div>
    </div>
  )
}