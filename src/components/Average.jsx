import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Rectangle,
} from "recharts";
import "../styles/Average.css";
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="Average-tooltip">
        <p className="Average-tooltip__value">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const CustomizedCursor = (props) => {
  const { points, width } = props;
  const { x } = points[0];
  return (
    <Rectangle
      fill="black"
      fillOpacity={0.1}
      x={x}
      width={width}
      height={262}
    />
  );
};

export default function Average(props) {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const data = [];
  props.average.sessions.forEach((session) => {
    data.push({
      name: days[session.day - 1],
      sessionLength: session.sessionLength,
    });
  });

  const AverageTitle = () => {
    return <p className="Average-title">Durée moyenne des sessions</p>;
  };

  return (
    <div className="Average">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="#ffffff99"
            tickMargin={20}
            interval={"preserveStartEnd"}
          />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            strokeWidth={2}
            dot={{ fill: "white", stroke: "", strokeWidth: 0, r: 0 }}
            activeDot={{ stroke: "#FFFFFF77", strokeWidth: 6, r: 4 }}
          />
          <Legend verticalAlign="top" align="left" content={AverageTitle} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
Average.propTypes = {
  average: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        sessionLength: PropTypes.number,
      })
    ).isRequired,
  }),
};

CustomTooltip.propTypes = {
  active: PropTypes.boolean,
  payload: PropTypes.shape({
    value: PropTypes.number,
    length: PropTypes.number,
  }),
};

CustomizedCursor.propTypes = {
  points: PropTypes.arrayof(
    PropTypes.shape({
      x: PropTypes.number,
    })
  ),
  width: PropTypes.number,
};
