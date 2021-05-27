import React from "react";
import Image from "./product-picked.png";
import Plus from "./plus.png";
import Minus from "./minus.png";
import "./PickedProduct.css";
// import PickedProductComponent from "./PickedProductComponent";

function Picked() {
  return (
    <div className="picked-product-container">
      <div className="picked-product">
        <div className="left">
          <img src={Image} alt="" />
          <div className="text">
            <h6>Product Information</h6>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repudiandae provident, nostrum quam at animi culpa modi
              repellendus sunt fugit ipsam porro ipsum velit hic dolorum
              voluptatibus amet quo corporis corrupti possimus quod quos nemo
              laborum eius. Illo accusantium laboriosam dolor facere repellendus
              deserunt tenetur, inventore dignissimos quaerat sunt neque
              doloremque vero minima sapiente, praesentium magnam! Eum sed
              assumenda, aliquam quis molestiae porro, reiciendis, hic neque
              error perspiciatis debitis consectetur eaque! Iure, voluptatum!
              Sed delectus at expedita tempore pariatur, labore natus quibusdam
              quasi quaerat neque facere, doloribus qui tempora optio
              dignissimos repellendus corrupti fuga aperiam esse cum! Laudantium
              nisi soluta blanditiis sed reprehenderit esse nulla nostrum quod
              exercitationem a quidem, alias maiores sunt. Vitae moles
            </p>
          </div>
        </div>

        <div className="right">
          <div className="picked-product-component">
            {/* Detta funkar ej */}
            {/* {PickedProductComponent} */}
            <h2 className="picked-product-component-header">SOY ISOLATE 1KG</h2>
            <h5 className="picked-product-component-flavour">Flavour</h5>
            <div class="dropdown">
              <select id="flavour" name="flavour">
                <option value="Vanilla">Vanilla</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Strawberry">Strawberry</option>
              </select>
            </div>
            <div className="buy-bar">
              <img src={Minus} className="plusminus" alt="" />
              {/* komponent */}
              <img src={Plus} className="plusminus" alt="" />
            </div>
          </div>
          <div className="nutritional-info">
            <div className="nutritional-info-header">
              Nutritional info | Description | Ingredients
            </div>
            <div className="nutritional-info-text">
              <p>
                {" "}
                Morbi nec neque laoreet, gravida mauris vitae, ultrices lectus.
                Proin ac interdum urna. Pellentesque sit amet risus laoreet ante
                rutrum luctus. Vestibulum tincidunt arcu eget dui posuere, vel
                rutrum leo vulputate. Sed interdum quis massa in blandit. Aenean
                semper nibh metus, nec tempus mauris accumsan ut. Sed quis
                ultricies elit. Etiam quis sem pulvinar, volutpat enim in,
                dictum erat. Vivamus nec varius libero. Phasellus convallis nibh
                vel turpis hendrerit sodales. Donec eu lacus eu velit
                consectetur pellentesque. Aenean porttitor egestas laoreet. Sed
                at neque elit. <br /> <br />
                <br />
                Calories 1575kJ/371kcal <br />
                Fat 1.2g <br />
                of which saturated 0.8g <br />
                Carbohydrates 2.7g <br />
                Proteins 87g
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picked;
