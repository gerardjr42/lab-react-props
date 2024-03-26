const Progress = ({currentAmount, targetAmount}) => {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">{currentAmount}</span> of <span className="secondary">{targetAmount}</span>
      </h2>
    </section>
  )
}

export default Progress;
