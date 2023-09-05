import PropTypes from "prop-types";
import "../styles/Metric.css";

export default function Metric(props) {
  return (
    <div className="User-Metric">
      <div className="User-Metric_flexbox">
        <img src={props.logo} alt="Metric-logo" className="Metric-logo" />
        <div>
          <p className="Metric-value">{props.value}</p>
          <p className="Metric-title">{props.title}</p>
        </div>
      </div>
    </div>
  );
}
Metric.propTypes = {
  logo: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
};
