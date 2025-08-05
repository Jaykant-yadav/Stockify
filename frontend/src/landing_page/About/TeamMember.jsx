import React from 'react'
import { useState } from 'react'
import { ImageStyle } from './Team'
export default function TeamMember() {
  const [bioTrue, setBioTrue] = useState(false);
  const toggleBio = () => {
    if (!bioTrue) {
      document.querySelector(<i class="fa-solid fa-angle-up"></i>);
      setBioTrue(bioTrue);
    }
    // Toggle the state
  }
  return (
    <>
      <div className='container p-5 shadow rounded-4 mb-5'>
        <h3 className='text-center'>Our Team</h3>
        <div className='row p-5'>
          <div className='col-4'>
            <img src='Media/image1.png' style={ImageStyle} />
            <p className='text-center fs-5 lh-1'>Nithin Kamath</p>
            <p className='text-center fs-6 text-muted lh-1'>Co-founder & CFO</p>
            <p class="text-center">
              <a data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" onClick={toggleBio} className='text-decoration-none text-muted fw-semibold'>
                Bio {<i class="fa-solid fa-angle-up"></i> || <i class="fa-solid fa-angle-down"></i>}
              </a>
            </p>
            <div class="collapse" id="collapseExample1">
              <div class="card card-body">
                Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.
              </div>
            </div>
          </div>
          <div className='col-4'>
            <img src='Media/image2.png' style={ImageStyle} />
            <p className='text-center fs-5 lh-1'>Dr. Kailash Nadh</p>
            <p className='text-center fs-6 text-muted lh-1'>CTO</p>
            <p class="text-center">
              <a data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" onClick={toggleBio} className='text-decoration-none text-muted fw-semibold'>
                Bio {<i class="fa-solid fa-angle-up"></i> || <i class="fa-solid fa-angle-down"></i>}
              </a>
            </p>
            <div class="collapse" id="collapseExample2">
              <div class="card card-body">
                Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
              </div>
            </div>
          </div>
          <div className='col-4'>
            <img src='Media/image3.png' style={ImageStyle} />
            <p className='text-center fs-5 lh-1'>Venu Madhav</p>
            <p className='text-center fs-6 text-muted lh-1'>COO</p>
            <p class="text-center">
              <a data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" onClick={toggleBio} className='text-decoration-none text-muted fw-semibold'>
                Bio {<i class="fa-solid fa-angle-up"></i> || <i class="fa-solid fa-angle-down"></i>}
              </a>
            </p>
            <div class="collapse" id="collapseExample3">
              <div class="card card-body">
                Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
              </div>
            </div>
          </div>
        </div>
        <div className='row p-5'>
          <div className='col-4'>
            <img src='Media/image4.png' style={ImageStyle} />
            <p className='text-center fs-5 lh-1'>Hanan Delvi</p>
            <p className='text-center fs-6 text-muted lh-1'>CCO</p>
            <p class="text-center">
              <a data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4" onClick={toggleBio} className='text-decoration-none text-muted fw-semibold'>
                Bio {<i class="fa-solid fa-angle-up"></i> || <i class="fa-solid fa-angle-down"></i>}
              </a>
            </p>
            <div class="collapse" id="collapseExample4">
              <div class="card card-body">
                We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.
              </div>
            </div>
          </div>
          <div className='col-4'>
            <img src='Media/image5.png' style={ImageStyle} />
            <p className='text-center fs-5 lh-1'>Seema Patil</p>
            <p className='text-center fs-6 text-muted lh-1'>Director</p>
            <p class="text-center">
              <a data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5" onClick={toggleBio} className='text-decoration-none text-muted fw-semibold'>
                Bio {<i class="fa-solid fa-angle-up"></i> || <i class="fa-solid fa-angle-down"></i>}
              </a>
            </p>
            <div class="collapse" id="collapseExample5">
              <div class="card card-body">
                Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
              </div>
            </div>
          </div>
          <div className='col-4'>
            <img src='Media/image6.png' style={ImageStyle} />
            <p className='text-center fs-5 lh-1'>Karthik Rangappa</p>
            <p className='text-center fs-6 text-muted lh-1'>Chief of Education</p>
            <p class="text-center">
              <a data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6" onClick={toggleBio} className='text-decoration-none text-muted fw-semibold'>
                Bio {<i class="fa-solid fa-angle-up"></i> || <i class="fa-solid fa-angle-down"></i>}
              </a>
            </p>
            <div class="collapse" id="collapseExample6">
              <div class="card card-body">
                Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
              </div>
            </div>
          </div>
        </div>
        <div className='row p-5'>
          <div className='col-4'></div>
          <div className='col-4'>
            <img src='Media/image7.png' style={ImageStyle} />
            <p className='text-center fs-5 lh-1'>Austin Prakesh</p>
            <p className='text-center fs-6 text-muted lh-1'>Director Strategy</p>
            <p class="text-center">
              <a data-bs-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7" onClick={toggleBio} className='text-decoration-none text-muted fw-semibold'>
                Bio {<i class="fa-solid fa-angle-up"></i> || <i class="fa-solid fa-angle-down"></i>}
              </a>
            </p>
            <div class="collapse" id="collapseExample7">
              <div class="card card-body">
                Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.
              </div>
            </div>
          </div>
          <div className='col-4'></div>
        </div>
      </div>
    </>
  )
}
