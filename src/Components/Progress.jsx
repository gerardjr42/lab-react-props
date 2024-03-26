const Progress = ({currentRaised, goal}) => {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">$0{currentRaised}</span> of <span className="secondary">$1000{goal}</span>
      </h2>
    </section>
  )
}

export default Progress;
