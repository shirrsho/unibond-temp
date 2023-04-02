import { useNavigate } from "react-router-dom";

export default function Item ({ item }) {

  const navigate = useNavigate();
  
  const handleclick = () => {
    navigate(`/${item.id}`);
  }

    return (
      <div onClick={handleclick} className="col-md-3 mb-4" style={{ padding: '30px 30px' }}>
        <div className="card mb-4 box-shadow" style={{ borderRadius: '0' }}>
          <img className="card-img-top" width={200} height={200} src={item.thumbnail} alt={item.name} />
          <div className="card-body">
            {/* <p className="card-text">{item.description}</p> */}
            <div className="d-flex justify-content-between align-items-center">
              <p className="card-title">{item.name}</p>
              <h5 style={{fontSize:"larger"}}>{item.price} Tk</h5>
              {/* <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Book Now
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small className="text-muted">9 mins</small> */}
            </div>
          </div>
        </div>
      </div>
    );
  }