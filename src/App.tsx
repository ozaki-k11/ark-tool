// import './App.css'
// import { MaterialList } from './components/MaterialList';

// function App() {

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
//         <h1 className="text-2xl font-bold mb-6">ARKサドル素材ツール</h1>
//         <MaterialList />
//       </div>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import SaddleForm from "./components/SaddleForm";
import SaddleList from "./components/SaddleList";
import { MaterialList } from "./components/MaterialList";
import { useState } from "react";
import type { Saddle } from './types';

function App() {
  const [saddles, setSaddles] = useState<Saddle[]>([]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* ナビゲーション */}
        <nav className="bg-white shadow mb-4">
          <ul className="flex border-b">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block px-6 py-3 border-b-2 ${
                    isActive
                      ? "border-blue-600 text-blue-600 font-bold bg-blue-50"
                      : "border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300"
                  }`
                }
              >
                🛠 サドル管理
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/materials"
                className={({ isActive }) =>
                  `block px-6 py-3 border-b-2 ${
                    isActive
                      ? "border-blue-600 text-blue-600 font-bold bg-blue-50"
                      : "border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300"
                  }`
                }
              >
                📦 素材リスト
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* ページ内容 */}
        <main className="p-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SaddleForm onAdd={(saddle) => setSaddles([...saddles, saddle])} />
                  <SaddleList saddles={saddles} />
                </>
              }
            />
            <Route path="/materials" element={<MaterialList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
