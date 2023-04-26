import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    let {detail} = this.props;
    return (
        <div className="modal fade" id="modal-detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Chi tiết</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <img src={detail.image} width={250} alt="" className='me-4'/>
              <div>
                <h3 className='fs-32'>{detail.name}</h3>
                <p className='fs-20'>{detail.description}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
