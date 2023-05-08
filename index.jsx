import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  // BrowserRouter,
  // Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import Detail from './pages/Host/Detail';
import Pricing from './pages/Host/Pricing';
import Photos from './pages/Host/Photos';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import Login from './pages/Login';
import './server';

function App() {
  // console.log(vansLoader);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="host" element={<HostLayout />}>
          <Route
            index
            loader={async () => {
              return null;
            }}
            element={<Dashboard />}
          />
          <Route
            path="income"
            loader={async () => {
              return null;
            }}
            element={<Income />}
          />
          <Route path="vans">
            <Route
              index
              loader={async () => {
                return null;
              }}
              element={<HostVans />}
            />
            <Route
              path=":id"
              loader={async () => {
                return null;
              }}
              element={<HostVanDetail />}
            >
              <Route
                index
                loader={async () => {
                  return null;
                }}
                element={<Detail />}
              />
              <Route
                path="pricing"
                loader={async () => {
                  return null;
                }}
                element={<Pricing />}
              />
              <Route
                path="photos"
                loader={async () => {
                  return null;
                }}
                element={<Photos />}
              />
            </Route>
          </Route>
          <Route
            path="reviews"
            loader={async () => {
              return null;
            }}
            element={<Reviews />}
          />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="vans">
          <Route
            index
            element={<Vans />}
            errorElement={<Error />}
            loader={vansLoader}
          />
          <Route path=":id" element={<VanDetail />} loader={vanDetailLoader} />
        </Route>

        <Route path="login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="host" element={<HostLayout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="income" element={<Income />} />
    //         <Route path="vans">
    //           <Route index element={<HostVans />} />
    //           <Route path=":id" element={<HostVanDetail />}>
    //             <Route index element={<Detail />} />
    //             <Route path="pricing" element={<Pricing />} />
    //             <Route path="photos" element={<Photos />} />
    //           </Route>
    //         </Route>
    //         <Route path="reviews" element={<Reviews />} />
    //       </Route>
    //       <Route path="about" element={<About />} />
    //       <Route path="vans">
    //         <Route index element={<Vans />} />
    //         <Route path=":id" element={<VanDetail />} />
    //       </Route>
    //       <Route path="*" element={<NotFound />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
