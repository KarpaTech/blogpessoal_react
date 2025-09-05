// import Popup from "reactjs-popup";

// import "reactjs-popup/dist/index.css";
// import FormPostagem from '../formpostagem/FormPostagem'

// function ModalPostagem() {
//   return (
//     <>
//       <Popup
//         trigger={
//           <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
//             Nova Postagem
//           </button>
//         }
//         modal
//         contentStyle={{
//           borderRadius: "1rem",
//           paddingBottom: "2rem",
//         }}
//       >
//         <FormPostagem />
//       </Popup>
//     </>
//   );
// }

// export default ModalPostagem;

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem'; // agora funciona

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
            <h1>Nova Postagem</h1>
          </button>
        }
        modal
        contentStyle={{
          background: 'white',
          borderRadius: '10px',
          padding: '20px',
          maxWidth: '500px',
          margin: 'auto',
        }}
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;
