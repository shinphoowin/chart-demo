import { Line } from "react-chartjs-2";
import { Menu, Grid } from "semantic-ui-react";

const RenChart = ({ data, menulist, handleItemClick, activeItem }) => {
  return (
    <div>
      <Grid columns={2} padded>
        <Grid.Column width={6}></Grid.Column>
        <Grid.Column width={10}>
          <div className="right-align">
            <Menu>
              {menulist.map((el) => (
                <Menu.Item
                  name={el}
                  active={activeItem === el}
                  onClick={handleItemClick}
                  key={el}
                  className="menu-txt"
                />
              ))}
            </Menu>
          </div>
        </Grid.Column>
      </Grid>
      <Line
        data={data}
        options={{
          interaction: {
            intersect: false,
          },
          plugins: {
            legend: false,
          },
          scales: {
            x: {
              type: "linear",
            },
          },
        }}
      />
    </div>
  );
};
export default RenChart;
