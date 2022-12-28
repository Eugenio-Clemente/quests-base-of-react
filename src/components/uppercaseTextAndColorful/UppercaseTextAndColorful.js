function UppercaseTextAndColorful({ label, color }) {
  let text = label.toUpperCase()
  return (
    <div>
      <h1>Desafio 01</h1>
      <p style={{ color }}>{text}</p>
    </div>
  )
}

UppercaseTextAndColorful.defaultProps = {
  color: '#DC143C'
}

export default UppercaseTextAndColorful