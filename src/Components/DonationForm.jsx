//Need a prop for name, caption, and amount inputs
const DonationForm = ({donations}) => {
  const updatedDonationPosition = donations.length + 1;
  return (
    <section className="donation-form">
      <h3>You could be donation
        <span className="secondary"> #{updatedDonationPosition}!</span>
      </h3>
      <form>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name..." required/>
        </div>
        <div className="caption">
          <label htmlFor="caption">Caption</label>
          <input type="text" id="caption" name="caption" placeholder="Add a brief message..." required/>
        </div>
        <div className="amount">
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" name="amount" placeholder="0" required/>
        </div>
        <button>Donate!</button>
      </form>
    </section>
  )
}

export default DonationForm;