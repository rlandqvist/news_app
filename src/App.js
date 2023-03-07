import React, { useEffect, useState } from "react";
import Nav from "./Nav";
function App() { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://feed.mfn.se/v1/feed/7c0dc3f4-0d57-4bea-ba07-94a9ff1f543f")
          .then((response) => response.json())
          .then((data) => setUser(data.items));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="text-center">
      <Nav/>
      <div className="mt-40 flex flex-col justify-center items-center">
        <p>Artiklar!</p>
        {user.map((item, i) => (
          
            <div
              key={i}
              className="border-2 border-black rounded-lg max-w-[450px] m-5 flex flex-col justify-center"
            >
              <div className="flex justify-center flex-col items-center">
                <div className="pt-8">
                  {item.content.attachments.map((content, j) => (
                    <div>
                      <p className="text-center px-4 pb-4" key={j}>
                        {content.file_title}
                      </p>
                      <a
                        href={content.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border-2 border-green-400 rounded-xl py-2 px-4"
                      >
                        Länk till artikel
                      </a>
                    </div>
                  ))}
                  <div className="flex flex-col p-10 justify-center items-center gap-4">
                    {item.subjects.map((subject, k) => (
                      <div className="flex flex-row items-center" key={k}>
                        <img
                          src={subject.brand_image_url}
                          alt=""
                          className="w-10 h-10"
                        />
                        <p>{subject.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
}



export default App;
