// Suggested code may be subject to a license. Learn more: ~LicenseLog:3102901773.
const Profile = () => {
    return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', fontFamily: 'Arial, sans-serif' }}>
      <div className="row" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="col-md-12">
          <div className="card" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
            <div className="card-header" style={{ backgroundColor: '#f8f9fa', padding: '1rem', fontSize: '1.2rem' }}>
                Login
              </div>
            <div className="card-body" style={{ padding: '1rem' }}>
                <form >
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" style={{ width: '100%', padding: '0.5rem' }} />
                  </div>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" style={{ width: '100%', padding: '0.5rem' }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.5rem', backgroundColor:'#007bff' , borderColor: '#007bff'}}>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;