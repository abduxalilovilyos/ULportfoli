import React from 'react'
import WorksCard from './WorksCard'

const Works = () => {
  return (
    <div className='works'>
        <h4>Future works</h4>
        <WorksCard photo={"./images/img2.jpg"} title={"Designing Dashboards"} year={2020} theam={"Dashbord"} comment={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."} />
        <WorksCard photo={"./images/img3.jpg"} title={"Vibrant Portraits of 2020"} year={2018} theam={"IIlustration"} comment={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."} />
        <WorksCard photo={"./images/img4.jpg"} title={"36 Days of Malayalam type"} year={2018} theam={"Typography"} comment={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."} />
    </div>
  )
}

export default Works