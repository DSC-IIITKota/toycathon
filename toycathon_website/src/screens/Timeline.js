import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Timeline = () => {
    return (
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<i class="las la-hourglass-start la-3x" style={{padding:"5px"}}></i>}>
    <h3 className="vertical-timeline-element-title">Registration Start</h3>
    <h4 className="vertical-timeline-element-subtitle">Date : 25th March 2021</h4>
    <p style={{fontSize:"18px"}}>
      All the participants are required to complete the registration process on Skillenza to confirm their participation in Animate'21. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<i class="las la-hourglass-end la-3x" style={{padding:"5px"}}></i>}
  >
    <h3 className="vertical-timeline-element-title">Registration End</h3>
    <h4 className="vertical-timeline-element-subtitle">Date : 26th April 2021</h4>
    <p style={{fontSize:"18px"}}>
      Participants must register and should form teams of appropriate size(1 to 4 members) after completing the registration process before the deadline.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<i class="lab la-gripfire la-3x" style={{padding:"5px"}}></i>}
  >
    <h3 className="vertical-timeline-element-title">Inaugration Session</h3>
    <h4 className="vertical-timeline-element-subtitle">Date : 27th April 2021</h4>
    <p  style={{fontSize:"18px"}}>
      Inaugration Session of Animate'21.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<i class="las la-file-powerpoint la-3x" style={{padding:"5px"}}></i>}
  >
    <h3 className="vertical-timeline-element-title">Presentation Submission</h3>
    <h4 className="vertical-timeline-element-subtitle">Date : 28th April 2021</h4>
    <p  style={{fontSize:"18px"}}>
      All the participating teams must submit a presentation on their chosen probelm statement.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<i class="las la-cogs la-3x" style={{padding:"5px"}}></i>}
  >
    <h3 className="vertical-timeline-element-title">Prototype Implementation</h3>
    <h4 className="vertical-timeline-element-subtitle">Date : 1st-2nd May 2021</h4>
    <p  style={{fontSize:"18px"}}>
      Teams selected after the Presentation round would implement their idea and submit the prototype for the same.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<i class="las la-trophy la-3x" style={{padding:"5px"}}></i>}
  >
    <h3 className="vertical-timeline-element-title">Final Results</h3>
    <h4 className="vertical-timeline-element-subtitle">Date : 3rd-4th May 2021</h4>
    <p  style={{fontSize:"18px"}}>
      The winners of Animate'21 will be declared and closing session will be held for Animate'21
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<i class="las la-star la-3x" style={{padding:"5px"}}></i>}
  />
</VerticalTimeline>
    )
}

export default Timeline
