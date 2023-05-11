// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyAv18dlo2y6A12ItIiZELcabhBxoS3NKSg',
//   authDomain: 'vanlife-9238d.firebaseapp.com',
//   projectId: 'vanlife-9238d',
//   storageBucket: 'vanlife-9238d.appspot.com',
//   messagingSenderId: '386432100466',
//   appId: '1:386432100466:web:25a22e3f7d46b8e53d3aeb',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : '/api/vans';
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
