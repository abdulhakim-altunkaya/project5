import { useState, useEffect } from 'react';

function Home() {

    const [myData, setMyData] = useState([]);
    useEffect(() => {
      fetch("/test")
      .then(res => res.text())
      .then(result => {
        setMyData(result)
      })
    }, [])

    return (
      <div>
      {
      myData.map(record =>(
          <p key={record.id}>{record.age} and {record.id}</p>
      ))
      }
      </div>
    )
}

export default Home;
