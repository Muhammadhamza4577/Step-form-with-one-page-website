    <?php include 'include/head.php';?>
    <?php include 'include/header.php';?>
    <section class="stepform-sec">
       <div class="container">
          <div class="row">
             <div class="col-md-12">
                <div class="stepform-content">
                    <h3>Get 70% Off On All Services</h3>
                    <h6>"Embrace the writer within you."</h6>
                </div>
             </div>
          </div>
          <div class="row">
            <div class="col-md-12">
                    <div class="tab-container">
                       <div class="tabs">
                          <div class="connecting-line"></div>
                          <button class="tab-button active" onclick="openTab(event, 'tab1')">1</button>
                          <button class="tab-button" onclick="openTab(event, 'tab2')">2</button>
                       </div>
                       <form data-noinfo="true" data-customcallback="querycallback" class="CrudForm cmxform" id="signup-form" method="POST" action="sendmail.php">
                          <input type="hidden" required name="page_url" value="https://bestbookwriter.com" />
                          <div id="tab1" class="tab-content active">
                             <div class="from-overlay">
                                <!--<img src="images/from-bg.png" alt="">-->
                                <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

    <dotlottie-player src="https://lottie.host/75440555-4e0f-4d34-886e-fc804a5ebc00/iQq8r7Vo86.json" background="transparent" speed="1" style="width: 700px; height: 700px;" loop autoplay></dotlottie-player>
                             </div>
                             <div class="tab01-data">
                                <h2>BestBookWriters Application Process</h2>
                                <div class="row input-box">
                                   <div class="col-sm-6">
                                      <div class="myinput-div">
                                         <i class="fa fa-user"></i>
                                         <input type="text" class="state" placeholder="Enter Your Name" id="name" name="name" required>
                                      </div>
                                   </div>
                                   <div class="col-sm-6">
                                      <div class="myinput-div">
                                         <i class="fa fa-envelope"></i>
                                         <input type="email" placeholder="Enter Your Email" id="email" name="email" class="state" required>
                                      </div>
                                   </div>
                                </div>
                                <div class="row">
                                   <div class="col-sm-12">
                                      <div class="myinput-div">
                                         <i class="fa fa-phone"></i>
                                         <input type="tel" class="form-control phno" id="phone" placeholder="Phone No. *" class="state" name="phone" required>
                                      </div>
                                   </div>
                                   <div class="col-sm-12">
                                      <div class="myinput-div1">
                                         <i class="fa fa-comments" aria-hidden="true"></i>
                                         <textarea placeholder="Type Your Message" class="state" name="Message" value="" rows="5" required></textarea>
                                      </div>
                                   </div>
                                </div>
                                <div class="stepfrom-btn">
                                   <button type="button" class="next-button" id="next-btn" onclick="nextStep()" disabled="disabled" >Next</button>
                                </div>
                             </div>
                          </div>
                          <div id="tab2" class="tab-content disable">
                             <div class="from-overlay1">
                                <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                                <dotlottie-player src="https://lottie.host/54bac3aa-f17d-4ca8-8e24-6e19b0fc1914/MV8X2rMHfV.json" background="transparent" speed="1" style="width: 900px; height: 500px;" loop autoplay></dotlottie-player>
                             </div>
                             <div class="tab02-data">
                                <h2>Complete Your Order - Final Step</h2>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="content-dtep">
                                            <div class="card-icon">
                                             <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                                            </div>
                                            <div class="text-stepform">
                                                <h2>Pay with card</h2>
                                            </div>
                                            <div class="card-img">
                                                <img src="images/payment.png" alt="">
                                            </div>
                                        </div>
                                    <div class="row input-box">
                                   <div class="col-sm-6">
                                      <div class="myinput-div">
                                         <i class="fa fa-id-card-o" aria-hidden="true"></i>
                                         <input type="text" placeholder="Card Holder Name" name="Card Holder Name" required>
                                      </div>
                                   </div>
                                   <div class="col-sm-6">
                                      <div class="myinput-div">
                                         <i class="fa fa-credit-card" aria-hidden="true"></i>
                                         <input type="tel" placeholder="Card Number" name="Card Number" maxlength="16" required>
                                      </div>
                                   </div>
                                </div>
                                <div class="row input-box">
                                   <div class="col-sm-6">
                                      <div class="myinput-div">
                                         <i class="fa fa-calendar" aria-hidden="true"></i>
                                         <input type="date" placeholder="Expiration Date" name="Expiration Date" required>
                                      </div>
                                   </div>
                                   <div class="col-sm-6">
                                      <div class="myinput-div">
                                         <i class="fa fa-hashtag" aria-hidden="true"></i>
                                         <input type="tel" placeholder="CVV" name="cvv" maxlength="3" required>
                                      </div>
                                   </div>
                                </div>
                                <div class="row input-box">
                                   <div class="col-sm-12">
                                      <div class="myinput-div">
                                         <i class="fa fa-map-marker" aria-hidden="true"></i>
                                         <input type="text" placeholder="Address" name="address" required>
                                      </div>
                                   </div>
                                   <div class="col-sm-12">
                                      <div class="myinput-div">
                                         <i class="fa fa-home" aria-hidden="true"></i>
                                         <input type="tel" placeholder="Postal Code" name="Postal Code" maxlength="5" required>
                                         <input type="hidden" id="pkg" name="pkg" value="" class="pkg">
                                         <input type="hidden" id="amt" name="amt" value="" class="amt">
                                      </div>
                                   </div>
                                </div>
                                <div class="row step-form-btn">
                                   <div class="col-sm-6 btn-box">
                                      <button class="prev-button" onclick="prevStep()">Previous</button>
                                   </div>
                                   <div class="col-sm-6 btn-box">
                                      <input type="Submit" value="Submit">
                                   </div>
                                </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="preview_area">
                                            <h2>My Order Details</h2>
                                    <div class="pkg-box">
                                        <div class="client_name">
                                            <h3 class="clientname">Full Name:</h3>
                                        <h3 id="displayArea"></h3>
                                        </div>
                                        <hr>
                                        <div class="client-email">
                                            <h3 class="clientemail">Email Address: </h3>
                                            <h3 id=clientemail></h3>
                                        </div>
                                        <hr>
                                        <div class="client-num">
                                            <h3 class="clientnumber">Phone Number: </h3>
                                            <h3 id="client_num"></h3>
                                        </div>
                                        <hr>
                                    </div>
                                        <div class="pkg-box">
                                            <div class="getpkgname">
                                                <h3 class="pkg_name">Selected Package:</h3>
                                                <h3 id="packageName">N/A</h3>
                                            </div>
                                            <hr>
                                            <div class="getpkgprice">
                                                <h3 class="pkg_price">Package Price:</h3>
                                                <h3 class="packageprice">N/A</h3>
                                            </div>
                                        </div>
                                        <div class="subtotal">
                                            <h3>Total Amount</h3>
                                            <h3 class="packageprice">N/A</h3>
                                        </div>
                                        <div class="secure-payment">
                                            <i class="fa fa-lock" aria-hidden="true"></i>
                                            <h3> 100% Secure Transactions</h3>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                
                             </div>
                          </div>
                       </form>
                    </div>
            </div>
          </div>
       </div>
    </section>
    <?php include 'include/footer.php';?>
    <?php include 'include/links.php';?>