/**
 * hero block
 */

export default function HeroBlock({ dataset }) {

  const node = dataset[0]

  // console.log(node)

  const titleStl = {
    position: 'absolute', top:'20%', left:'30%', fontSize: 30
  }
  const subTitleStl = {
    position: 'absolute', 
    top:'30%', left:'20%', width:'60%', 
    fontSize: 18, textAlign: 'center',
    color: '#666666'
  }

  return (
    <section>
      <div style={{position: 'relative'}} >
        <img src={node.backgroundImage.sourceUrl} />
        <h1 style={titleStl}>
          {node.title}
        </h1>
        <p style={subTitleStl}>
          {node.subTitle}
        </p>
      </div>
    </section>
  )
}