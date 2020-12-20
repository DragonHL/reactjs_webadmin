
import {storage} from '../../FirebaseCofig/Firebase';

import '../../css/Overview.css';

import {Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';

import ServiceEmployee from '../../Service/EmployeeService';

import {useHistory} from 'react-router-dom';

import moment from 'moment';

const nameRE = /[a-zA-Z]/;
const phoneRE = /[0-9]{10}/;
const addressRE = /[a-zA-Z]/;
const roleRE = /[a-z]/;
const FormEdit_Employees = props => {
  const initialFieldValues = {
    name: props.location.state.name,
    phone: props.location.state.phone,
    address: props.location.state.address,
    birthday: moment (props.location.state.birthday, 'DD/MM/YYYY').format (
      'YYYY-MM-DD'
    ),
    startWork: moment (props.location.state.startWork, 'DD/MM/YYYY').format (
      'YYYY-MM-DD'
    ),
    endWork: moment (props.location.state.endWork, 'DD/MM/YYYY').format (
      'YYYY-MM-DD'
    ),
    role: props.location.state.role,
    imageUrl: props.location.state.imageUrl,
    key: props.location.state.key,
    nameErr: '',
    phoneErr: '',
    addressErr: '',
    roleErr: '',
  };

  const [valuesEmployees, setValuesEmployees] = useState (initialFieldValues);
  const [submitted, setSubmitted] = useState (false);
  const [image, setImage] = useState (null);
  const history = useHistory ();

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setValuesEmployees (prevData => {
          return {
            ...prevData,
            nameErr: '',
            phoneErr: '',
            addressErr: '',
            roleErr: '',
            birthErr: '',
            startWErr: '',
          };
        });
      }, 3000);
      return () => {
        clearTimeout (timer);
      };
    },
    [
      valuesEmployees.nameErr,
      valuesEmployees.phoneErr,
      valuesEmployees.addressErr,
      valuesEmployees.roleErr,
      valuesEmployees.birthErr,
      valuesEmployees.startWErr,
    ]
  );

  const handleInputChange = e => {
    var {name, value} = e.target;
    setValuesEmployees (prevData => {
      return {...prevData, [name]: value};
    });
  };

  const checkValidation = (re, check, err) => {
    if (!re.test (check)) {
      setValuesEmployees (prevData => {
        return {
          ...valuesEmployees,
          [err]: 'Dữ liệu nhập vào không hợp lệ!',
        };
      });
      return false;
    } else {
      setValuesEmployees (prevData => {
        return {...valuesEmployees, [err]: ''};
      });
    }

    return true;
  };

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage (e.target.files[0]);
    }
  };

  const saveEmployee = () => {
    if (image !== null) {
      const uploadTask = storage
        .ref (`imagesEmployees/${image.name}`)
        .put (image);
      uploadTask.on (
        'state_changed',
        snapshot => {},
        error => {
          console.log (error);
        },
        () => {
          storage
            .ref ('imagesEmployees')
            .child (image.name)
            .getDownloadURL ()
            .then (url => {
              var data = url !== null
                ? {
                    name: valuesEmployees.name,
                    phone: valuesEmployees.phone,
                    address: valuesEmployees.address,
                    birthday: moment (valuesEmployees.birthday).format (
                      'DD-MM-YYYY'
                    ),
                    startWork: moment (valuesEmployees.startWork).format (
                      'DD-MM-YYYY'
                    ),
                    endWork: moment (valuesEmployees.endWork).format (
                      'DD-MM-YYYY'
                    ),
                    role: valuesEmployees.role,
                    imageUrl: url,
                  }
                : {
                    name: valuesEmployees.name,
                    phone: valuesEmployees.phone,
                    address: valuesEmployees.address,
                    birthday: moment (valuesEmployees.birthday).format (
                      'DD-MM-YYYY'
                    ),
                    startWork: moment (valuesEmployees.startWork).format (
                      'DD-MM-YYYY'
                    ),
                    endWork: moment (valuesEmployees.endWork).format (
                      'DD-MM-YYYY'
                    ),
                    role: valuesEmployees.role,
                  };

              ServiceEmployee.update (valuesEmployees.key, data)
                .then (() => {
                  setSubmitted (true);
                  console.log ('Update Employee Success!!!');
                  history.push (`/webadmin/employees`);
                })
                .catch (e => {
                  console.log (e);
                });
            });
        }
      );
    } else {
      var data = {
        name: valuesEmployees.name,
        phone: valuesEmployees.phone,
        address: valuesEmployees.address,
        birthday: moment (valuesEmployees.birthday).format ('DD-MM-YYYY'),
        startWork: moment (valuesEmployees.startWork).format ('DD-MM-YYYY'),
        endWork: moment (valuesEmployees.endWork).format ('DD-MM-YYYY'),
        role: valuesEmployees.role,
      };

      ServiceEmployee.update (valuesEmployees.key, data)
        .then (() => {
          setSubmitted (true);
          console.log ('Update Employee Success!!!');
          history.push (`/webadmin/employees`);
        })
        .catch (e => {
          console.log (e);
        });
    }
  };

  function close () {
    history.push ('/webadmin/employees');
  }

  const hanleFormSubmit = e => {
    e.preventDefault ();
    if (
      checkValidation (nameRE, valuesEmployees.name, 'nameErr') &&
      checkValidation (addressRE, valuesEmployees.address, 'addressErr') &&
      checkValidation (phoneRE, valuesEmployees.phone, 'phoneErr') &&
      checkValidation (roleRE, valuesEmployees.role, 'roleErr')
    ) {
      setValuesEmployees (valuesEmployees);
      saveEmployee ();
      setSubmitted (false);
    }
  };

  return (
    <div className="sub-container">
      <h2 className="titleform">Cập nhật thông tin nhân viên</h2>

      <Form onSubmit={hanleFormSubmit} className="form-insert-edit">

        <Form.Group className="row">
          <Form.Group controlId="formName" className=" form__long">
            <Form.Label>Tên: </Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name Food"
              value={valuesEmployees.name}
              onChange={e => handleInputChange (e)}
              className={valuesEmployees.nameErr ? 'err' : null}
            />
            {valuesEmployees.nameErr &&
              <h6 style={{color: 'red'}}>{valuesEmployees.nameErr}</h6>}
          </Form.Group>
          <Form.Group controlId="formBirthday" className="form__short">
            <Form.Label>Ngày sinh: </Form.Label>
            <Form.Control
              name="birthday"
              type="date"
              placeholder="Birthday"
              // value={valuesEmployees.birthday}
              value={valuesEmployees.birthday}
              onChange={e => handleInputChange (e)}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group className="row">
          <Form.Group controlId="formAddress" className="form__long">
            <Form.Label>Địa chỉ: </Form.Label>
            <Form.Control
              name="address"
              type="text"
              placeholder="Address"
              value={valuesEmployees.address}
              onChange={e => handleInputChange (e)}
              className={valuesEmployees.addressErr ? 'err' : null}
            />
             {valuesEmployees.addressErr &&
              <h6 style={{color: 'red'}}>{valuesEmployees.addressErr}</h6>}
          </Form.Group>
          <Form.Group controlId="formPhone" className="form__short">
            <Form.Label>Số điện thoại: </Form.Label>
            <Form.Control
              name="phone"
              type="text"
              placeholder="Phone"
              value={valuesEmployees.phone}
              onChange={e => handleInputChange (e)}
              className={valuesEmployees.phoneErr ? 'err' : null}
            />
            {valuesEmployees.phoneErr &&
              <h6 style={{color: 'red'}}>{valuesEmployees.phoneErr}</h6>}
          </Form.Group>
        </Form.Group>

        <Form.Group className="row">
          <Form.Group controlId="formStartWork" className="form__short">
            <Form.Label>Ngày bắt đầu làm việc: </Form.Label>
            <Form.Control
              name="startWork"
              type="date"
              placeholder="Start Work"
              value={valuesEmployees.startWork}
              onChange={e => handleInputChange (e)}
            />
          </Form.Group>

          <Form.Group controlId="formEndWork" className="form__short">
            <Form.Label>Ngày kết thúc làm việc: </Form.Label>
            <Form.Control
              name="endWork"
              type="date"
              placeholder="End Work"
              value={valuesEmployees.endWork}
              onChange={e => handleInputChange (e)}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group controlId="formRole" className=" form__short">
          <Form.Label>Quyền: </Form.Label>
          <Form.Control
            name="role"
            type="text"
            placeholder="Role"
            value={valuesEmployees.role}
            onChange={e => handleInputChange (e)}
            className={valuesEmployees.roleErr ? 'err' : null}
          />
           {valuesEmployees.roleErr &&
            <h6 style={{color: 'red'}}>{valuesEmployees.roleErr}</h6>}
        </Form.Group>

        <Form.Group className=" form__short fileImageAddress margin-form ">
          <Form.Label>Chọn ảnh: </Form.Label>
          <Form.File
            id="fileImageAddress"
            onChange={handleChange}
            // label="Choose Image:"
          />
        </Form.Group>

        <Form.Group className="row form__button">
          <Button type="Submit" className="btn-add">Đồng ý</Button>
          <Button onClick={close} className="btn-close">Hủy</Button>
        </Form.Group>

      </Form>
    </div>
  );
};

export default FormEdit_Employees;
