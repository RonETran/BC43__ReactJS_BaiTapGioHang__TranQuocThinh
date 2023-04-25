import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    let {detail} = this.props;
    return (
        <div class="modal fade" id="modal-detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Chi tiết</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex align-items-center">
              <img src={detail.image} width={250} alt="" className='me-4'/>
              <div>
                <h3 className='fs-32'>{detail.name}</h3>
                <p className='fs-20'>{detail.description}</p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
