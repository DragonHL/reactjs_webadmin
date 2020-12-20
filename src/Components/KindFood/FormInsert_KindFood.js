
import '../../css/Overview.css';

import {Form, Button} from 'react-bootstrap';

import {storage} from '../../FirebaseCofig/Firebase';

import React, {useState, useEffect} from 'react';

import ServiceKindFood from '../../Service/KindFoodService';

import {useHistory} from 'react-router-dom';

const nameRE = /[a-zA-Z]/;

function FormInsert_KindFood () {
  const initialFieldValues = {
    nameKindFood: '',
    quantity: '',
    imagesKindFood: '',
    nameErr: '',
  };

  const [valuesKindFood, setValueKindFood] = useState (initialFieldValues);
  const [submitted, setSubmitted] = useState (false);
  const [image, setImage] = useState (null);
  const history = useHistory ();

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setValueKindFood (prevData => {
          return {
            ...prevData,
            nameErr: '',
          };
        });
      }, 3000);

      return () => {
        clearTimeout (timer);
      };
    },
    [valuesKindFood.nameErr]
  );

  const handleInputChange = e => {
    var {name, value} = e.target;
    setValueKindFood (prevData => {
      return {...prevData, [name]: value};
    });
  };

  const checkValidation = (re, check, err) => {
    if (!re.test (check)) {
      setValueKindFood (prevData => {
        return {
          ...valuesKindFood,
          [err]: 'Dữ liệu nhập vào không hợp lệ!',
        };
      });
      return false;
    } else {
      setValueKindFood (prevData => {
        return {...valuesKindFood, [err]: ''};
      });
    }

    return true;
  };

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage (e.target.files[0]);
    }
  };

  const saveKindFood = () => {
    if (image !== null) {
      const uploadTask = storage
        .ref (`imagesKindFood/${image.name}`)
        .put (image);
      uploadTask.on (
        'state_changed',
        snapshot => {},
        error => {
          console.log (error);
        },
        () => {
          storage
            .ref ('imagesKindFood')
            .child (image.name)
            .getDownloadURL ()
            .then (url => {
              var data = url !== null
                ? {
                    nameKindFood: valuesKindFood.nameKindFood,
                    quantity: valuesKindFood.quantity,
                    imagesKindFood: url,
                    status: 0,
                  }
                : {
                    name: valuesKindFood.nameKindFood,
                    quantity: valuesKindFood.quantity,
                    imagesKindFood: null,
                    status: 0,
                  };

              ServiceKindFood.create (data)
                .then (() => {
                  setSubmitted (true);
                  history.push (`/webadmin/kindFood`);
                })
                .catch (e => {
                  console.log (e);
                });
            });
        }
      );
    } else {
      var data = {
        nameKindFood: valuesKindFood.nameKindFood,
        quantity: valuesKindFood.quantity,
        imagesKindFood: null,
        status: 0,
      };

      ServiceKindFood.create (data)
        .then (() => {
          setSubmitted (true);
          history.push (`/webadmin/kindFood`);
        })
        .catch (e => {
          console.log (e);
        });
    }
  };

  function close () {
    history.push ('/webadmin/kindFood');
  }

  const hanleFormSubmit = e => {
    e.preventDefault ();
    
    if (checkValidation (nameRE, valuesKindFood.nameKindFood, 'nameErr')) {
      setValueKindFood (valuesKindFood);
      saveKindFood ();
      setSubmitted (false);
    }
  };

  return (
    <div className="sub-container">
      <h2 className="titleform">Thêm loại món</h2>
      <Form onSubmit={hanleFormSubmit} className="form-insert-edit">

        <Form.Group controlId="formName" className=" form__long">
          <Form.Label> Tên loại món: </Form.Label>
          <Form.Control
            name="nameKindFood"
            type="text"
            placeholder="Name Kind Food"
            value={valuesKindFood.nameKindFood}
            onChange={e => handleInputChange (e)}
            className={valuesKindFood.nameErr ? 'err' : null}
          />
          {valuesKindFood.nameErr &&
            <h6 style={{color: 'red'}}>{valuesKindFood.nameErr}</h6>}
        </Form.Group>
        

        <Form.Group className=" form__short fileImageAddress margin-form">
          <Form.Label>Chọn ảnh: </Form.Label>
          <Form.File
            id="fileImageAddress"
            onChange={handleChange}
            // label="Choose Image:"
          />
        </Form.Group>

        <Form.Group className="row form__button">
          <Button type="submit" className="btn-add">Đồng ý</Button>
          <Button onClick={close} className="btn-close">Hủy</Button>
        </Form.Group>

      </Form>

    </div>
  );
}

export default FormInsert_KindFood;
