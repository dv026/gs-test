import { Navigate, Route, Routes } from "react-router-dom";
import { router } from "./router";

function App() {
    return (
        <div>
            <Routes>
                {router.map((route, index) => (
                    <Route path={route.path} key={index} element={route.component} />
                ))}

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
