/**
 * Strength block
 */

 export default function StrengthBlock({ dataset }) {

  // console.log(dataset)

  const ulStl = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  const liStl = {
    display: 'inline-block',
    fontSize: 24,
  }

  const sectionStl = {
    // backgroundColor: '#eef0ed',
    paddingBottom: 80,
  }


  return (
    <section style={sectionStl}>
      <h1 className="pb-10 text-gray-400">Strength Block</h1>
      <ul style={ulStl} className="px-20 py-10">
        {
          dataset.map(node => (
            <li key={node.title} style={liStl}>
              {node.title}
            </li>
          ))
        }
      </ul>
    </section>
  )
}