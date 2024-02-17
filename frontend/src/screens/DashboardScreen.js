import DashboardMenu from "../components/DashboardMenu";

const DashboardScreen = {
  render: () => {
    return `
      <div class="dashboard-screen row">
        ${DashboardMenu.render({selected: 'dashboard'})}
        <div class="dashboard-content col-lg-9">
          <h1>Dashboard</h1>
          <div>
            info and Charts will be added here
          </div>
        </div>
      </div>
    `
  },
  after_render: () => {

  }
}

export default DashboardScreen;