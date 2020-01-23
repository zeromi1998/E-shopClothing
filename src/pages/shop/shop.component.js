import React from "react";
import ShopData from "./shop.data";

import PreviewComponent from "../../components/Preview/preview.component";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: ShopData
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherCollectionProps }) => (
          <PreviewComponent key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
