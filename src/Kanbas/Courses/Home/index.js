import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="row">
        <div className="col-9">
          <ModuleList />
        </div>
        <div className="col-3">
          <div>
            <button className="btn btn-secondary float-end me-5 mb-1">
              Import Existing Content
            </button>
            <button className="btn btn-secondary float-end me-5 mb-1">
              Import from Commons
            </button>
            <button className="btn btn-secondary float-end me-5 mb-1">
              Choose Home Page
            </button>
            <button className="btn btn-secondary float-end me-5 mb-1">
              View Course Stream
            </button>
            <button className="btn btn-secondary float-end me-5 mb-1">
              New Announcement
            </button>
            <button className="btn btn-secondary float-end me-5 mb-1">
              New Analytics
            </button>
            <button className="btn btn-secondary float-end me-5">
              View Course Notifications
            </button>
          </div>
        </div>
      </div>
      <h2>Status</h2>
    </div>
  );
}

export default Home;
