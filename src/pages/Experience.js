import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#888888">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Sep 2022 - Jun 2025"
                    iconStyle={{ background: "#888888", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        University of Washington
                    </h3>
                    <p>Bachelor of Science in Computer Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Mar 2022 - Jun 2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Kumon</h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bellevue, Washington
                    </h4>

                    <p>Teacher Assistant</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Jun 2023 - Aug 2023"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Quadrant Resource
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Redmond, Washington
                    </h4>

                    <p>DevOps Engineering Internship</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Sep 2023 - Present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Robotics</h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bothell, Washington
                    </h4>

                    <p>Developer</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}
export default Experience