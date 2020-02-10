import React from "react";

const WidgetListComponent = ({}) => (
  <div className="tab-content">
    <div
      className="tab-pane w-98 fade show active "
      id="v-pills-topic1"
      role="tabpanel"
    >
      <div className="d-flex flex-row-reverse  p-1">
        <div className="custom-control custom-switch pr-3 ">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Preview
          </label>
        </div>
        <div className="pr-3">
          <button type="button" className="btn btn-success">
            Save
          </button>
        </div>
      </div>

      <div className="border">
        <div className="row">
          <div className="col-5">
            <h3>
              <label>Heading Widget</label>
            </h3>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-warning">
              <i className="fa fa-arrow-up"></i>
            </button>
            <button type="button" className="btn btn-warning">
              <i className="fa fa-arrow-down"></i>
            </button>
          </div>
          <div className="col-5 d-flex flex-row">
            <select className="form-control w-75">
              <option value="Heading" selected>
                Heading
              </option>
            </select>
            <i
              className="fa pl-4 fa-window-close fa-2x text-danger"
              aria-hidden="true"
            ></i>
          </div>
        </div>

        <div className="row p-3">
          <div className="col-12">
            <input
              type="text"
              className="form-control "
              placeholder="Heading text"
            />
          </div>
        </div>
        <div className="row p-3">
          <div className="col-12">
            <select className="form-control">
              <option selected>Heading 1</option>
            </select>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Widget name"
            />
          </div>
        </div>

        <div className="row p-3">
          <div className="col-12">
            <label>
              <h4>Preview</h4>
            </label>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-12">
            <label>
              <h1>Heading text</h1>
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row-reverse p-2">
        <a href="#" className="wbdv-add-widget">
          <i className="fa fa-plus fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
);

export default WidgetListComponent;
