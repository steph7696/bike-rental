import "react-credit-cards/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import products from "../products.json";

function AccessoriesAddons(props) {
  const {
    setInsurance,
    setAccessory,
    showAccessAddons,
    selectedAccessory,
    selectedInsurance,
    setAccessoryQuantity,
    selectedAccessoryQuantity,
  } = props;

  const renderImage = (index) => (
    <img src={products.products[index].image} alt="bike"></img>
  );

  const renderProductSelection = (index, value, setMethod, string) => (
    <React.Fragment>
      <h3 className="capitalize">{products.products[index].product_type}</h3>
      <select
        className="padding"
        value={value}
        onChange={(e) => setMethod(e.target.value)}
      >
        {products.products.map(
          (product, index) =>
            product.name.includes(`${string}`) && (
              <option key={index}>{product.name}</option>
            )
        )}
      </select>{" "}
    </React.Fragment>
  );

  return (
    <div>
      <React.Fragment>
        {showAccessAddons && (
          <div className="row accessaddons-container text-center">
            <div className="column">
              {renderImage(3)}

              <React.Fragment>
                {renderProductSelection(
                  3,
                  selectedAccessory,
                  setAccessory,
                  "Helmet"
                )}
                {/* quantity */}
                {products.categories.map((category, index) => (
                  <React.Fragment key={index}>
                    {category.name === "Quantity" && (
                      <React.Fragment>
                        <h3>{products.categories[1].name}</h3>
                        <select
                          className="padding"
                          value={selectedAccessoryQuantity}
                          onChange={(e) => setAccessoryQuantity(e.target.value)}
                        >
                          {products.amount.map((amt, index) => (
                            <option key={index}>{amt.id}</option>
                          ))}
                        </select>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            </div>

            <div className="column">
              {renderImage(4)}

              {renderProductSelection(
                5,
                selectedInsurance,
                setInsurance,
                "Insurance"
              )}
            </div>
          </div>
        )}
      </React.Fragment>
    </div>
  );
}

export default AccessoriesAddons;
