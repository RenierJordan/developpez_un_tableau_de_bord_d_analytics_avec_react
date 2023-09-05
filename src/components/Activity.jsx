import "../styles/Activity.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="Activity-tooltip">
        <p className="Activity-tooltip__value">{`${payload[0].value} kg`}</p>
        <p className="Activity-tooltip__value">{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

export default function Activity(props) {
  const data = [];

  for (let day = 0; day < props.sessions.length; day++) {
    const dayStr = (day + 1).toString();
    data.push({
      day: dayStr,
      kilogram: props.sessions[day].kilogram,
      calories: props.sessions[day].calories,
    });
  }

  return (
    <div className="Activity">
      <div className="Activity-inline">
        <p className="Activity-title">Activité quotidienne</p>
        <div className="Activity-legend">
          <div className="Activity-legend__weight">
            <div className="black-dot dot"></div>
            <span>Poids (kg)</span>
          </div>
          <div className="Activity-legend__calories">
            <div className="red-dot dot"></div>
            <span>Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical="" />
          <XAxis dataKey="day" tickMargin={16} tickSize={0} />
          <YAxis
            yAxisId="weight"
            domain={["dataMin-1", "dataMax+2"]}
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={5}
            tickCount={3}
          />
          <YAxis yAxisId="calories" axisLine={false} tickLine={false} hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="weight"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[15, 15, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[15, 15, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
Activity.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
};
CustomTooltip.propTypes = {
  active: PropTypes.boolean,
  payload: PropTypes.shape({
    value: PropTypes.number,
    length: PropTypes.number,
  }),
};
