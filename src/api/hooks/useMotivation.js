import io from 'socket.io-client';
import { showMotivation } from 'components/Message';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useMotivation = () => {
  const token = useSelector(state => state.user.token);
  const handleMotivation = useCallback(data => {
    showMotivation(data);
  }, []);

  // подписка на события сокета при монтировании компонента
  useEffect(() => {
    const socket = io(process.env.REACT_APP_SOCKET_URL, { auth: { token } });
    socket.connect();

    socket.on('motivation', handleMotivation);

    // отписываемся от события при размонтировании компонента
    return () => {
      socket.off('motivation', handleMotivation);
      socket.disconnect();
    };
  }, [handleMotivation, token]);
};
