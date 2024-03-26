const DonationInfo = ({name, caption, amount}) => {
  return (
    <li>
      <span>{name} donated ${amount}</span>
      {caption}
    </li>
  );
};

export default DonationInfo;