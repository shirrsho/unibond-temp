import { useNavigate } from "react-router-dom";

export default function Item ({ item }) {

  const navigate = useNavigate();
  
  const handleclick = () => {
    navigate(`/${item.id}`);
  }

    return (
      <div onClick={handleclick} className="col-md-3 mb-4" style={{ padding: '10px 10px' }}>
        <div className="card mb-4 box-shadow" style={{ borderRadius: '0' }}>
          <img className="card-img-top" src={item?.thumbnail} alt={item?.name} />
          <div className="card-body">
            {/* <p className="card-text">{item.description}</p> */}
            <div className="d-flex justify-content-between align-items-center">
              {item?.stock<=0 && <span style={{color:"red"}}>Out of Stock</span>}
              {item?.stock>0 && <p className="card-title">{item?.type}</p>}
              {item?.stock>0 && <h5 style={{fontSize:"larger"}}>{item?.price} Tk</h5>}
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