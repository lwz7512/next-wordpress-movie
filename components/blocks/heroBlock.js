/**
 * hero block
 */
 import Link from 'next/link'

export default function HeroBlock({ dataset }) {

  const node = dataset[0]

  // console.log(node)

  const titleStl = {
    position: 'absolute', 
    top:'20%', left:'20%', width:'60%',
    fontSize: 36, textAlign: 'center',
  }
  const subTitleStl = {
    position: 'absolute', 
    top:'30%', left:'20%', width:'60%', 
    fontSize: 18, textAlign: 'center',
    color: '#666666'
  }

  const btnsRow = {
    position: 'absolute', 
    bottom: '40%', left: 0, width: '100%',
    // backgroundColor: '#CCC', height: '60px',
    display: 'flex',
  }

  const colLeft = {
    flex: 1,
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-end',
  }

  const colRight = {
    flex: 1,
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
  }

  const btnYellow = {
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    color: '#FFF',
  }

  const btnBlack = {
    backgroundColor: '#2b2b2b',
    padding: '10px 20px',
    color: '#FFF',
  }

  return (
    <section>
      <div style={{position: 'relative'}} >
        <img src={node.backgroundImage.sourceUrl} style={{width: '100%'}} />
        <h1 style={titleStl}>
          {node.title}
        </h1>
        <p style={subTitleStl}>
          {node.subTitle}
        </p>
        <div style={btnsRow}>
          <div style={colLeft}>
            <Link href={node.learnMore}>
              <a className={`hover:underline`} style={btnYellow}>
                Learn More
              </a>
            </Link>
          </div>
          <div style={colRight}>
            <Link href={node.hireUs}>
              <a className={`hover:underline`} style={btnBlack}>
                Hire Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}