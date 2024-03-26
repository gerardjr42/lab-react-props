import DonationInfo from "./DonationInfo";

const RecentDonations = ({donations}) => {
  
  const listInfo = donations.map(info => {
    return (
      <DonationInfo
      name = {info.name}
      amount = {info.amount}
      caption = {info.caption}
      />
    )
  })

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{listInfo}</ul>
    </section>
  )
}

export default RecentDonations;