import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="global-form">
      <form action="">
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-3 d-flex align-items-center">
            <label>Item Id تسلسل المادة</label>
          </div>
        </div>
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6">
            <div className="w-25">
              <input type="text" className="form-control bg-success" disabled />
            </div>
          </div>
          <div className="col-sm-3 d-flex align-items-center">
            <label>Active item تفعيل المادة</label>
          </div>
        </div>
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6 d-flex">
            <div className="col-sm-3 d-flex align-items-center">
              <Link to="" className="btn btn-primary w-100">
              <FontAwesomeIcon icon={faEllipsis}/>
              </Link>
            </div>
            <div class="col-sm-1"></div>
            <div className="col-sm-8">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm-4 d-flex align-items-center">
            <label>Item barcode باركود المادة</label>
          </div>
        </div>
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6 d-flex">
            <div className="col-sm-3 d-flex align-items-center">
              <Link to="" className="btn btn-primary w-100">
              <FontAwesomeIcon icon={faEllipsis}/>
              </Link>
            </div>
            <div class="col-sm-1"></div>
            <div className="col-sm-8">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm-4 d-flex align-items-center">
            <label>Item Name اسم المادة</label>
          </div>
        </div>
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6 d-flex">
            <div className="col-sm-3 d-flex align-items-center">
              <Link to="" className="btn btn-primary w-100">
              <FontAwesomeIcon icon={faEllipsis}/>
              </Link>
            </div>
            <div class="col-sm-1"></div>
            <div className="col-sm-8">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm-4 d-flex align-items-center">
            <label>Producing company اسم العلمي</label>
          </div>
        </div>
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-3 d-flex align-items-center">
            <label>Purchase price سعر الشراء</label>
          </div>
        </div>
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-3 d-flex align-items-center">
            <label>Bulk price سعر بالجملة</label>
          </div>
        </div>
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-3 d-flex align-items-center">
            <label>Unit price سعر المفرد</label>
          </div>
        </div>

        
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6 d-flex">
            <div className=" d-flex col-sm-6 align-items-center">
              <div className="col-sm-5">
                <label>Pieces قطعة</label>
              </div>
              <div className="col-sm-6">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className=" col-sm-6 d-flex align-items-center">
              <div className="col-sm-6 text-end">
                <label className="px-4">Per لكل</label>
              </div>
              <div className="col-sm-6">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-sm-3 d-flex align-items-center">
            <label>Free الراتون المجاني</label>
          </div>
        </div>
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-3 d-flex align-items-center">
            <label>Sale Limit حد البيع</label>
          </div>
        </div>
        <div className="row gap-2 align-items center mb-3">
          <div className="col-sm-112 d-flex align-items-center">
            <label>Notes item ملاحظات المادة</label>
          </div>
          <div className="col-sm-12">
            <textarea rows={6} cols={10} className="form-control"></textarea>
          </div>
        </div>
        <div className="d-flex gap-3 py-3">
          <button type="button" class="btn btn-primary">
             Print طباعة
          </button>
          
          <button type="button" class="btn btn-dark">
          Edit تعديل
          </button>
          <button type="button" class="btn btn-secondary">
            Add إضا
          </button>
          <button type="button" class="btn btn-success">
            Save حفظ
          </button>
          <button type="button" class="btn btn-danger">
          Cancel تراجع
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
