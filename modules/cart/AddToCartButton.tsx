import Button from '../uikit/Button';
import { addToCart } from './actions';
import { useDispatch } from 'react-redux';

interface Props {
  productId: string | number;
  onClick?: () => void;
}

const AddToCartButton = ({ productId, onClick }: Props) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        console.log(productId);
        dispatch(addToCart(productId));
        onClick != null && onClick();
      }}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
