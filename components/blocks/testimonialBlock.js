/**
 * testimonial block
 */

 export default function TestimonialBlock({ dataset }) {

  // console.log(dataset)

  const rowStl = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 80px',
    width: '100%',
    maxWidth: 1100,
  }

  const cardStl = color => (
    {
      backgroundColor: `#${color}`,
      width: 300,
      height: 300,
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
  )

  const userStl = {
    margin: 20,
    fontSize: 24,
    textAlign: 'center',
  }

  const avtStl = {
    width: 100, 
    height: 100,
    borderRadius: 50,
    margin: 40,
  }

  const sectionStl = {
    backgroundColor: '#fff',
    paddingBottom: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const titleStl = {
    width: '100%',
  }

  return (
    <section style={sectionStl}>
      <h1 className="pb-10" style={titleStl} >Testimonial Block</h1>
      <div style={rowStl}>
        {
          dataset.map(node => (
            <div style={cardStl(node.backgroundColor)} key={node.userName} >
              <img src={node.avatarImage.sourceUrl} style={avtStl}/>
              <h1 style={userStl}>{node.userName}</h1>
            </div>
          ))
        }
      </div>
    </section>
  )
}