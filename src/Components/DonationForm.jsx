//Need a prop for name, caption, and amount inputs
const DonationForm = ({updatedDonationPosition}) => {
  return (
    <section className="donation-form">
      <h3>You could be donation 
        <span className="secondary"> #1{updatedDonationPosition}!</span>
      </h3>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name..."/>
        <label htmlFor="caption">Caption</label>
        <input type="text" id="caption" name="caption" placeholder="Add a brief message..."/>
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" name="amount" placeholder="0"/>
        <button>Donate!</button>
      </form>
    </section>
  )
}

export default DonationForm;