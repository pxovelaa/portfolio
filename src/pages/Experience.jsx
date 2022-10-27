import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Tbilis State University, Bussiness Administration
          </h3>
          <p>Bachelor's Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline--education"
          date="2015 - 2016"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coffe-Pele company
          </h3>
          <p>Sales manager</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline--education"
          date="2015 - 2016"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sweet Country factory
          </h3>
          <p>operator</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline--education"
          date="2017 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Global-Beer-Georgia factory
          </h3>
          <p>Shift-leader</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline--education"
          date="2020 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-end developer
          </h3>
          <p>Self-educated</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
