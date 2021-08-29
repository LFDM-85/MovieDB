import React, { useState, useEffect } from 'react';

// Config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image

import NoImage from '../images/no-image-found-360x260.png';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return <div>Home Page</div>;
};

export default Home;
