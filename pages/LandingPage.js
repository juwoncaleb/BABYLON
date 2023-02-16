import React from 'react'

export default function LandingPage() {
  return (
    <div className='whole_Land'>
      <div className='landing'>

        <div className=' section_Text '>
          <p className='section_Text_main ' >Oversee all Facets of the recruitment process</p>
          <p className='section_Text_sub mt-2'>Tracking candidates, conducting interviews, and coordinating with interviewers</p>
          <p className='section_Text_sub mt-2'>using one convenient platform</p>
          <p className='mt-6'>Hiring and interviewing platform where recruiters and interviewers </p>
          <p>work together to find best candidates and reduce time to hire.</p>
          <div className='mt-6'>
            <button className='start mr-6'>
              Get started for free
            </button>
            <button className='demo'>
              Book a Demo
            </button>
          </div>
        </div>

        <div>
          <img className='hero mt-10' src='./hero.png' />
        </div>
        <div>
          <p className='section_Text_main mt-10 info mb-20' >Interviewing  and hiring platform for tech companies</p>

          <div className='info_Card gap-6  grid grid-cols-1 md:grid-cols-3 '>
            <div className='cardd '>
              <img className='info_Card_img mt-2' src='./track.png' />
              {/* HEADER */}
              <p className='info_card_header mt-20'>Track candidates</p>
              {/* TEXTS */}
              <p className='info_card_text'>Get complete visibility of </p>
              <p className='info_card_text mb-14'>your candidates pipeline.</p>


            </div>
            <div className='cardd'>
              <img className='info_Card_img mt-2' src='./run.png' />
              {/* HEADER */}
              <p className='info_card_header mt-16 '>Run interviews</p>
              {/* TEXTS */}
              <p className='info_card_text'>Interview templates elevate  </p>
              <p className='info_card_text'>interviewing experience to a</p>
              <p className='info_card_text '>new level.</p>


            </div>
            <div className='cardd'>
              <img className='info_Card_img2 mt-2' src='./manage.png' />
              {/* HEADER */}
              <p className='info_card_header mt-20'>Manage interviewers</p>
              {/* TEXTS */}
              <p className='info_card_text'>Keep track of available interviewers, </p>
              <p className='info_card_text'>their experience level, and skills.</p>


            </div>
          </div>
          <div>

          </div>
        </div>
        <div className='tracky'>

          <div className='viscibility'>
            <p className='vis'>Complete candidate visibility</p>
            <p className='finger'>All the candidate information is at your fingertips</p>
          </div>

          <div className='flex justify-around candidate '>
            <div className=' mt-10'>
              <p className='overview'>Candidate Overview</p>
              <p>Instantly see what stage each of your</p>
              <p>candidates is at.</p>
              <p>Candidate information like CV, email, and</p>
              <p>location is easily accessible via the candidate</p>
              <p>profile.</p>
            </div>
            <img className='over mb-20 ' src='./over.png' />
          </div>
        </div>

        <div className='flex justify-around atss'>
          <img className='integration' src='inntegration1.png' />
          <img className='integration' src='integration2.png' />
          <div className='bring'>
            <p className='overview ats'>Bring your own ATS</p>
            <p>If you use Applicant Tracking System you can easily</p>
            <p>integrate with InterviewTime and keep the</p>
            <p>candidates’ data in sync.</p>
            <p className='mt-10'>We currently support 36 ATS integrations.
            </p>
          </div>
        </div>

        <div className='struk'>
          <p className='Structure_text '>Structured job interviews</p>
          <p className='predefined template'>Predefined interview templates help interviewers prepare and run consistent interview</p>
          <div className=' mt-20  justify-center grid md:grid-cols-3 md:gap-4 grid-cols-1'>
            <div>
              <img className='struck' src="https://img.icons8.com/plasticine/100/null/new-job.png" />            {/* HEADER */}
              <p className='info_card_header mb-4'>Take Home Assignment</p>
              {/* TEXTS */}
              <p className='info_card_text'>Ask canndidate to complete an   </p>
              <p className='info_card_text'>assignment and return the results.</p>
              {/* LEARN MORE BUTTON */}

            </div>
            <div>
              <img className='struck' src="https://img.icons8.com/ios/50/null/source-code.png" />            {/* HEADER */}
              <p className='info_card_header mb-4'>Live Coding Challege</p>
              {/* TEXTS */}
              <p className='info_card_text'>Evaluate candidates' code across several criteria.  </p>

              {/* LEARN MORE BUTTON */}


            </div>
            <div>
              <img className='struck' src="https://img.icons8.com/nolan/64/messages-mac.png" />            {/* HEADER */}
              <p className='info_card_header mb-4'>Technical Q/A</p>
              {/* TEXTS */}
              <p className='info_card_text'>Ask questions from different competence areas. </p>
              {/* LEARN MORE BUTTON */}


            </div>
          </div>
        </div>


        <div className='inter'>
          <p className='Structure_text'>No more Inconsitent Interview</p>
          <p className='predefined'>Interviewers use predefined interview templates for all types of interviews. These templates define</p>
          <p className='predefined template '>competence areas and interview questions that guide interviewers during their interviews.</p>

          <div className='grid  accesss md:grid-cols-2 md:gap-2 grid-cols-1 mt-24'>
            <div className='unbased mr-4'>
              <p className='Structure_text mt-6'>Assess faster and smarter</p>
              <p className='predefined' id='acessText'>Use star ratings during candidate assessment that form </p>
              <p className='predefined'>the basis for a candidate score </p>
              <img className='access' src='./access.png' />

            </div>
            <div className='unbased ml-4'>
              <p className='Structure_text mt-6'>Unbiased hiring decision</p>
              <p className='predefined'>Candidates’s score lets you easily compare candidates  </p>
              <p className='predefined'>and their competence areas. </p>
              <img className='decesion mb-4' src='./decesion.png' />
            </div>
          </div>
        </div>

        <div>
          <p className='Structure_text platt'>One platform, many solutions</p>
          <p className='predefined mb-10 recr'>A platform that brings together recruiters and interviewers.</p>
          <div className='info_Card  justify-center grid grid-cols-3'>
            <div>
              <img className='platfo' src='./recruit.png' />
              {/* HEADER */}
              <p className='info_card_header'>Recruiters</p>
              {/* TEXTS */}
              <p className='info_card_text'>Track candidates and  </p>
              <p className='info_card_text'>coordinate interviews.</p>

            </div>
            <div>
              <img className='platfo' src='./call.png' />

              {/* HEADER */}
              <p className='info_card_header'>Hiring Managers</p>
              {/* TEXTS */}
              <p className='info_card_text'>Define interview templates  </p>
              <p className='info_card_text'>and compare candidates. </p>


            </div>
            <div>
              <img className='platfo' src='./stats.png' />
              {/* HEADER */}
              <p className='info_card_header'>Interviewers</p>
              {/* TEXTS */}
              <p className='info_card_text'>Assess candidates in an  </p>
              <p className='info_card_text'>efficient way with less time.</p>


            </div>
          </div>
        </div>


        <p>START NOW</p>
      </div>
    </div>
  )
}
