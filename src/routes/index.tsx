import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';

const KickOff: FC = () => (
  <Router>
    <Suspense>
      <AppRoutes />
    </Suspense>
  </Router>
);

export default KickOff;
