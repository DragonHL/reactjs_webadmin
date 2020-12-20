
import '../../css/Overview.css';

import {Form, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';

import {storage} from '../../FirebaseCofig/Firebase';

import FoodService from '../../Service/FoodService';

import {useHistory} from 'react-router-dom';

const nameRE = /[a-zA-Z]/;
const priceRE = /[0-9]{4,6}/;
const inforRE = /[a-zA-Z0-9]/;

function FormEditFood (props) {
  // console.log("---------------------table food-----------------------")
  // console.log(props.location.state) // get param on address web
  // console.log(props.location.state.price)

  // const [valuesNameKindFood, setValueNameKindFood] = useState(props.location.state.nameKindFood);
  // const [valuesKindFoodID, setValueKindFoodID] = useState(props.location.state.keyKindFood);
  const [valuesNameKindFood, setValueNameKindFood] = useState (
    props.location.state.nameKindFood
  );
  const [valuesKindFoodID, setValueKindFoodID] = useState (
    props.location.state.keyKindFood
  );

  const initialFieldValues = {
    nameFood: props.location.state.nameFood,
    informationFood: props.location.state.informationFood,
    nameKindFood: valuesNameKindFood,
    imagesFood: props.location.state.imagesFood,
    price: props.location.state.price,
    key: props.location.state.key,
    nameErr: '',
    informationErr: '',
    priceErr: '',
  };

  const [valuesFood, setValueFood] = useState (initialFieldValues);
  const [submitted, setSubmitted] = useState (false);
  const [image, setImage] = useState (null);
  const history = useHistory ();

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setValueFood (prevData => {
          return {
            ...prevData,
            nameErr: '',
            informationErr: '',
            priceErr: '',
          };
        });
      }, 3000);
      return () => {
        clearTimeout (timer);
      };
    },
    [valuesFood.informationErr, valuesFood.nameErr, valuesFood.priceErr]
  );

  const handleInputChange = e => {
    var {name, value} = e.target;
    setValueFood (prevData => {
      return {...prevData, [name]: value};
    });
  };

  const checkValidation = (re, check, err) => {
    if (!re.test (check)) {
      setValueFood (prevData => {
        return {
          ...valuesFood,
          [err]: 'Dữ liệu nhập vào không hợp lệ!',
        };
      });
      return false;
    } else {
      setValueFood (prevData => {
        return {...valuesFood, [err]: ''};
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
      const uploadTask = storage.ref (`imagesFood/${image.name}`).put (image);
      uploadTask.on (
        'state_changed',
        snapshot => {},
        error => {
          console.log (error);
        },
        () => {
          storage
            .ref ('imagesFood')
            .child (image.name)
            .getDownloadURL ()
            .then (url => {
              var data = url !== null
                ? {
                    nameFood: valuesFood.nameFood,
                    informationFood: valuesFood.informationFood,
                    nameKindFood: valuesFood.nameKindFood,
                    price: valuesFood.price,
                    imagesFood: url,
                  }
                : {
                    nameFood: valuesFood.nameFood,
                    informationFood: valuesFood.informationFood,
                    nameKindFood: valuesFood.nameKindFood,
                    price: valuesFood.price,
                  };

              FoodService.update (valuesFood.key, data)
                .then (() => {
                  setSubmitted (true);
                  console.log ('success!!!');
                  history.push ('/webadmin/food', {
                    keyKindFood: valuesKindFoodID,
                    nameKindFood: valuesNameKindFood,
                  });
                })
                .catch (e => {
                  console.log (e);
                });
            });
        }
      );
    } else {
      var data = {
        nameFood: valuesFood.nameFood,
        informationFood: valuesFood.informationFood,
        nameKindFood: valuesFood.nameKindFood,
        price: valuesFood.price,
      };

      FoodService.update (valuesFood.key, data)
        .then (() => {
          setSubmitted (true);
          console.log ('success!!!');
          history.push ('/webadmin/food', {
            keyKindFood: valuesKindFoodID,
            nameKindFood: valuesNameKindFood,
          });
        })
        .catch (e => {
          console.log (e);
        });
    }
  };

  function close () {
    history.push ('/webadmin/food', {
      keyKindFood: valuesKindFoodID,
      nameKindFood: valuesNameKindFood,
    });
  }

  const hanleFormSubmit = e => {
    e.preventDefault ();
    if (
      checkValidation (nameRE, valuesFood.nameFood, 'nameErr') &&
      checkValidation (inforRE, valuesFood.informationFood, 'informationErr') &&
      checkValidation (priceRE, valuesFood.price, 'priceErr')
    ) {
      setValueFood (valuesFood);
      saveKindFood ();
      setSubmitted (false);
    }
  };

  return (
    <div className="sub-container">
      <h2 className="titleform">
        Cập nhật thông tin {valuesNameKindFood.toLowerCase ()}
      </h2>

      <Form onSubmit={hanleFormSubmit} className="form-insert-edit">

        <Form.Group controlId="formName" className="form__long margin-form">
          <Form.Label>Tên món ăn: </Form.Label>
          <Form.Control
            name="nameFood"
            type="text"
            // placeholder="Name Food"
            value={valuesFood.nameFood}
            onChange={e => handleInputChange (e)}
            className={valuesFood.nameErr ? 'err' : null}
          />
           {valuesFood.nameErr &&
            <h6 style={{color: 'red'}}>{valuesFood.nameErr}</h6>}
        </Form.Group>

        <Form.Group
          controlId="formInformation"
          className="form__long margin-form"
        >
          <Form.Label>Thông tin: </Form.Label>
          <Form.Control
            name="informationFood"
            type="text"
            // placeholder="Information"
            value={valuesFood.informationFood}
            onChange={e => handleInputChange (e)}
            className={valuesFood.informationErr ? 'err' : null}
            as="textarea"
            rows={3}
          />
           {valuesFood.informationErr &&
            <h6 style={{color: 'red'}}>{valuesFood.informationErr}</h6>}
        </Form.Group>

        <Form.Group
          controlId="formPriceFood"
          className="form__short margin-form"
        >
          <Form.Label>Giá: </Form.Label>
          <Form.Control
            name="price"
            type="text"
            // placeholder="Price Food"
            value={valuesFood.price}
            onChange={e => handleInputChange (e)}
            className={valuesFood.priceErr ? 'err' : null}
          />
           {valuesFood.priceErr &&
            <h6 style={{color: 'red'}}>{valuesFood.priceErr}</h6>}
        </Form.Group>

        <Form.Group
          controlId="formKindFood"
          className="form__short margin-form"
        >
          <Form.Label>Loại món ăn: </Form.Label>
          <Form.Control
            type="text"
            // placeholder="Kind Food"
            value={valuesFood.nameKindFood}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className=" form__short fileImageAddress margin-form">
          <Form.Label>Chọn ảnh: </Form.Label>
          <Form.File
            id="fileImageKindFood"
            // label="Choose Image:"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="row form__button">
          <Button type="submit" className="btn-add">
            Đồng ý
          </Button>
          <Button onClick={close} className="btn-close">
            Hủy
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormEditFood;
