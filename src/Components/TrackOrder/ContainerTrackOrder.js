
import '../../css/Overview.css';

import '../../css/Content_Track_Order.css';





function ContainerTrackOrder() {


    return (
        <div className="sub-container">

            {/* <div className="container-body">
                <div className="sub-container"> */}

            <h1 className="titleTable">Track Order</h1>


            <div class="search-track-order">
                <h5>Track Order</h5>
                <div class="search-order">
                    <input type="text" class="form-control search-track-order" value="ORDER-84534598" />
                    <div class="input-group-append">
                        <button class="btn btn-primary btn-track" type="button">Track</button>
                    </div>
                </div>

                <div class="track-order">
                    <div class="steps">
                        <ul class="list-unstyled multi-steps">
                            <li>Ordered</li>
                            <li>Pending</li>
                            <li class="is-active">Preparing</li>
                            <li>Delivery</li>
                            <li class="li_final">Received</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="information-search-order">
                <div class="information-order">
                    <div class="title-infromation-search">
                        <h4>ORDER-3433LRKF</h4>
                        <p class="text-value-track-order ">Preparing</p>
                    </div>
                    <div class="body-information-search">
                        <div class="name-user">
                            <div class="image-user">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6zzLUMeSm7zTuL65asWu07V0X5K376rFdJw&usqp=CAU"
                                    alt="" />
                            </div>
                            <div class="title-user">
                                <p class="title-value-search ">ORDER HANDED BY</p>
                                <p class="text-value-search ">Janet Smith</p>
                            </div>
                        </div>
                        <div class="order-total">
                            <div class="icon-order-total">
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                            <div class="order-total-user">
                                <p class="title-value-search ">ORDER TOTAL</p>
                                <p class="text-value-search ">234</p>
                            </div>
                        </div>

                        <div class="date-order">
                            <div class="icon-date-order">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="date-order-user">
                                <p class="title-value-search ">ORDERED ON</p>
                                <p class="text-value-search ">29-10-2020</p>
                            </div>
                        </div>
                    </div>

                    <div class="track-order track-order-information">
                        <div class="steps">
                            <ul class="list-unstyled multi-steps">
                                <li>Ordered</li>
                                <li>Pending</li>
                                <li class="is-active">Preparing</li>
                                <li>Delivery</li>
                                <li class="li_final">Received</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            {/* </div>
            </div> */}
        </div>



    );
}

export default ContainerTrackOrder;