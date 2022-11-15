/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import ProductList from '../../components/Store/ProductList';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Homepage extends React.PureComponent {

  render() {
    const { products, isLoading, authenticated, updateWishlist } = this.props;
    const displayProducts = products && products.length > 0;

    return (
      <div className='homepage'>
        {/* Test */}
        <Row className='flex-row'>
        <Col xs='12' lg='1' className='order-lg-1 mb-3 px-3 px-md-2'></Col>
          <Col xs='12' lg='1' className='order-lg-3 mb-3 px-3 px-md-2'></Col>
          <Col xs='12' lg='10' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='home-carousel'>
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={true}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
            </div>
          </Col>
        </Row>
        <Row className='flex-row'>
          <span style={{marginBottom: 50}}></span>
        </Row>
        {/* Products */}
                  {/* CHƯA HOÀN THÀNH  */}

        <div className='products-shop'>
          {isLoading && <LoadingIndicator />}
          {displayProducts && (
          <ProductList
            products={products}
            authenticated={authenticated}
            updateWishlist={updateWishlist}
          />
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.storeProducts,
    isLoading: state.product.isLoading,
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(Homepage);
