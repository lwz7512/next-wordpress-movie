/**
 * service block
 */

 export default function ServiceBlock({ dataset }) {

  // console.log(dataset)

  const row = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const card = {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    width: 900,
    maxWidth: 1100,
    justifyContent: 'center',
  }

  const cardImg = {
    width: '50%',
  }

  const cardText = {
    width: '50%',
    backgroundColor: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const titleStl = {
    fontSize: 36,
    textAlign: 'center',
  }

  const sectionStl = {
    backgroundColor: '#eef0ed',
    paddingBottom: 80,
  }

  return (
    <section style={sectionStl} >
      <h1 className="pb-10">Service Block</h1>
      <div style={row}>
        {
          dataset.map((node, i) => (
            <div style={card} key={node.name}>
              { (i % 2 == 0) ?
                (
                  <>
                    <img src={node.image.sourceUrl} style={cardImg}/>
                    <div style={cardText}>
                      <h1 style={titleStl}>{node.name}</h1>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={cardText}>
                      <h1 style={titleStl}>{node.name}</h1>
                    </div>
                    <img src={node.image.sourceUrl} style={cardImg}/>
                  </>
                )
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}