import { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import './Alert.scss';

const Alert = ({ msg, type, show }) => {
  const { setAlert, cartItems } = useGlobalContext();
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setAlert({ msg, type, show });
    }, 3000);
    return () => {
      clearTimeout(myTimeout);
      setAlert({ msg: '', type: '', show: false });
    };
  }, [cartItems]);
  return <div>Alert</div>;
};

export default Alert;
