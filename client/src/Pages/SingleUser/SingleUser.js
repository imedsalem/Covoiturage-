import React from 'react'
import './SingleUser.css'


const SingleUser = ({el}) => {
  console.log(el)
  return (
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<div className="container" style={{}}>
    <div className="row">
      <div className="col-md-12" style={{    width: 700, margin: '0 auto'}}>
        <div className="user-dashboard-info-box mb-0 bg-white p-4 ">
          <table className="table manage-candidates-top mb-0">
            <tbody>
              <tr className="candidates-list">
                <td className="title">
                  <div className="thumb">
                    <img className="img-fluid" src={el.pic} alt />
                  </div>
                  <div className="candidate-list-details">
                    <div className="candidate-list-info">
                      <div className="candidate-list-title">
                        <h5 className="mb-0"><a href="#">{el.name}</a></h5>
                      </div>
                      <div className="candidate-list-option">
                        <ul className="list-unstyled">
                          <li><i className="fas fa-filter pr-1" />Information Technology</li>
                          <li><i className="fas fa-map-marker-alt pr-1" />Rolling Meadows, IL 60008</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="candidate-list-favourite-time text-center">
             
                  <button class="btn btn-danger pull-right" style={{backgroundColor: "var(--color-primary)" , borderColor: "var(--color-primary)"}}>Remove</button>
                </td>
              </tr>


            </tbody>
          </table>
       
        </div>
      </div>
    </div>
</div>

  )
}

export default SingleUser